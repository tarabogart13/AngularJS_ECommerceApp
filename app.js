(function(){
  var gems = [{ name: 'Azurite', price: 2.95 , canPurchase: true, soldOut: false}, {name:'Pearl', price:3.56, canPurchase: false, soldOut:false}, {name:'Diamond', price:63.56, canPurchase: true, soldOut:false}];
  var app = angular.module('gemStore', []);
  
  app.controller("StoreController", function(){
   this.products = gems;   
  });
})();