(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  var user = {};

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.setUser = function(newUser) {
    user = {
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      phone: newUser.phone,
      shortName: newUser.shortName,
      favoriteItem: newUser.favoriteItem
    };
  };

  service.getUser = function() {
    return user;
  };

  service.getMenuItem = function (shortName) {
    return $http.get(ApiPath + '/menu_items/' + shortName.toUpperCase() + '.json').then(function (response) {
      return response.data;
    });
  };
}
})();
