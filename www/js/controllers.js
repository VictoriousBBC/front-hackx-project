angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ProductsCtrl', function($scope, Products) {
   $scope.products = Products.all();
})

.controller('ProductDetailCtrl', function($scope, $stateParams, Products) {
  $scope.product = Products.get($stateParams.productId);
});
