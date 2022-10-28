Nue.components.NueDaterangepicker = {
	collection: [],
	dataAttributeName: 'data-nue-daterangepicker-options',
	defaults: {
		nextArrow: '<i class="tio-chevron-right daterangepicker-custom-arrow"></i>',
		prevArrow: '<i class="tio-chevron-left daterangepicker-custom-arrow"></i>'
	},

	init: function (el, options, id) {
		const that = this
		let elems;

		if (el instanceof HTMLElement) {
			elems = [el]
		} else if (el instanceof Object) {
			elems = el
		} else {
			elems = document.querySelectorAll(el)
		}

		for (let i = 0; i < elems.length; i += 1) {
			that.addToCollection(elems[i], options, id || elems[i].id)
		}

		if (!that.collection.length) {
			return false
		}

		// initialization calls
		that._init()
	},

	getItem(item) {
		if (typeof item === 'number') {
			return this.collection[item].$initializedEl;
		} else {
			return this.collection.find(el => {
				return el.id === item;
			}).$initializedEl;
		}
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
		})
	},

	_init: function () {
		const that = this

		for (let i = 0; i < that.collection.length; i += 1) {
			const _options = that.collection[i].options
			const _$el = that.collection[i].$el

			if (_options.disablePrevDates) {
				_options.minDate = moment().format('MM/DD/YYYY')
			}

			const newDaterangepicker = $(_$el).daterangepicker(_options)
			that.collection[i].$initializedEl = newDaterangepicker

			newDaterangepicker.on('showCalendar.daterangepicker', function (el) {
				customArrows()
			})

			function customArrows() {
				if (_options.prevArrow || _options.nextArrow) {
					$('.daterangepicker .prev').html(_options.prevArrow)
					$('.daterangepicker .next').html(_options.nextArrow)
				}
			}
		}
	}
}
