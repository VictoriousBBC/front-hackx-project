angular.module('starter.services', [])

.factory('Products', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var products = [{
    id: 0,
    name: 'Space Laser',
    description: 'Kills aliens and crisps babies',
    url: 'https://en.wikipedia.org/wiki/Rick_and_Morty',
    photo: 'https://s-media-cache-ak0.pinimg.com/736x/f3/fa/b9/f3fab9541b8f852be7780eb22151ab64.jpg',
    price: 100
  }, {
    id: 1,
    name: 'Portal Gun',
    description: 'Space Travel made easy',
    url: 'https://en.wikipedia.org/wiki/Rick_and_Morty',
    photo: 'https://img1.cgtrader.com/items/95796/portal_gun_3d_model_45c8c30a-ec4e-4b9b-8c83-87f5743d1b64.jpg',
    price: 10000
  }, {
    id: 2,
    name: 'Bluranium',
    description: 'Best high in the galaxy',
    url: 'https://en.wikipedia.org/wiki/Rick_and_Morty',
    photo: 'https://s-media-cache-ak0.pinimg.com/originals/00/e1/37/00e13760338f51905189395930e51836.jpg',
    price: 1000000
  }, {
    id: 3,
    name: 'Rick-Mobile',
    description: "Don't touch the red button",
    url: 'https://en.wikipedia.org/wiki/Rick_and_Morty',
    photo: 'http://g02.a.alicdn.com/kf/HTB1..GmJVXXXXb7XXXXq6xXFXXXx/Alloy-Car-Model-1-18-Back-To-The-Future-Martyarty-DeLorean-Science-Fiction-DMC-12-II.jpg',
    price: 1000
  }, {
    id: 4,
    name: 'Morty\'s Mortar',
    description: 'The mortiest of all Morties',
    url: 'https://en.wikipedia.org/wiki/Rick_and_Morty',
    photo: 'http://images1.ynet.co.il/PicServer4/2014/04/03/5252206/5252190790083640360no.jpg',
    price: 10
  }];

  return {
    all: function() {
      return products;
    },
    

    get: function(productId) {
      for (var i = 0; i < products.length; i++) {
        if (products[i].id === parseInt(productId)) {
          return products[i];
        }
      }
      return null;
    }
  };
});
