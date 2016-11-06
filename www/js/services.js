angular.module('starter.services', [])

.factory('Products', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var products = [];
  return {
   all: function() {
      return $http.get("https://api-pied-piper.herokuapp.com/products.json")
        .then(function(response) {
          products = response.data;
          return products;
        })
    },  
    get: function(productId) {
      for (var i = 0; i < products.length; i++) {
        if (products[i].id === parseInt(productId)) {
          return products[i];
        }
      }
      return null;
    }
  }
})

.factory('Users', function() {

 var users =[{
    id: 0,
    name: 'Francois Martel',
  }];

  return {
    all: function() {
      return users;
    },
    

    get: function(userId) {
      for (var i = 0; i < users.length; i++) {
        if (users[i].id === parseInt(userId)) {
          return users[i];
        }
      }
      return null;
    }
  };
})

.factory('Likes', function() {

  var likes =[{
    id: 0,
    productId: 0,
    userId: 0,
    heart: true
  },
  {
    id: 1,
    productId: 1,
    userId: 0,
    heart: false
  },
  {
    id: 2,
    productId: 2,
    userId: 0,
    heart: null
  }];

  return {
    all: function() {
      return likes;
    },
    

    get: function(likeId) {
      for (var i = 0; i < likes.length; i++) {
        if (likes[i].id === parseInt(likeId)) {
          return likes[i];
        }
      }
      return null;
    }
  };
});