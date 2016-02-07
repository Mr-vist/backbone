/**
 * Created by acer on 2016/2/7.
 */
(function () {
    window.Test = Backbone.Model.extend({
        defaults: {
            content: ""
        }
    });
    window.TestList = Backbone.Collection.extend({
        model: Test
    });
    var data = new TestList({
        content: "hello,world!"
    });
    window.TestView = Backbone.View.extend({
        el: $("body"),
        initialize: function () {
            $("#divTip").html(data.models[0].get("content"));
        }
    });
    window.App = new TestView;
    console.log(window);


    var M = Backbone.Model.extend({
        defaults: {name: 'hello'},
        initialize: function () {
            this.on("change:name", function (model) {
                model.name = "hi";
            })
        },
        url: '/user'
    });
    var model = new M();
    model.save();

    var V = Backbone.View.extend({
        initialize: function () {
            this.listenTo(this.model, "change", this.show);
        },
        show: function (model) {
            $("body").append(this.template(this.model.toJSON()));
        },
        template: _.template($("#template").html())
    });
    var v = new V({model: model});

    model.set("name", "aaaa");
    console.log(model);
})
();