module.exports = function(window, document) {
	var apivm = require('../../common/avm.min')(window, document);
	var avm = apivm;
	var api = apivm.api;
	var Component = apivm.Component;
	var $ = apivm.$;
	(function() {
	var Test = /*@__PURE__*/ (function(Component) {
		function Test(props) {
			Component.call(this, props);
		}

		if (Component) Test.__proto__ = Component;
		Test.prototype = Object.create(Component && Component.prototype);
		Test.prototype.constructor = Test;
		Test.prototype.apiready = function() {
			this.initData(false);
		};
		Test.prototype.initData = function() {
			var that = this;
			var dataList = [
				{
					title: "项目1",
					subtitle: "这里是子标题2",
					text: ""
				},

				{
					title: "项目2",
					subtitle: "这里是子标题2",
					text: "测试文字"
				}
			];

			var listView = document.getElementById("listView");
			that.dataList = dataList;
			listView.load({
				data: dataList
			});
		};
		Test.prototype.render = function() {
			return apivm.h(
				"list-view",
				{id: "listView", class: "main", scrollToTop: true},
				apivm.h(
					"cell",
					{onclick: this.itemClick},
					apivm.h("text", {class: "title"}, "$bind.item.title"),
					apivm.h("text", {class: "subtitle"}, "$bind.item.subtitle")
				)
			);
		};

		return Test;
	})(Component);
	apivm.define("test", Test);
	apivm.render(apivm.h("test", null), "body");
})();

	window['createApp'] = function() {
		apivm.$_start();
	}
}