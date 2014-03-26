'use strict';

angular.module('presentation', [
    //'ngTouch',
    //'ngRoute',
    //'ngAnimate',
    'presentation.controllers',
    'presentation.phonegapDirectives'
]);

angular.module('presentation.controllers', [])
    .controller('PresCtrl', ['$scope', '$window', '$location', function ($scope) {
        $scope.myPictures = [];
        $scope.$watch('myPicture', function(value) {
            if (value) {
                $scope.myPictures.push(value);
            }
        }, true);

    }]);



angular.module('presentation.phonegapDirectives', [])
    .directive('camera', function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, elm, attrs, ctrl) {
                elm.on('click', function () {
                    alert(navigator.camera)
                    navigator.camera.getPicture(
                        function(imageURI) {
                            scope.$apply(function() {
                                ctrl.$setViewValue(imageURI);
                            });
                        },
                        function(err) {
                            ctrl.$setValidity('error', false);
                        }, {quality: 50, 
                            destinationType: Camera.DestinationType.FILE_URI});
                });
            }
        };
    });

//var app = {
//    // Application Constructor
//    initialize: function() {
//        this.bindEvents();
//    },
//    // Bind Event Listeners
//    //
//    // Bind any events that are required on startup. Common events are:
//    // 'load', 'deviceready', 'offline', and 'online'.
//    bindEvents: function() {
//        document.addEventListener('deviceready', this.onDeviceReady, false);
//    },
//    // deviceready Event Handler
//    //
//    // The scope of 'this' is the event. In order to call the 'receivedEvent'
//    // function, we must explicity call 'app.receivedEvent(...);'
//    onDeviceReady: function() {
//        app.receivedEvent('deviceready');
//    },
//    // Update DOM on a Received Event
//    receivedEvent: function (id) {
//        //var element = document.getElementById('deviceProperties');
//        //element.innerHTML = 'Device Platform: ' + device.platform + '<br />'

//        //    //'Device Name: ' + device.name + '<br />' +
//            //                'Device Cordova: ' + device.cordova + '<br />' +
//            //                'Device Platform: ' + device.platform + '<br />';
//            //                //'Device UUID: ' + device.uuid + '<br />' +
//                            //'Device Model: ' + device.model + '<br />' +
//                            //'Device Version: ' + device.version + '<br />';


//        var parentElement = document.getElementById(id);
//        var listeningElement = parentElement.querySelector('.listening');
//        var receivedElement = parentElement.querySelector('.received');

//        listeningElement.setAttribute('style', 'display:none;');
//        receivedElement.setAttribute('style', 'display:block;');
//        //parentElement.querySelector('.listening').innerText = 'Tacos';
//        alert(navigator.notification);
//        var title = 'Title';
//        var message = 'This message is not about tacos uploaded';
//        if (navigator.notification) {
//            alert('TacosNF');
//            navigator.notification.alert(message, null, title, 'OK');
//        } else {
//            alert('TacosAL');
//            message = message + 'FUCK';
//            alert(title ? (title + ": " + message) : message);
//        }
//        alert('TacosEnd');
//        console.log('Received Event: ' + id);
//    }
//};
