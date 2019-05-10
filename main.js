/*global require*/
'use strict';

(function(win){
    var baseUrl = document.getElementById('main').getAttribute("data-baseurl");

    // file dependcy
    var config = {
        baseUrl:baseUrl,
        paths:{
            zepto:'libs/zepto.min',
            jquery:'libs/jquery',
            underscore:'libs/underscore-min',
            backbone:'libs/backbone',
            backboneLocalstorage: 'libs/backbone.localStorage',
            text:'libs/text'   //用于requirejs导入html类型的依赖
        },
        shim:{      //引入没有使用requirejs模块写法的类库
            'underscore': {
                exports: '_'
            },
            'backbone': {
                deps: ['underscore', 'jquery'],
                exports: 'Backbone'
            },
            backboneLocalstorage: {
                deps: ['backbone'],
                exports: 'Store'
            }
        }
    };

    require.config(config);

    require(['backbone', 'underscore', 'router'], function(){
        Backbone.history.start();   //开始监控url变化
    });

})(window);