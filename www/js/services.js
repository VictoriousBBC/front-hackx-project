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
    price: 0
  }, {
    id: 1,
    name: 'Portal Gun',
    description: 'Space Travel made easy',
    url: 'https://en.wikipedia.org/wiki/Rick_and_Morty',
    photo: 'https://img1.cgtrader.com/items/95796/portal_gun_3d_model_45c8c30a-ec4e-4b9b-8c83-87f5743d1b64.jpg',
    price: 10
  }, {
    id: 2,
    name: 'Bluranium',
    description: 'Best high in the galaxy',
    url: 'https://en.wikipedia.org/wiki/Rick_and_Morty',
    photo: 'https://s-media-cache-ak0.pinimg.com/originals/00/e1/37/00e13760338f51905189395930e51836.jpg',
    price: 20
  }, {
    id: 3,
    name: 'Rick-Mobile',
    description: "Don't touch the red button",
    url: 'https://en.wikipedia.org/wiki/Rick_and_Morty',
    photo: 'http://g02.a.alicdn.com/kf/HTB1..GmJVXXXXb7XXXXq6xXFXXXx/Alloy-Car-Model-1-18-Back-To-The-Future-Martyarty-DeLorean-Science-Fiction-DMC-12-II.jpg',
    price: 30
  }, {
    id: 4,
    name: 'Morty\'s Mortar',
    description: 'The mortiest of all Morties',
    url: 'https://en.wikipedia.org/wiki/Rick_and_Morty',
    photo: 'http://images1.ynet.co.il/PicServer4/2014/04/03/5252206/5252190790083640360no.jpg',
    price: 40
  }, {
    id: 5,
    name: 'LightSaber',
    description: 'Don\'t try to clean the blade, there\'s no need doing it',
    url: 'https://fr.wikipedia.org/wiki/Sabre_laser',
    photo: 'http://vignette4.wikia.nocookie.net/swgdm/images/e/ef/Sabre_laser_%C3%A0_lame_bleu_.jpg/revision/latest?cb=20130205090617&path-prefix=fr',
    price: 50
  }, {
    id: 6,
    name: 'Death Star',
    description: 'No bro\, don\'t touch this red button ! No ! Don\'t or we\'re all gonna ...',
    url: 'https://en.wikipedia.org/wiki/Death_Star',
    photo: 'http://vignette3.wikia.nocookie.net/starwars/images/9/96/Death_star_blueprints_sw_card_trader.png/revision/latest?cb=20160620042622',
    price: 60
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