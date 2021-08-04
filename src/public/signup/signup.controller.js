(function() {
    'use strict';

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuService'];
    function SignUpController(MenuService) {
        let SignUpCtrl = this;
        var SignUpCtrl.firstName = "";
        var SignUpCtrl.lastName = "";
        var SignUpCtrl.email = "";
        var SignUpCtrl.phone = "";
        var SignUpCtrl.phone = "";
        var SignUpCtrl.foundMessage = false;
        var SignUpCtrl.errorMessage = false;

    SignUpCtrl.signUp = function(event) {
        var user = {
                firstName: SignUpCtrl.firstName,
                lastName: SignUpCtrl.lastName,
                email: SignUpCtrl.email,
                phone: SignUpCtrl.phone,
                shortName: SignUpCtrl.phone,
                favoriteItem: ""
              };

    MenuService.getMenuItem(SignUpCtrl.shortName)
                .then(function(data) {
                    user.favoriteItem = data;
                    MenuService.setUser(user);
                    SignUpCtrl.foundMessage = true;
                })
                .catch(function(err) {
                  user.favoriteItem = "";
                  MenuService.setUser(user);
                  SignUpCtrl.foundMessage = false;
                });
      SignUpCtrl.submitMessage = true;
    }
  }
}());
