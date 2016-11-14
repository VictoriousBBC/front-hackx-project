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

    liked: function() {
      return $http.get("https://api-pied-piper.herokuapp.com/liked.json")
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
    },
    like: function(productId) {
      return $http.post("https://api-pied-piper.herokuapp.com/products/" + productId + "/like.json", {liking: {action: "like"}}).then(function(response){
        liking = response.data;
        return liking;
      });
    },
    dislike: function(productId) {
      return $http.post("https://api-pied-piper.herokuapp.com/products/" + productId + "/dislike.json", {liking: {action: "dislike"}}).then(function(response){
        liking = response.data;
        return liking;
      });
    },
    remove: function(productId) {
      console.log("test")
      return $http.post("https://api-pied-piper.herokuapp.com/products/" + productId + "/remove.json", {liking: {action: "remove"}}).then(function(response){
        console.log("test 2");
        liking = response.data;
        return liking;
      });
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
