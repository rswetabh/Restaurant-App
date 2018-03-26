// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract:true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.offers', {
    url: '/offers',
    views: {
      'menuContent': {
        templateUrl: 'templates/offers.html'
      }
    }
  })

  .state('app.items', {
      url: '/items',
      views: {
        'menuContent': {
          templateUrl: 'templates/items.html'
        }
      }
    })

  // Each tab has its own nav history stack:

  .state('app.items.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
      }
    }
  })

  .state('app.items.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
        }
      }
    })
    .state('app.items.chat-detail', {
      url: '/chats/:itemId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
        }
      }
    })

  .state('app.items.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
      }
    }
  })
////////////////////////////////////////////////////////////////////
  
    .state('app.dashboard', {
      url: '/dashboard',
      views: {
        'menuContent': {
          templateUrl: 'templates/dashboard.html',
          
        }
      }
    })

  .state('app.single', {
    url: '/dashboard/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        
      }
    }
  })
  
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/dashboard');
});
