'use strict';
define(['text!pages/login/login.html'], function (tpl) {

    var LoginView = Backbone.View.extend({
        el: '#container',

        initialize: function () {
            this.listenTo(this.model, "change", this.render);
        },
        template: _.template(tpl),
        render: function (name) {
            this.$el.html(this.template({'name': name}));
        }
    });

    return LoginView;
});