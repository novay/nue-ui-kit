Nue.components.NueSortable = {
	collection: [],
	dataAttributeName: 'data-nue-sortable-options',
	defaults: {
		zoomOnScroll: false
	},

	init: function (el, options, id) {
		const that = this;
		let elems;

		if (el instanceof HTMLElement) {
			elems = [el];
		} else if (el instanceof Object) {
			elems = el;
		} else {
			elems = document.querySelectorAll(el);
		}

		for (let i = 0; i < elems.length; i += 1) {
			that.addToCollection(elems[i], options, id || elems[i].id);
		}

		if (!that.collection.length) {
			return false;
		}

		// initialization calls
		that._init();
		//./
	},

	addToCollection(item, options, id) {
		this.collection.push({
			$el: item,
			id: id || null,
			options: Object.assign(
				{},
				this.defaults,
				item.hasAttribute(this.dataAttributeName)
					? JSON.parse(item.getAttribute(this.dataAttributeName))
					: {},
				options,
			),
		});
	},

	getItems() {
		const that = this;
		let newCollection = [];

		for (let i = 0; i < that.collection.length; i += 1) {
			newCollection.push(that.collection[i].$initializedEl);
		}

		return newCollection;
	},

	getItem(ind) {
		return this.collection[ind].$initializedEl;
	},

	_init: function () {
		const that = this;

		for (let i = 0; i < that.collection.length; i += 1) {
			if (that.collection[i].hasOwnProperty('$initializedEl')) {
				continue;
			}

			that.collection[i].$initializedEl = new Sortable(
				that.collection[i].$el,
				that.collection[i].options,
			);
		}
	},
};
