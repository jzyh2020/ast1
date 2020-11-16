(function() {
	var Tpl = /*@__PURE__*/ (function(Component) {
		function Tpl(props) {
			Component.call(this, props);
			this.data = {};
		}

		if (Component) Tpl.__proto__ = Component;
		Tpl.prototype = Object.create(Component && Component.prototype);
		Tpl.prototype.constructor = Tpl;
		Tpl.prototype.apiready = function() {};
		Tpl.prototype.render = function() {
			return apivm.h(
				"view",
				{class: "page"},
				apivm.h("image", {
					placeholder: "../image/placeholder.jpg",
					src:
						"https://gw.alicdn.com/bao/uploaded/i1/1794536469/TB1CZMUfY1YBuNjSszeXXablFXa_!!0-item_pic.jpg",
					class: "img"
				})
			);
		};

		return Tpl;
	})(Component);
	Tpl.css = {
		".page": {height: "100%"},
		".img": {width: "100px", height: "100px"}
	};
	apivm.define("tpl", Tpl);
	apivm.render(apivm.h("tpl", null), "body");
})();
