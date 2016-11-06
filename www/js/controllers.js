angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Products) {
  rand = Products.all();
   // $scope.product = Products.get(rand[Math.floor(Math.random() * rand.length)].id);

  $scope.product = [];
  Products.all().then(function(apiProducts) {
    $scope.product = apiProducts[Math.floor(Math.random() * apiProducts.length)];
  });

})

.controller('ProductsCtrl', function($scope, Products, Likes, Users) {
    $scope.products = [];
    Products.liked().then(function(apiProducts) {
      $scope.products = apiProducts;
      console.log(apiProducts);
  });
})

.controller('ProductDetailCtrl', function($scope, $stateParams, Products) {
  $scope.product = Products.get($stateParams.productId);
})

