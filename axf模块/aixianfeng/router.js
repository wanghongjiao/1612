define(['backbone'],function(){

  var Router = Backbone.Router.extend({

    routes: {
      "home":      "homeFun",
      "store":     "storeFun",
      "order":     "orderFun" ,
      "cart":      "cartFun" ,
      "mine":      "mineFun",
      "*actions":  "defaultAction"
    },

    homeFun: function() {
        require(['./modules/home/home.js'],function(home){
          home.render();
            // home.lunbo();
          home.aj_lunbo();
          home.home_xfSell();
          home.home_navs();
          home.home_skill();
        })
    },

    storeFun: function() {
        require(['./modules/store/store.js'],function(store){
          store.render();
          store.store_change();
          store.jump();
        })
    },
    orderFun:function(){
      require(['./modules/order/order.js'],function(order){
        order.render();
        order.order_list();
        order.delePrevent();
      })
    },
    cartFun:function(){
      require(['./modules/cart/cart.js'],function(cart){
        cart.render();
        cart.gods();
      })
    },
    mineFun:function(){
      require(['./modules/mine/mine.js'],function(mine){
        mine.render();
        mine.jump();
      })
    },
    defaultAction:function(){
      location.hash = 'home';
    }
  });

  var router = new Router();


})
