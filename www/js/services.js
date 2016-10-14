angular.module('starter.services', [])

.factory('Products', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var products = [{
    id: 0,
    name: 'Space Laser',
    description: 'Kills aliens and crisps babies',
    url: 'https://en.wikipedia.org/wiki/Rick_and_Morty',
    photo: 'http://www.abcnewspoint.com/wp-content/uploads/2015/03/List-of-Top-10-Most-Popular-Richest-Rappers-in-the-World-2015-Snoop-Dogg.jpgm',
    price: 100
  }, {
    id: 1,
    name: 'Portal Gun',
    description: 'Space Travel made easy',
    url: 'https://en.wikipedia.org/wiki/Rick_and_Morty',
    photo: 'http://www.abcnewspoint.com/wp-content/uploads/2015/03/List-of-Top-10-Most-Popular-Richest-Rappers-in-the-World-2015-Snoop-Dogg.jpgm',
    price: 10000
  }, {
    id: 2,
    name: 'Bluranium',
    description: 'Best high in the galaxy',
    url: 'https://en.wikipedia.org/wiki/Rick_and_Morty',
    photo: 'http://www.abcnewspoint.com/wp-content/uploads/2015/03/List-of-Top-10-Most-Popular-Richest-Rappers-in-the-World-2015-Snoop-Dogg.jpgm',
    price: 1000000
  }, {
    id: 3,
    name: 'Rick-Mobile',
    description: 'Don\'t touch the red button',
    url: 'https://en.wikipedia.org/wiki/Rick_and_Morty',
    photo: 'http://www.abcnewspoint.com/wp-content/uploads/2015/03/List-of-Top-10-Most-Popular-Richest-Rappers-in-the-World-2015-Snoop-Dogg.jpgm',
    price: 1000
  }, {
    id: 4,
    name: 'Morty\'s Mortar',
    description: 'The mortiest of all Morties',
    url: 'https://en.wikipedia.org/wiki/Rick_and_Morty',
    photo: 'http://www.abcnewspoint.com/wp-content/uploads/2015/03/List-of-Top-10-Most-Popular-Richest-Rappers-in-the-World-2015-Snoop-Dogg.jpgm',
    price: 10
  }];

  return {
    all: function() {
      return products;
    },
    remove: function(product) {
      products.splice(products.indexOf(product), 1);
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
