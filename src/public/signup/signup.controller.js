(function() {
    'use strict';

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuService'];
    function SignUpController(MenuService) {
        let SignUpCtrl = this;
        SignUpCtrl.foundMessage = false;

    SignUpCtrl.submit = function(event) {
        var user = {
                firstName: SignUpCtrl.firstName,
                lastName: SignUpCtrl.lastName,
                email: SignUpCtrl.email,
                phone: SignUpCtrl.phone,
                shortName: SignUpCtrl.shortName,
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
