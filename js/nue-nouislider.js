Nue.components.NueNoUISlider = {
  collection: [],
  dataAttributeName: 'data-nue-nouislider-options',
  defaults: {
    connect: true,
    result_min_target_el: null,
    result_max_target_el: null,
    foreground_target_el: null,
    tooltip: {}
  },

  init(el, options, id) {
    const that = this
    let elems

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
      return false;
    }

    // initialization calls
    that._init()
  },

  addToCollection(item, options, id) {
    const that = this

    this.collection.push({
      $el: item,
      id: id || null,
      options: Object.assign(
        {},
        that.defaults,
        item.hasAttribute(that.dataAttributeName)
          ? JSON.parse(item.getAttribute(that.dataAttributeName))
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

  getItem(item) {
    if (typeof item === 'number') {
      return this.collection[item].$initializedEl;
    } else {
      return this.collection.find(el => {
        return el.id === item;
      }).$initializedEl;
    }
  },

  _init() {
    const that = this

    for (let i = 0; i < that.collection.length; i += 1) {
      let _options
      let _$el

      if (that.collection[i].hasOwnProperty('$initializedEl')) {
        continue;
      }

      _options = that.collection[i].options
      _$el = that.collection[i].$el

      /* Start : Init */

      that.collection[i].$initializedEl = noUiSlider.create(_$el, _options)

      /* End : Init */

      that.collection[i].$initializedEl.on('update', () => {
        that.updateMinField(that.collection[i].$initializedEl, _options)
        that.updateMaxField(that.collection[i].$initializedEl, _options)
        that.updateChart(that.collection[i].$initializedEl, _options)
      })


      if (_options.showTooltips) that.showTooltips(that.collection[i].$initializedEl, _options)
      if (_options.result_min_target_el) that.resultMinTargetEl(that.collection[i].$initializedEl, _options)
      if (_options.result_max_target_el) that.resultMaxTargetEl(that.collection[i].$initializedEl, _options)

      /* End : Init */
    }
  },

  updateMinField: function (newNueNoUISlider, settings) {
    if (settings.result_min_target_el && newNueNoUISlider.get().length) {
      const $result_min_target_el = document.querySelector(settings.result_min_target_el)
      if ($result_min_target_el instanceof HTMLInputElement) {
        $result_min_target_el.value = typeof newNueNoUISlider.get() === Array ? parseInt(newNueNoUISlider.get()[0]) : parseInt(newNueNoUISlider.get())
      } else {
        $result_min_target_el.innerHTML = typeof newNueNoUISlider.get() === Array ? parseInt(newNueNoUISlider.get()[0]) : parseInt(newNueNoUISlider.get())
      }
    }
  },

  updateMaxField: function (newNueNoUISlider, settings) {
    if (settings.result_max_target_el && newNueNoUISlider.get().length <= 2) {
      const $result_max_target_el = document.querySelector(settings.result_max_target_el)
      if ($result_max_target_el instanceof HTMLInputElement) {
        $result_max_target_el.value = typeof newNueNoUISlider.get() === "object" ? parseInt(newNueNoUISlider.get()[1]) : parseInt(newNueNoUISlider.get())
      } else {
        $result_max_target_el.innerHTML = typeof newNueNoUISlider.get() === "object" ? parseInt(newNueNoUISlider.get()[1]) : parseInt(newNueNoUISlider.get())
      }
    }
  },

  updateChart: function (newNueNoUISlider, settings) {
    const percents = {
      from: (100 * parseInt(newNueNoUISlider.get()[0])) / settings.range.max,
      to: (100 * parseInt(newNueNoUISlider.get()[1])) / settings.range.max
    }

    if (settings.foreground_target_el && newNueNoUISlider.get().length <= 2) {
      var w = (100 - (percents.from + (100 - percents.to)));
      const $chart = document.querySelector(settings.foreground_target_el)
      $chart.style.left = `${percents.from}%`
      $chart.style.width = `${w}%`

      const $nextChart = document.querySelector(settings.foreground_target_el + '> *')

      $nextChart.style.width = `${$chart.parentElement.clientWidth}px`
      $nextChart.style.marginLeft = `${-(($chart.parentElement.clientWidth / 100) * percents.from)}px`
    }
  },

  showTooltips: function (newNueNoUISlider, settings) {
    const tooltips = Array.from(typeof newNueNoUISlider.get() === 'object' ? newNueNoUISlider.get() : [true])
    newNueNoUISlider.updateOptions({
      tooltips: tooltips.map(t => wNumb({
        decimals: 0,
        postfix: settings.tooltip.postfix,
        prefix:settings.tooltip.prefix
      }))
    })
  },

  resultMinTargetEl: function (newNueNoUISlider, settings) {
    const $result_min_target_el = document.querySelector(settings.result_min_target_el)

    $result_min_target_el.addEventListener('change', (e) => {
      newNueNoUISlider.set([e.target.value, null])
    })
  },

  resultMaxTargetEl: function (newNueNoUISlider, settings) {
    const $result_max_target_el = document.querySelector(settings.result_max_target_el)

    $result_max_target_el.addEventListener('change', (e) => {
      newNueNoUISlider.set([null, e.target.value])
    })
  }
}
