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
		Test.prototype.initData = function(loadMore) {
			var that = this;
			var skip = that.dataList ? that.dataList.length : 0;
			var dataList = [];
			for (var i = 0; i < 20; i++) {
				dataList[i] = {
					title: "项目" + (i + skip),
					subtitle: "这里是子标题"
				};
			}
			var listView = document.getElementById("listView");
			if (loadMore) {
				that.dataList = that.dataList.concat(dataList);
				listView.insert({
					data: dataList
				});
			} else {
				that.dataList = dataList;
				listView.load({
					data: dataList
				});
			}
		};
		Test.prototype.onscrolltolower = function() {
			this.initData(true);
		};
		Test.prototype.itemClick = function(e) {
			api.alert({
				msg: "当前项索引：" + e.target.index
			});
		};
		Test.prototype.render = function() {
			return apivm.h(
				"list-view",
				{
					id: "listView",
					class: "main",
					scrollToTop: true,
					onscrolltolower: this.onscrolltolower
				},
				apivm.h(
					"cell",
					{onclick: this.itemClick},
					apivm.h("text", {class: "title"}, "$bind.item.title"),
					apivm.h("text", {class: "subtitle"}, "$bind.item.subtitle")
				),
				apivm.h(
					"list-footer",
					{class: "footer"},
					apivm.h("text", null, "加载中...")
				)
			);
		};

		return Test;
	})(Component);
	Test.css = {
		".main": {width: "100%", height: "100%"},
		input: {margin: "8px"},
		cell: {
			padding: "8px",
			height: "60px",
			borderBottom: "0.5px solid #ddd",
			backgroundColor: "#fff"
		},
		"cell:active": {backgroundColor: "#ddd"},
		".title": {fontWeight: "bold", fontSize: "18px", color: "#000"},
		".subtitle": {color: "#333"},
		".footer": {justifyContent: "center", alignItems: "center"}
	};
	apivm.define("test", Test);
	apivm.render(apivm.h("test", null), "body");
})();
