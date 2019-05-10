define([
    'text!pages/main/main.html'
], function(tpl) {
    'use strict';
    
    var MainView = 
    Backbone.View.extend({
        el:'#container',
        events:{
            'click button':'clickSpan'
        },
        initialize: function(){
            this.model.on('nameEvent', this.render, this);      //监听事件
        },
        render: function(){
            var template = _.template(tpl);
            this.$el.html(template({name:this.model.get('name')}))
        },
        clickSpan: function(){
            alert('you clicked this');
        }
    });
    return MainView;
});