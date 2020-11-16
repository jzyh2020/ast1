(function() {
	var Test = /*@__PURE__*/ (function(Component) {
		function Test(props) {
			Component.call(this, props);
			this.data = {
				menuList: ["view", "text", "image"],
				selectedIndex: 0
			};
		}

		if (Component) Test.__proto__ = Component;
		Test.prototype = Object.create(Component && Component.prototype);
		Test.prototype.constructor = Test;
		Test.prototype.apiready = function() {
			var frames = [];
			for (var i = 0; i < this.data.menuList.length; i++) {
				var name = this.data.menuList[i];
				frames.push({
					name: name,
					url: "https://m.baidu.com"
				});
			}
			var frameGroup = document.getElementById("frameGroup");
			frameGroup.load({
				frames: frames
			});
		};
		Test.prototype.fnSetFrameGroupIndex = function(e) {
			var index = e.target.dataset.index;
			if (this.data.selectedIndex != index) {
				this.data.selectedIndex = index;
				var frameGroup = document.getElementById("frameGroup");
				frameGroup.setIndex({
					index: index,
					scroll: true
				});
			}
		};
		Test.prototype.onchange = function(e) {
			var index = e.detail.index;
			if (this.data.selectedIndex != index) {
				this.data.selectedIndex = index;
			}
		};
		Test.prototype.render = function() {
			var this$1 = this;
			return apivm.h(
				"view",
				{class: "main"},
				apivm.h(
					"view",
					{class: "nav"},
					(Array.isArray(this.data.menuList)
						? this.data.menuList
						: Object.values(this.data.menuList)
					).map(function(item, index) {
						return apivm.h(
							"view",
							{class: "menu"},
							apivm.h(
								"view",
								{
									class:
										this$1.data.selectedIndex == index ? "item item-selected" : "item",
									"data-index": index,
									onclick: this$1.fnSetFrameGroupIndex
								},
								apivm.h(
									"text",
									{
										class:
											this$1.data.selectedIndex == index
												? "item-title item-title-selected"
												: "item-title"
									},
									item
								)
							)
						);
					})
				),
				apivm.h("frame-group", {
					id: "frameGroup",
					preload: "0",
					onchange: this.onchange
				})
			);
		};

		return Test;
	})(Component);
	Test.css = {
		".main": {width: "100%", height: "100%"},
		".nav": {
			flexDirection: "row",
			width: "100%",
			height: "40px",
			backgroundColor: "#f0f0f0"
		},
		".menu": {flex: "1", alignItems: "center"},
		".item": {
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
			height: "100%",
			borderBottom: "2px solid #f0f0f0"
		},
		".item-selected": {borderBottom: "2px solid #e3007f"},
		".item-title": {color: "#444", fontSize: "14px"},
		".item-title-selected": {color: "#e3007f"},
		"#frameGroup": {flex: "1"}
	};
	apivm.define("test", Test);
	apivm.render(apivm.h("test", null), "body");
})();
