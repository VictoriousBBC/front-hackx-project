angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Products) {
  rand = Products.all();
  $scope.product = Products.get(rand[Math.floor(Math.random() * rand.length)].id);
  // Version précédente ici
  // var rand = [0 => Products.all().length;
  // $scope.product = Products.get(rand[Math.floor(Math.random() * rand.length)]);
    //Afficher la valeur du rand
    console.log(rand[Math.floor(Math.random() * rand.length)])
})

.controller('ProductsCtrl', function($scope, Products, Likes, Users) {
    $scope.products = Products.all();
    // set user equal to Francois
    var user = Users.get(0); // => User object with 'Francois'
    console.log(Users.get(0));

    // set all likes from Francois
     var liked_products = [];
     console.log(liked_products);

   // var userLikes = user.likes;
   alert(user.likes);
   // var arrayLength = myStringArray.length;

    // for (var i = 0; i < arrayLength; i++) {
   // alert(myStringArray[i]);
    //Do something
    //}
    //    user.likes.foreach( like ) {
    // liked_products << like.product
    // }
    // return liked_products
    // set array with all products associated to likes by Francois
    // });

  //  $scope.products = liked_products
  //  console.log($scope.products);

})

.controller('ProductDetailCtrl', function($scope, $stateParams, Products) {
  $scope.product = Products.get($stateParams.productId);
});
