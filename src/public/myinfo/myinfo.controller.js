(function () {
  "use strict";

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['user'];
  function MyInfoController(user) {
    var MyInfoCtrl = this;
    MyInfoCtrl.signedUp = false;

    if(user) {
      MyInfoCtrl.signedUp = true;
      MyInfoCtrl.firstName = user.firstName;
      MyInfoCtrl.lastName = user.lastName;
      MyInfoCtrl.email = user.email;
      MyInfoCtrl.phone = user.phone;
      MyInfoCtrl.shortName = user.shortName;
      MyInfoCtrl.favoriteItem = user.favoriteItem;
      if (MyInfoCtrl.favoriteItem === "") {
        MyInfoCtrl.noFavorite = true;
      }
    }
    else {
      $ctrl.signedUp = false;
    }
  }
