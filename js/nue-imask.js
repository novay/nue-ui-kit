Nue.components.NueMask = {
  collection: [],
  dataAttributeName: 'data-nue-mask-options',
  defaults: {
    mask: null
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

      that.collection[i].$initializedEl = new IMask(_$el, _options)

      /* End : Init */
    }
  }
}
