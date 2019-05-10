define([
], function() {
    'use strict';
    
    var MainModel = 
    Backbone.Model.extend({
        defaults:{
            name:"hello main"
        },
        fetch: function(){
            var m = this;
            setTimeout(function(){
                m.set({name:'another main'});
                m.trigger('nameEvent');
            },1000);
        }
    });

    return MainModel;
    
});