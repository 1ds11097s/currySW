exports.ids = [18];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(101);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("7bc1a860", content, true)

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-item-group{flex:0 1 auto;max-width:100%;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(103);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("a8b3b032", content, true)

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-icon{color:rgba(0,0,0,.54)}.theme--light.v-icon:focus:after{opacity:.12}.theme--light.v-icon.v-icon.v-icon--disabled{color:rgba(0,0,0,.38)!important}.theme--dark.v-icon{color:#fff}.theme--dark.v-icon:focus:after{opacity:.24}.theme--dark.v-icon.v-icon.v-icon--disabled{color:hsla(0,0%,100%,.5)!important}.v-icon.v-icon{align-items:center;display:inline-flex;font-feature-settings:\"liga\";font-size:24px;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;transition:.3s cubic-bezier(.25,.8,.5,1),visibility 0s;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}.v-icon.v-icon:after{background-color:currentColor;border-radius:50%;content:\"\";display:inline-block;height:100%;left:0;opacity:0;pointer-events:none;position:absolute;top:0;transform:scale(1.3);transition:opacity .2s cubic-bezier(.4,0,.6,1);width:100%}.v-icon.v-icon--dense{font-size:20px}.v-icon--right{margin-left:8px}.v-icon--left{margin-right:8px}.v-icon.v-icon.v-icon--link{cursor:pointer;outline:none}.v-icon--disabled{pointer-events:none}.v-icon--dense .v-icon__component,.v-icon--dense .v-icon__svg{height:20px}.v-icon__component,.v-icon__svg{height:24px;width:24px}.v-icon__svg{fill:currentColor}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 3 modules
var VBtn = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js + 3 modules
var VCard = __webpack_require__(87);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(86);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(93);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VSlideGroup/VSlideGroup.sass
var VSlideGroup = __webpack_require__(98);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VIcon/VIcon.sass
var VIcon = __webpack_require__(102);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/binds-attrs/index.js
var binds_attrs = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/sizeable/index.js
var sizeable = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(1);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
 // Mixins




 // Util

 // Types



var SIZE_MAP;
(function (SIZE_MAP) {
  SIZE_MAP["xSmall"] = "12px";
  SIZE_MAP["small"] = "16px";
  SIZE_MAP["default"] = "24px";
  SIZE_MAP["medium"] = "28px";
  SIZE_MAP["large"] = "36px";
  SIZE_MAP["xLarge"] = "40px";
})(SIZE_MAP || (SIZE_MAP = {}));
function isFontAwesome5(iconType) {
  return ['fas', 'far', 'fal', 'fab', 'fad', 'fak'].some(val => iconType.includes(val));
}
function isSvgPath(icon) {
  return /^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(icon) && /[\dz]$/i.test(icon) && icon.length > 4;
}
const VIcon_VIcon = Object(mixins["a" /* default */])(binds_attrs["a" /* default */], colorable["a" /* default */], sizeable["a" /* default */], themeable["a" /* default */]
/* @vue/component */).extend({
  name: 'v-icon',
  props: {
    dense: Boolean,
    disabled: Boolean,
    left: Boolean,
    right: Boolean,
    size: [Number, String],
    tag: {
      type: String,
      required: false,
      default: 'i'
    }
  },
  computed: {
    medium() {
      return false;
    },
    hasClickListener() {
      return Boolean(this.listeners$.click || this.listeners$['!click']);
    }
  },
  methods: {
    getIcon() {
      let iconName = '';
      if (this.$slots.default) iconName = this.$slots.default[0].text.trim();
      return Object(helpers["p" /* remapInternalIcon */])(this, iconName);
    },
    getSize() {
      const sizes = {
        xSmall: this.xSmall,
        small: this.small,
        medium: this.medium,
        large: this.large,
        xLarge: this.xLarge
      };
      const explicitSize = Object(helpers["m" /* keys */])(sizes).find(key => sizes[key]);
      return explicitSize && SIZE_MAP[explicitSize] || Object(helpers["e" /* convertToUnit */])(this.size);
    },
    // Component data for both font icon and SVG wrapper span
    getDefaultData() {
      return {
        staticClass: 'v-icon notranslate',
        class: {
          'v-icon--disabled': this.disabled,
          'v-icon--left': this.left,
          'v-icon--link': this.hasClickListener,
          'v-icon--right': this.right,
          'v-icon--dense': this.dense
        },
        attrs: {
          'aria-hidden': !this.hasClickListener,
          disabled: this.hasClickListener && this.disabled,
          type: this.hasClickListener ? 'button' : undefined,
          ...this.attrs$
        },
        on: this.listeners$
      };
    },
    getSvgWrapperData() {
      const fontSize = this.getSize();
      const wrapperData = {
        ...this.getDefaultData(),
        style: fontSize ? {
          fontSize,
          height: fontSize,
          width: fontSize
        } : undefined
      };
      this.applyColors(wrapperData);
      return wrapperData;
    },
    applyColors(data) {
      data.class = {
        ...data.class,
        ...this.themeClasses
      };
      this.setTextColor(this.color, data);
    },
    renderFontIcon(icon, h) {
      const newChildren = [];
      const data = this.getDefaultData();
      let iconType = 'material-icons'; // Material Icon delimiter is _
      // https://material.io/icons/

      const delimiterIndex = icon.indexOf('-');
      const isMaterialIcon = delimiterIndex <= -1;
      if (isMaterialIcon) {
        // Material icon uses ligatures.
        newChildren.push(icon);
      } else {
        iconType = icon.slice(0, delimiterIndex);
        if (isFontAwesome5(iconType)) iconType = '';
      }
      data.class[iconType] = true;
      data.class[icon] = !isMaterialIcon;
      const fontSize = this.getSize();
      if (fontSize) data.style = {
        fontSize
      };
      this.applyColors(data);
      return h(this.hasClickListener ? 'button' : this.tag, data, newChildren);
    },
    renderSvgIcon(icon, h) {
      const svgData = {
        class: 'v-icon__svg',
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 24 24',
          role: 'img',
          'aria-hidden': true
        }
      };
      const size = this.getSize();
      if (size) {
        svgData.style = {
          fontSize: size,
          height: size,
          width: size
        };
      }
      return h(this.hasClickListener ? 'button' : 'span', this.getSvgWrapperData(), [h('svg', svgData, [h('path', {
        attrs: {
          d: icon
        }
      })])]);
    },
    renderSvgIconComponent(icon, h) {
      const data = {
        class: {
          'v-icon__component': true
        }
      };
      const size = this.getSize();
      if (size) {
        data.style = {
          fontSize: size,
          height: size,
          width: size
        };
      }
      this.applyColors(data);
      const component = icon.component;
      data.props = icon.props;
      data.nativeOn = data.on;
      return h(this.hasClickListener ? 'button' : 'span', this.getSvgWrapperData(), [h(component, data)]);
    }
  },
  render(h) {
    const icon = this.getIcon();
    if (typeof icon === 'string') {
      if (isSvgPath(icon)) {
        return this.renderSvgIcon(icon, h);
      }
      return this.renderFontIcon(icon, h);
    }
    return this.renderSvgIconComponent(icon, h);
  }
});
/* harmony default export */ var components_VIcon_VIcon = (external_vue_default.a.extend({
  name: 'v-icon',
  $_wrapperFor: VIcon_VIcon,
  functional: true,
  render(h, {
    data,
    children
  }) {
    let iconName = ''; // Support usage of v-text and v-html

    if (data.domProps) {
      iconName = data.domProps.textContent || data.domProps.innerHTML || iconName; // Remove nodes so it doesn't
      // overwrite our changes

      delete data.domProps.textContent;
      delete data.domProps.innerHTML;
    }
    return h(VIcon_VIcon, data, iconName ? [iconName] : children);
  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js


/* harmony default export */ var components_VIcon = (components_VIcon_VIcon);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/transitions/index.js + 2 modules
var transitions = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VItemGroup/VItemGroup.sass
var VItemGroup = __webpack_require__(100);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/comparable/index.js


/* harmony default export */ var comparable = (external_vue_default.a.extend({
  name: 'comparable',
  props: {
    valueComparator: {
      type: Function,
      default: helpers["g" /* deepEqual */]
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/proxyable/index.js
var proxyable = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VItemGroup/VItemGroup.js
// Styles
 // Mixins



 // Utilities



const BaseItemGroup = Object(mixins["a" /* default */])(comparable, proxyable["a" /* default */], themeable["a" /* default */]).extend({
  name: 'base-item-group',
  props: {
    activeClass: {
      type: String,
      default: 'v-item--active'
    },
    mandatory: Boolean,
    max: {
      type: [Number, String],
      default: null
    },
    multiple: Boolean,
    tag: {
      type: String,
      default: 'div'
    }
  },
  data() {
    return {
      // As long as a value is defined, show it
      // Otherwise, check if multiple
      // to determine which default to provide
      internalLazyValue: this.value !== undefined ? this.value : this.multiple ? [] : undefined,
      items: []
    };
  },
  computed: {
    classes() {
      return {
        'v-item-group': true,
        ...this.themeClasses
      };
    },
    selectedIndex() {
      return this.selectedItem && this.items.indexOf(this.selectedItem) || -1;
    },
    selectedItem() {
      if (this.multiple) return undefined;
      return this.selectedItems[0];
    },
    selectedItems() {
      return this.items.filter((item, index) => {
        return this.toggleMethod(this.getValue(item, index));
      });
    },
    selectedValues() {
      if (this.internalValue == null) return [];
      return Array.isArray(this.internalValue) ? this.internalValue : [this.internalValue];
    },
    toggleMethod() {
      if (!this.multiple) {
        return v => this.valueComparator(this.internalValue, v);
      }
      const internalValue = this.internalValue;
      if (Array.isArray(internalValue)) {
        return v => internalValue.some(intern => this.valueComparator(intern, v));
      }
      return () => false;
    }
  },
  watch: {
    internalValue: 'updateItemsState',
    items: 'updateItemsState'
  },
  created() {
    if (this.multiple && !Array.isArray(this.internalValue)) {
      Object(console["c" /* consoleWarn */])('Model must be bound to an array if the multiple property is true.', this);
    }
  },
  methods: {
    genData() {
      return {
        class: this.classes
      };
    },
    getValue(item, i) {
      return item.value === undefined ? i : item.value;
    },
    onClick(item) {
      this.updateInternalValue(this.getValue(item, this.items.indexOf(item)));
    },
    register(item) {
      const index = this.items.push(item) - 1;
      item.$on('change', () => this.onClick(item)); // If no value provided and mandatory,
      // assign first registered item

      if (this.mandatory && !this.selectedValues.length) {
        this.updateMandatory();
      }
      this.updateItem(item, index);
    },
    unregister(item) {
      if (this._isDestroyed) return;
      const index = this.items.indexOf(item);
      const value = this.getValue(item, index);
      this.items.splice(index, 1);
      const valueIndex = this.selectedValues.indexOf(value); // Items is not selected, do nothing

      if (valueIndex < 0) return; // If not mandatory, use regular update process

      if (!this.mandatory) {
        return this.updateInternalValue(value);
      } // Remove the value

      if (this.multiple && Array.isArray(this.internalValue)) {
        this.internalValue = this.internalValue.filter(v => v !== value);
      } else {
        this.internalValue = undefined;
      } // If mandatory and we have no selection
      // add the last item as value

      /* istanbul ignore else */

      if (!this.selectedItems.length) {
        this.updateMandatory(true);
      }
    },
    updateItem(item, index) {
      const value = this.getValue(item, index);
      item.isActive = this.toggleMethod(value);
    },
    // https://github.com/vuetifyjs/vuetify/issues/5352
    updateItemsState() {
      this.$nextTick(() => {
        if (this.mandatory && !this.selectedItems.length) {
          return this.updateMandatory();
        } // TODO: Make this smarter so it
        // doesn't have to iterate every
        // child in an update

        this.items.forEach(this.updateItem);
      });
    },
    updateInternalValue(value) {
      this.multiple ? this.updateMultiple(value) : this.updateSingle(value);
    },
    updateMandatory(last) {
      if (!this.items.length) return;
      const items = this.items.slice();
      if (last) items.reverse();
      const item = items.find(item => !item.disabled); // If no tabs are available
      // aborts mandatory value

      if (!item) return;
      const index = this.items.indexOf(item);
      this.updateInternalValue(this.getValue(item, index));
    },
    updateMultiple(value) {
      const defaultValue = Array.isArray(this.internalValue) ? this.internalValue : [];
      const internalValue = defaultValue.slice();
      const index = internalValue.findIndex(val => this.valueComparator(val, value));
      if (this.mandatory &&
      // Item already exists
      index > -1 &&
      // value would be reduced below min
      internalValue.length - 1 < 1) return;
      if (
      // Max is set
      this.max != null &&
      // Item doesn't exist
      index < 0 &&
      // value would be increased above max
      internalValue.length + 1 > this.max) return;
      index > -1 ? internalValue.splice(index, 1) : internalValue.push(value);
      this.internalValue = internalValue;
    },
    updateSingle(value) {
      const isSame = this.valueComparator(this.internalValue, value);
      if (this.mandatory && isSame) return;
      this.internalValue = isSame ? undefined : value;
    }
  },
  render(h) {
    return h(this.tag, this.genData(), this.$slots.default);
  }
});
/* harmony default export */ var VItemGroup_VItemGroup = (BaseItemGroup.extend({
  name: 'v-item-group',
  provide() {
    return {
      itemGroup: this
    };
  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/mobile/index.js


/* @vue/component */

/* harmony default export */ var mobile = (external_vue_default.a.extend({
  name: 'mobile',
  props: {
    mobileBreakpoint: {
      type: [Number, String],
      default() {
        // Avoid destroying unit
        // tests for users
        return this.$vuetify ? this.$vuetify.breakpoint.mobileBreakpoint : undefined;
      },
      validator: v => !isNaN(Number(v)) || ['xs', 'sm', 'md', 'lg', 'xl'].includes(String(v))
    }
  },
  computed: {
    isMobile() {
      const {
        mobile,
        width,
        name,
        mobileBreakpoint
      } = this.$vuetify.breakpoint; // Check if local mobileBreakpoint matches
      // the application's mobileBreakpoint

      if (mobileBreakpoint === this.mobileBreakpoint) return mobile;
      const mobileWidth = parseInt(this.mobileBreakpoint, 10);
      const isNumber = !isNaN(mobileWidth);
      return isNumber ? width < mobileWidth : name === this.mobileBreakpoint;
    }
  },
  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('mobile-break-point')) {
      Object(console["d" /* deprecate */])('mobile-break-point', 'mobile-breakpoint', this);
    }
  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/directives/resize/index.js
function inserted(el, binding, vnode) {
  const callback = binding.value;
  const options = binding.options || {
    passive: true
  };
  window.addEventListener('resize', callback, options);
  el._onResize = Object(el._onResize);
  el._onResize[vnode.context._uid] = {
    callback,
    options
  };
  if (!binding.modifiers || !binding.modifiers.quiet) {
    callback();
  }
}
function unbind(el, binding, vnode) {
  var _a;
  if (!((_a = el._onResize) === null || _a === void 0 ? void 0 : _a[vnode.context._uid])) return;
  const {
    callback,
    options
  } = el._onResize[vnode.context._uid];
  window.removeEventListener('resize', callback, options);
  delete el._onResize[vnode.context._uid];
}
const Resize = {
  inserted,
  unbind
};
/* harmony default export */ var resize = (Resize);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/directives/touch/index.js

const handleGesture = wrapper => {
  const {
    touchstartX,
    touchendX,
    touchstartY,
    touchendY
  } = wrapper;
  const dirRatio = 0.5;
  const minDistance = 16;
  wrapper.offsetX = touchendX - touchstartX;
  wrapper.offsetY = touchendY - touchstartY;
  if (Math.abs(wrapper.offsetY) < dirRatio * Math.abs(wrapper.offsetX)) {
    wrapper.left && touchendX < touchstartX - minDistance && wrapper.left(wrapper);
    wrapper.right && touchendX > touchstartX + minDistance && wrapper.right(wrapper);
  }
  if (Math.abs(wrapper.offsetX) < dirRatio * Math.abs(wrapper.offsetY)) {
    wrapper.up && touchendY < touchstartY - minDistance && wrapper.up(wrapper);
    wrapper.down && touchendY > touchstartY + minDistance && wrapper.down(wrapper);
  }
};
function touchstart(event, wrapper) {
  const touch = event.changedTouches[0];
  wrapper.touchstartX = touch.clientX;
  wrapper.touchstartY = touch.clientY;
  wrapper.start && wrapper.start(Object.assign(event, wrapper));
}
function touchend(event, wrapper) {
  const touch = event.changedTouches[0];
  wrapper.touchendX = touch.clientX;
  wrapper.touchendY = touch.clientY;
  wrapper.end && wrapper.end(Object.assign(event, wrapper));
  handleGesture(wrapper);
}
function touchmove(event, wrapper) {
  const touch = event.changedTouches[0];
  wrapper.touchmoveX = touch.clientX;
  wrapper.touchmoveY = touch.clientY;
  wrapper.move && wrapper.move(Object.assign(event, wrapper));
}
function createHandlers(value) {
  const wrapper = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: value.left,
    right: value.right,
    up: value.up,
    down: value.down,
    start: value.start,
    move: value.move,
    end: value.end
  };
  return {
    touchstart: e => touchstart(e, wrapper),
    touchend: e => touchend(e, wrapper),
    touchmove: e => touchmove(e, wrapper)
  };
}
function touch_inserted(el, binding, vnode) {
  const value = binding.value;
  const target = value.parent ? el.parentElement : el;
  const options = value.options || {
    passive: true
  }; // Needed to pass unit tests

  if (!target) return;
  const handlers = createHandlers(binding.value);
  target._touchHandlers = Object(target._touchHandlers);
  target._touchHandlers[vnode.context._uid] = handlers;
  Object(helpers["m" /* keys */])(handlers).forEach(eventName => {
    target.addEventListener(eventName, handlers[eventName], options);
  });
}
function touch_unbind(el, binding, vnode) {
  const target = binding.value.parent ? el.parentElement : el;
  if (!target || !target._touchHandlers) return;
  const handlers = target._touchHandlers[vnode.context._uid];
  Object(helpers["m" /* keys */])(handlers).forEach(eventName => {
    target.removeEventListener(eventName, handlers[eventName]);
  });
  delete target._touchHandlers[vnode.context._uid];
}
const Touch = {
  inserted: touch_inserted,
  unbind: touch_unbind
};
/* harmony default export */ var touch = (Touch);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VSlideGroup/VSlideGroup.js
// Styles
 // Components


 // Extensions

 // Mixins

 // Directives


 // Utilities



function bias(val) {
  const c = 0.501;
  const x = Math.abs(val);
  return Math.sign(val) * (x / ((1 / c - 2) * (1 - x) + 1));
}
function calculateUpdatedOffset(selectedElement, widths, rtl, currentScrollOffset) {
  const clientWidth = selectedElement.clientWidth;
  const offsetLeft = rtl ? widths.content - selectedElement.offsetLeft - clientWidth : selectedElement.offsetLeft;
  if (rtl) {
    currentScrollOffset = -currentScrollOffset;
  }
  const totalWidth = widths.wrapper + currentScrollOffset;
  const itemOffset = clientWidth + offsetLeft;
  const additionalOffset = clientWidth * 0.4;
  if (offsetLeft <= currentScrollOffset) {
    currentScrollOffset = Math.max(offsetLeft - additionalOffset, 0);
  } else if (totalWidth <= itemOffset) {
    currentScrollOffset = Math.min(currentScrollOffset - (totalWidth - itemOffset - additionalOffset), widths.content - widths.wrapper);
  }
  return rtl ? -currentScrollOffset : currentScrollOffset;
}
function calculateCenteredOffset(selectedElement, widths, rtl) {
  const {
    offsetLeft,
    clientWidth
  } = selectedElement;
  if (rtl) {
    const offsetCentered = widths.content - offsetLeft - clientWidth / 2 - widths.wrapper / 2;
    return -Math.min(widths.content - widths.wrapper, Math.max(0, offsetCentered));
  } else {
    const offsetCentered = offsetLeft + clientWidth / 2 - widths.wrapper / 2;
    return Math.min(widths.content - widths.wrapper, Math.max(0, offsetCentered));
  }
}
const BaseSlideGroup = Object(mixins["a" /* default */])(BaseItemGroup, mobile).extend({
  name: 'base-slide-group',
  directives: {
    Resize: resize,
    Touch: touch
  },
  props: {
    activeClass: {
      type: String,
      default: 'v-slide-item--active'
    },
    centerActive: Boolean,
    nextIcon: {
      type: String,
      default: '$next'
    },
    prevIcon: {
      type: String,
      default: '$prev'
    },
    showArrows: {
      type: [Boolean, String],
      validator: v => typeof v === 'boolean' || ['always', 'desktop', 'mobile'].includes(v)
    }
  },
  data: () => ({
    isOverflowing: false,
    resizeTimeout: 0,
    startX: 0,
    isSwipingHorizontal: false,
    isSwiping: false,
    scrollOffset: 0,
    widths: {
      content: 0,
      wrapper: 0
    }
  }),
  computed: {
    canTouch() {
      return typeof window !== 'undefined';
    },
    __cachedNext() {
      return this.genTransition('next');
    },
    __cachedPrev() {
      return this.genTransition('prev');
    },
    classes() {
      return {
        ...BaseItemGroup.options.computed.classes.call(this),
        'v-slide-group': true,
        'v-slide-group--has-affixes': this.hasAffixes,
        'v-slide-group--is-overflowing': this.isOverflowing
      };
    },
    hasAffixes() {
      switch (this.showArrows) {
        // Always show arrows on desktop & mobile
        case 'always':
          return true;
        // Always show arrows on desktop

        case 'desktop':
          return !this.isMobile;
        // Show arrows on mobile when overflowing.
        // This matches the default 2.2 behavior

        case true:
          return this.isOverflowing || Math.abs(this.scrollOffset) > 0;
        // Always show on mobile

        case 'mobile':
          return this.isMobile || this.isOverflowing || Math.abs(this.scrollOffset) > 0;
        // https://material.io/components/tabs#scrollable-tabs
        // Always show arrows when
        // overflowed on desktop

        default:
          return !this.isMobile && (this.isOverflowing || Math.abs(this.scrollOffset) > 0);
      }
    },
    hasNext() {
      if (!this.hasAffixes) return false;
      const {
        content,
        wrapper
      } = this.widths; // Check one scroll ahead to know the width of right-most item

      return content > Math.abs(this.scrollOffset) + wrapper;
    },
    hasPrev() {
      return this.hasAffixes && this.scrollOffset !== 0;
    }
  },
  watch: {
    internalValue: 'setWidths',
    // When overflow changes, the arrows alter
    // the widths of the content and wrapper
    // and need to be recalculated
    isOverflowing: 'setWidths',
    scrollOffset(val) {
      if (this.$vuetify.rtl) val = -val;
      let scroll = val <= 0 ? bias(-val) : val > this.widths.content - this.widths.wrapper ? -(this.widths.content - this.widths.wrapper) + bias(this.widths.content - this.widths.wrapper - val) : -val;
      if (this.$vuetify.rtl) scroll = -scroll;
      this.$refs.content.style.transform = `translateX(${scroll}px)`;
    }
  },
  mounted() {
    if (typeof ResizeObserver !== 'undefined') {
      const obs = new ResizeObserver(() => {
        this.onResize();
      });
      obs.observe(this.$el);
      obs.observe(this.$refs.content);
      this.$on('hook:destroyed', () => {
        obs.disconnect();
      });
    } else {
      let itemsLength = 0;
      this.$on('hook:beforeUpdate', () => {
        var _a;
        itemsLength = (((_a = this.$refs.content) === null || _a === void 0 ? void 0 : _a.children) || []).length;
      });
      this.$on('hook:updated', () => {
        var _a;
        if (itemsLength === (((_a = this.$refs.content) === null || _a === void 0 ? void 0 : _a.children) || []).length) return;
        this.setWidths();
      });
    }
  },
  methods: {
    onScroll() {
      this.$refs.wrapper.scrollLeft = 0;
    },
    onFocusin(e) {
      if (!this.isOverflowing) return; // Focused element is likely to be the root of an item, so a
      // breadth-first search will probably find it in the first iteration

      for (const el of Object(helpers["d" /* composedPath */])(e)) {
        for (const vm of this.items) {
          if (vm.$el === el) {
            this.scrollOffset = calculateUpdatedOffset(vm.$el, this.widths, this.$vuetify.rtl, this.scrollOffset);
            return;
          }
        }
      }
    },
    // Always generate next for scrollable hint
    genNext() {
      const slot = this.$scopedSlots.next ? this.$scopedSlots.next({}) : this.$slots.next || this.__cachedNext;
      return this.$createElement('div', {
        staticClass: 'v-slide-group__next',
        class: {
          'v-slide-group__next--disabled': !this.hasNext
        },
        on: {
          click: () => this.onAffixClick('next')
        },
        key: 'next'
      }, [slot]);
    },
    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-slide-group__content',
        ref: 'content',
        on: {
          focusin: this.onFocusin
        }
      }, this.$slots.default);
    },
    genData() {
      return {
        class: this.classes,
        directives: [{
          name: 'resize',
          value: this.onResize
        }]
      };
    },
    genIcon(location) {
      let icon = location;
      if (this.$vuetify.rtl && location === 'prev') {
        icon = 'next';
      } else if (this.$vuetify.rtl && location === 'next') {
        icon = 'prev';
      }
      const upperLocation = `${location[0].toUpperCase()}${location.slice(1)}`;
      const hasAffix = this[`has${upperLocation}`];
      if (!this.showArrows && !hasAffix) return null;
      return this.$createElement(components_VIcon, {
        props: {
          disabled: !hasAffix
        }
      }, this[`${icon}Icon`]);
    },
    // Always generate prev for scrollable hint
    genPrev() {
      const slot = this.$scopedSlots.prev ? this.$scopedSlots.prev({}) : this.$slots.prev || this.__cachedPrev;
      return this.$createElement('div', {
        staticClass: 'v-slide-group__prev',
        class: {
          'v-slide-group__prev--disabled': !this.hasPrev
        },
        on: {
          click: () => this.onAffixClick('prev')
        },
        key: 'prev'
      }, [slot]);
    },
    genTransition(location) {
      return this.$createElement(transitions["a" /* VFadeTransition */], [this.genIcon(location)]);
    },
    genWrapper() {
      return this.$createElement('div', {
        staticClass: 'v-slide-group__wrapper',
        directives: [{
          name: 'touch',
          value: {
            start: e => this.overflowCheck(e, this.onTouchStart),
            move: e => this.overflowCheck(e, this.onTouchMove),
            end: e => this.overflowCheck(e, this.onTouchEnd)
          }
        }],
        ref: 'wrapper',
        on: {
          scroll: this.onScroll
        }
      }, [this.genContent()]);
    },
    calculateNewOffset(direction, widths, rtl, currentScrollOffset) {
      const sign = rtl ? -1 : 1;
      const newAbosluteOffset = sign * currentScrollOffset + (direction === 'prev' ? -1 : 1) * widths.wrapper;
      return sign * Math.max(Math.min(newAbosluteOffset, widths.content - widths.wrapper), 0);
    },
    onAffixClick(location) {
      this.$emit(`click:${location}`);
      this.scrollTo(location);
    },
    onResize() {
      /* istanbul ignore next */
      if (this._isDestroyed) return;
      this.setWidths();
    },
    onTouchStart(e) {
      const {
        content
      } = this.$refs;
      this.startX = this.scrollOffset + e.touchstartX;
      content.style.setProperty('transition', 'none');
      content.style.setProperty('willChange', 'transform');
    },
    onTouchMove(e) {
      if (!this.canTouch) return;
      if (!this.isSwiping) {
        // only calculate disableSwipeHorizontal during the first onTouchMove invoke
        // in order to ensure disableSwipeHorizontal value is consistent between onTouchStart and onTouchEnd
        const diffX = e.touchmoveX - e.touchstartX;
        const diffY = e.touchmoveY - e.touchstartY;
        this.isSwipingHorizontal = Math.abs(diffX) > Math.abs(diffY);
        this.isSwiping = true;
      }
      if (this.isSwipingHorizontal) {
        // sliding horizontally
        this.scrollOffset = this.startX - e.touchmoveX; // temporarily disable window vertical scrolling

        document.documentElement.style.overflowY = 'hidden';
      }
    },
    onTouchEnd() {
      if (!this.canTouch) return;
      const {
        content,
        wrapper
      } = this.$refs;
      const maxScrollOffset = content.clientWidth - wrapper.clientWidth;
      content.style.setProperty('transition', null);
      content.style.setProperty('willChange', null);
      if (this.$vuetify.rtl) {
        /* istanbul ignore else */
        if (this.scrollOffset > 0 || !this.isOverflowing) {
          this.scrollOffset = 0;
        } else if (this.scrollOffset <= -maxScrollOffset) {
          this.scrollOffset = -maxScrollOffset;
        }
      } else {
        /* istanbul ignore else */
        if (this.scrollOffset < 0 || !this.isOverflowing) {
          this.scrollOffset = 0;
        } else if (this.scrollOffset >= maxScrollOffset) {
          this.scrollOffset = maxScrollOffset;
        }
      }
      this.isSwiping = false; // rollback whole page scrolling to default

      document.documentElement.style.removeProperty('overflow-y');
    },
    overflowCheck(e, fn) {
      e.stopPropagation();
      this.isOverflowing && fn(e);
    },
    scrollIntoView
    /* istanbul ignore next */() {
      if (!this.selectedItem && this.items.length) {
        const lastItemPosition = this.items[this.items.length - 1].$el.getBoundingClientRect();
        const wrapperPosition = this.$refs.wrapper.getBoundingClientRect();
        if (this.$vuetify.rtl && wrapperPosition.right < lastItemPosition.right || !this.$vuetify.rtl && wrapperPosition.left > lastItemPosition.left) {
          this.scrollTo('prev');
        }
      }
      if (!this.selectedItem) {
        return;
      }
      if (this.selectedIndex === 0 || !this.centerActive && !this.isOverflowing) {
        this.scrollOffset = 0;
      } else if (this.centerActive) {
        this.scrollOffset = calculateCenteredOffset(this.selectedItem.$el, this.widths, this.$vuetify.rtl);
      } else if (this.isOverflowing) {
        this.scrollOffset = calculateUpdatedOffset(this.selectedItem.$el, this.widths, this.$vuetify.rtl, this.scrollOffset);
      }
    },
    scrollTo
    /* istanbul ignore next */(location) {
      this.scrollOffset = this.calculateNewOffset(location, {
        // Force reflow
        content: this.$refs.content ? this.$refs.content.clientWidth : 0,
        wrapper: this.$refs.wrapper ? this.$refs.wrapper.clientWidth : 0
      }, this.$vuetify.rtl, this.scrollOffset);
    },
    setWidths() {
      window.requestAnimationFrame(() => {
        if (this._isDestroyed) return;
        const {
          content,
          wrapper
        } = this.$refs;
        this.widths = {
          content: content ? content.clientWidth : 0,
          wrapper: wrapper ? wrapper.clientWidth : 0
        }; // https://github.com/vuetifyjs/vuetify/issues/13212
        // We add +1 to the wrappers width to prevent an issue where the `clientWidth`
        // gets calculated wrongly by the browser if using a different zoom-level.

        this.isOverflowing = this.widths.wrapper + 1 < this.widths.content;
        this.scrollIntoView();
      });
    }
  },
  render(h) {
    return h('div', this.genData(), [this.genPrev(), this.genWrapper(), this.genNext()]);
  }
});
/* harmony default export */ var VSlideGroup_VSlideGroup = (BaseSlideGroup.extend({
  name: 'v-slide-group',
  provide() {
    return {
      slideGroup: this
    };
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/groupable/index.js + 1 modules
var groupable = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VItemGroup/VItem.js
// Mixins
 // Utilities


 // Types


/* @vue/component */

const BaseItem = external_vue_default.a.extend({
  props: {
    activeClass: String,
    value: {
      required: false
    }
  },
  data: () => ({
    isActive: false
  }),
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    }
  },
  render() {
    if (!this.$scopedSlots.default) {
      Object(console["c" /* consoleWarn */])('v-item is missing a default scopedSlot', this);
      return null;
    }
    let element;
    /* istanbul ignore else */

    if (this.$scopedSlots.default) {
      element = this.$scopedSlots.default({
        active: this.isActive,
        toggle: this.toggle
      });
    }
    if (Array.isArray(element) && element.length === 1) {
      element = element[0];
    }
    if (!element || Array.isArray(element) || !element.tag) {
      Object(console["c" /* consoleWarn */])('v-item should only contain a single element', this);
      return element;
    }
    element.data = this._b(element.data || {}, element.tag, {
      class: {
        [this.activeClass]: this.isActive
      }
    });
    return element;
  }
});
/* harmony default export */ var VItem = (Object(mixins["a" /* default */])(BaseItem, Object(groupable["a" /* factory */])('itemGroup', 'v-item', 'v-item-group')).extend({
  name: 'v-item'
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VSlideGroup/VSlideItem.js
// Extensions
 // Mixins



/* harmony default export */ var VSlideItem = (Object(mixins["a" /* default */])(BaseItem, Object(groupable["a" /* factory */])('slideGroup')
/* @vue/component */).extend({
  name: 'v-slide-item'
}));
// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=5190f64a









var lib_vue_loader_options_pagesvue_type_template_id_5190f64a_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VRow["a" /* default */], {
    staticClass: "main-area rounded-xl py-10",
    attrs: {
      "justify": "center"
    }
  }, [_vm.$vuetify.breakpoint.mdAndUp ? [_c('div', {
    staticClass: "headline font-weight-bold my-6",
    staticStyle: {
      "font-family": "Anton!important"
    }
  }, [_c('h1', {
    staticClass: "h1-font-size"
  }, [_vm._v("CurrySW RTA Room")])]), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "rounded-xl",
    attrs: {
      "cols": "11"
    }
  }, [_c('div', {
    staticClass: "headline font-weight-bold my-6",
    staticStyle: {
      "font-family": "Anton!important"
    }
  }, [_vm._v("What is this site?")]), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "main-banner-area rounded-xl pa-4",
    attrs: {
      "justify": "center"
    }
  }, [_c(VCol["a" /* default */], {
    staticStyle: {
      "color": "white"
    },
    attrs: {
      "cols": "12"
    }
  }, [_vm._v("\n          Here are some of the videos I post on youtube that I recommend"), _c('br'), _vm._v("\nI created this site to let you know about me not from youtube but from google search"), _c('br'), _vm._v("\nIn addition to posting videos, I also provide rerune service"), _c('br'), _vm._v("\nIf you are interested, please contact me through discord\n        ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "headline font-weight-bold my-6",
    staticStyle: {
      "font-family": "Anton!important"
    }
  }, [_vm._v("PROFILE")]), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "main-banner-area rounded-xl headline font-weight-bold pa-4 mb-4",
    attrs: {
      "justify": "center"
    }
  }, [_c(VCol["a" /* default */], {
    staticClass: "text-center",
    attrs: {
      "cols": "3"
    }
  }, [_c('span', [_vm._v("RTA Season Record")]), _c('br'), _vm._v(" "), _c('span', [_vm._v("Season29 - G3")]), _c('br'), _vm._v(" "), _c('span', [_vm._v("Season30 - G2")]), _c('br'), _vm._v(" "), _c('span', [_vm._v("Season31 - G3")])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "7"
    }
  }, [_c('span', [_vm._v("I post videos on Youtube with various monsters")]), _c('br'), _vm._v(" "), _c('span', [_vm._v("My play style is turn2, I mainly use mo long, riley, leo and verde, etc")]), _c('br'), _vm._v(" "), _c('span', [_vm._v("Recently I have been able to achieve G3 consistently")])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "href": "https://www.youtube.com/channel/UCl1OAS6CZ0VZXV2cJ-5Vkdw",
      "text": "",
      "color": "blue",
      "target": "_blank"
    }
  }, [_c('span', {
    staticClass: "text-left"
  }, [_vm._v("Youtube【EN】")])]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "href": "/",
      "text": "",
      "color": "blue"
    }
  }, [_c('span', {
    staticClass: "text-left"
  }, [_vm._v("Youtube【JP】")])]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "href": "https://discord.gg/daAeAZnwcH",
      "text": "",
      "color": "blue",
      "target": "_blank"
    }
  }, [_c('span', {
    staticClass: "text-left"
  }, [_vm._v("Discord")])])], 1)], 1), _vm._v(" "), [_c('adsbygoogle', {
    attrs: {
      "ad-slot": "5892748097"
    }
  })], _vm._v(" "), _c('div', {
    staticClass: "headline font-weight-bold my-6",
    staticStyle: {
      "font-family": "Anton!important"
    }
  }, [_vm._v("MOST POPULAR VIDEOS")]), _vm._v(" "), _c('div', {
    staticClass: "main-banner-area rounded-xl pa-4 mb-4"
  }, [_c(VSlideGroup_VSlideGroup, {
    attrs: {
      "multiple": "",
      "show-arrows": ""
    }
  }, [_c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-pc",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "/manon",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "src": "p1.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("CRDMG 200%, Crazy Power Rage Manon is tooooo dangerous🥶🥶🥶")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-pc",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "/xingzhe",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "src": "p2.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("WTF!? SPD+0 All Revenge Xing Zhe Debut🤩🤩🤩")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-pc",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "/chamie",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "src": "p3.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("Full Power ATK 4000 over, Crazy DMG Dealer Chamie🤪🤪🤪")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-pc",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "/gronn",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "src": "p4.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("The Power of Gronn, Don't touch him, or you'll get an automatic counter😝😝😝")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-pc",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "/mork",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    staticStyle: {
      "position": "relative"
    },
    attrs: {
      "src": "p5.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("The Power of Mork, He is God Tank and can put up shields that are too hard😐😐😐")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-pc",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "/rex",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    staticStyle: {
      "position": "relative"
    },
    attrs: {
      "src": "p6.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("The Power of Rex, His skill3 is too dangerous, and his skill2 is too supportive🥰🥰")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-pc",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "/lamiella",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    staticStyle: {
      "position": "relative"
    },
    attrs: {
      "src": "p7.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("The Power Lamiella, She destroys everything, her skill2 is too dangerous😉😉😉")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "headline font-weight-bold my-6",
    staticStyle: {
      "font-family": "Anton!important"
    }
  }, [_vm._v("TOP RECOMMEND VIDEOS")]), _vm._v(" "), _c('div', {
    staticClass: "main-banner-area rounded-xl pa-4 mb-4"
  }, [_c(VSlideGroup_VSlideGroup, {
    attrs: {
      "multiple": "",
      "show-arrows": ""
    }
  }, [_c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-pc",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/cidhI0sVXWw",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "src": "r4.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("THE BUFFED Icasha, NEW TURN2 GUARDIAN Debut🤩🤩🤩")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-pc",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/I57IIU2vYls",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    staticStyle: {
      "position": "relative"
    },
    attrs: {
      "src": "r5.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("+43000! All HP Chow is New Crazy Trap😬😬😬 ")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-pc",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/ivdyM1bpfno",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    staticStyle: {
      "position": "relative"
    },
    attrs: {
      "src": "r6.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("ATK+2100, CRDMG 214%, he is world No.1 One Shot Monster in season28")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-pc",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/dxHpqnD9B5k",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "src": "r1.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("【Summoners War | Curry's RTA】Unbreakable! The Power Resis 100% Laika!")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-pc",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/qRZ0sOqywBo",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    staticStyle: {
      "position": "relative"
    },
    attrs: {
      "src": "r2.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("【Summoners War | Curry's RTA】The Power Belial, king of power CRI DMG 217%!!")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-pc",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/5tWcVF5yGhk",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    staticStyle: {
      "position": "relative"
    },
    attrs: {
      "src": "r3.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("【Summoners War | Curry's RTA】New Meta! THE BUFFED Racuni, he gots insane power!!!")])], 1)], 1)], 1)], 1), _vm._v(" "), [_c('adsbygoogle', {
    attrs: {
      "ad-slot": "2872403902"
    }
  })], _vm._v(" "), _c('div', {
    staticClass: "headline font-weight-bold my-6",
    staticStyle: {
      "font-family": "Anton!important"
    }
  }, [_vm._v("G3 RTA VIDEOS")]), _vm._v(" "), _c('div', {
    staticClass: "main-banner-area rounded-xl pa-4 mb-4"
  }, [_c(VSlideGroup_VSlideGroup, {
    attrs: {
      "multiple": "",
      "show-arrows": ""
    }
  }, [_c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-pc",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/4yhVk78l3tk",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "src": "g4.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("G3 Break Crazy Power Perna, he destroys everything with his power🤯🤯🤯")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-pc",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/7HENE0I_u9M",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    staticStyle: {
      "position": "relative"
    },
    attrs: {
      "src": "g5.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("EZ G3 Break, King of Power Chow🫡🫡🫡")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-pc",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/jpqBYeIQl0g",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    staticStyle: {
      "position": "relative"
    },
    attrs: {
      "src": "g6.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("EZ G3 CC Break, OP Counter Haegang🤪🤪🤪")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-pc",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/DZ9LP2rT2iQ",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "src": "g1.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("【Summoners War | Curry's RTA】How To Break World Ranker? Hyper Turn2 Team vs Hyper Player!")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-pc",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/CQ3phY2COL8",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    staticStyle: {
      "position": "relative"
    },
    attrs: {
      "src": "g2.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("【Summoners War | Curry's RTA】VAMP & VIO Double Panda Debut!!")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-pc",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/hAsdJRbAUck",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    staticStyle: {
      "position": "relative"
    },
    attrs: {
      "src": "g3.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("【Summoners War | Curry's RTA】ROAD TO G3, SEASON23 FINAL!!")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "headline font-weight-bold my-6",
    staticStyle: {
      "font-family": "Anton!important"
    }
  }, [_vm._v("MOST RECENT VIDEOS")]), _vm._v(" "), _c('div', {
    staticClass: "main-banner-area rounded-xl pa-4 mb-4"
  }, [_c(VSlideGroup_VSlideGroup, {
    attrs: {
      "multiple": "",
      "show-arrows": ""
    }
  }, [_c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-pc",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/rUN2KL0aUpk",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "src": "m4.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("Increase All Harmful effect, Pang × Gurkha Combo of fear Debut😵‍💫😵‍💫😵‍💫")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-pc",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/mbDqiA_aOHw",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    staticStyle: {
      "position": "relative"
    },
    attrs: {
      "src": "m5.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("It's impossible to defeat them, Akroma × Borgnine combo debut🙃🙃🙃")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-pc",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/mT0TIsJau3M",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    staticStyle: {
      "position": "relative"
    },
    attrs: {
      "src": "m6.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("New Turn2 Weapon Res 100% Parjanya Debut🤩🤩🤩")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-pc",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/un4kXiOh9P0",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "src": "m1.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("【Summoners War RTA】The Power Dongbaek, is she better than wind one???")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-pc",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/ZviFHGRWioY",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    staticStyle: {
      "position": "relative"
    },
    attrs: {
      "src": "m2.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("【Summoners War | Curry's RTA】2, 4, 6 ATK and Resis 100%!! Full Power Kaki Debut!!")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-pc",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/T8Weoliwvvo",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    staticStyle: {
      "position": "relative"
    },
    attrs: {
      "src": "m3.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("【Summoners War RTA】The Power Swift Rakan, fast pick and fast move, enemy will be confused by this!")])], 1)], 1)], 1)], 1), _vm._v(" "), [_c('adsbygoogle', {
    attrs: {
      "ad-slot": "9043910648"
    }
  })]], 2)] : [_c(VCol["a" /* default */], {
    staticClass: "rounded-xl",
    attrs: {
      "cols": "11"
    }
  }, [_c('div', {
    staticClass: "headline font-weight-bold my-6",
    staticStyle: {
      "font-family": "Anton!important"
    }
  }, [_c('h1', {
    staticClass: "h1-font-size"
  }, [_vm._v("CurrySW RTA Room")])]), _vm._v(" "), _c('div', {
    staticClass: "headline font-weight-bold my-6",
    staticStyle: {
      "font-family": "Anton!important"
    }
  }, [_vm._v("What is this site?")]), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "main-banner-area rounded-xl pa-4",
    attrs: {
      "justify": "center"
    }
  }, [_c(VCol["a" /* default */], {
    staticStyle: {
      "color": "white"
    },
    attrs: {
      "cols": "12"
    }
  }, [_vm._v("\n          Here are some of the videos I post on youtube that I recommend"), _c('br'), _vm._v("\nI created this site to let you know about me not from youtube but from google search"), _c('br'), _vm._v("\nIn addition to posting videos, I also provide rerune service"), _c('br'), _vm._v("\nIf you are interested, please contact me through discord\n        ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "headline font-weight-bold my-6",
    staticStyle: {
      "font-family": "Anton!important"
    }
  }, [_vm._v("MENU")]), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "main-banner-area rounded-xl pa-4",
    attrs: {
      "justify": "center"
    }
  }, [_c(VCol["a" /* default */], {
    staticStyle: {
      "color": "white"
    },
    attrs: {
      "cols": "12"
    }
  }, [_c(VBtn["a" /* default */], {
    staticClass: "text-center",
    attrs: {
      "text": "",
      "color": "blue",
      "href": "/rtanonrta"
    }
  }, [_c('h3', [_vm._v("RTA & Non-RTA Service Detail")])]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "text-center",
    attrs: {
      "text": "",
      "color": "blue",
      "href": "/membership"
    }
  }, [_c('h3', [_vm._v("MemberShip Detail")])]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "text-center",
    attrs: {
      "text": "",
      "color": "blue",
      "href": "/monsters"
    }
  }, [_c('h3', [_vm._v("Monsters")])]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "text-center",
    attrs: {
      "text": "",
      "color": "blue",
      "href": "/articles"
    }
  }, [_c('h3', [_vm._v("Articles")])])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "headline font-weight-bold my-6",
    staticStyle: {
      "font-family": "Anton!important"
    }
  }, [_vm._v("PROFILE")]), _vm._v(" "), _c(VRow["a" /* default */], {
    staticClass: "main-banner-area rounded-xl headline font-weight-bold pa-4 mb-4",
    attrs: {
      "justify": "center"
    }
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('span', [_vm._v("RTA Season Record")]), _c('br'), _vm._v(" "), _c('span', [_vm._v("Season29 - G3")]), _c('br'), _vm._v(" "), _c('span', [_vm._v("Season30 - G2")]), _c('br'), _vm._v(" "), _c('span', [_vm._v("Season31 - G3")])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('span', [_vm._v("I post videos about RTA basically every day on Youtube")]), _c('br'), _vm._v(" "), _c('span', [_vm._v("I mainly specialize in RTA and my style of play is turn2")])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "href": "https://www.youtube.com/channel/UCl1OAS6CZ0VZXV2cJ-5Vkdw",
      "text": "",
      "color": "blue",
      "target": "_blank"
    }
  }, [_c('span', {
    staticClass: "text-left"
  }, [_vm._v("Youtube【EN】")])]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "href": "/",
      "text": "",
      "color": "blue"
    }
  }, [_c('span', {
    staticClass: "text-left"
  }, [_vm._v("Youtube【JP】")])]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "href": "https://discord.gg/daAeAZnwcH",
      "text": "",
      "color": "blue",
      "target": "_blank"
    }
  }, [_c('span', {
    staticClass: "text-left"
  }, [_vm._v("Discord")])])], 1)], 1), _vm._v(" "), [_c('adsbygoogle', {
    attrs: {
      "ad-slot": "5892748097"
    }
  })], _vm._v(" "), _c('div', {
    staticClass: "headline font-weight-bold my-6",
    staticStyle: {
      "font-family": "Anton!important"
    }
  }, [_vm._v("MOST POPULAR VIDEOS")]), _vm._v(" "), _c('div', {
    staticClass: "main-banner-area rounded-xl pa-4 mb-4"
  }, [_c(VSlideGroup_VSlideGroup, {
    attrs: {
      "multiple": "",
      "show-arrows": ""
    }
  }, [_c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-sp",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/AuvixG8PyKM",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "src": "p4.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("HP+35000 crazy trap Laika, he is the strongest guardian that no one can predict😛😛")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-sp",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/2LRK1jGmkGo",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "src": "p5.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("It's impossible to defeat him, Akroma × Guillaume combo debut😆😆😆")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-sp",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/UIqg24ptDM8",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "src": "p6.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("Finally!! I Summoned New LD5🤩🤩🤩")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-sp",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/lldrHStYFVw",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "src": "p7.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("G3 achieved, World Arena Season28 All Rune Showcase😉😉😉")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-sp",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/3zjcQByViHA",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "src": "p1.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("【Summoners War | Curry's RTA】THE BUFFED Crazy Resis 100% Josephine, she is hyper tanky attacker!!!")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-sp",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/qAUYVDzmHRg",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "src": "p2.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("【Summoners War | Curry's RTA】THE BUFFED Ultimate Haegang, he gots so strong power for turn2!!!")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-sp",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/SD5__9FBOmE",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "src": "p3.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("【Summoners War | Curry's RTA】World Arena Season23 G3!, ALL MONSTER RUNE SHOWCASE!")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-sp",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/3zjcQByViHA",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "src": "p1.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("【Summoners War | Curry's RTA】THE BUFFED Crazy Resis 100% Josephine, she is hyper tanky attacker!!!")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "headline font-weight-bold my-6",
    staticStyle: {
      "font-family": "Anton!important"
    }
  }, [_vm._v("TOP RECOMMEND VIDEOS")]), _vm._v(" "), _c('div', {
    staticClass: "main-banner-area rounded-xl pa-4 mb-4"
  }, [_c(VSlideGroup_VSlideGroup, {
    attrs: {
      "multiple": "",
      "show-arrows": ""
    }
  }, [_c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-sp",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/cidhI0sVXWw",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "src": "r4.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("THE BUFFED Icasha, NEW TURN2 GUARDIAN Debut🤩🤩🤩")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-sp",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/I57IIU2vYls",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    staticStyle: {
      "position": "relative"
    },
    attrs: {
      "src": "r5.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("+43000! All HP Chow is New Crazy Trap😬😬😬 ")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-sp",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/ivdyM1bpfno",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    staticStyle: {
      "position": "relative"
    },
    attrs: {
      "src": "r6.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("ATK+2100, CRDMG 214%, he is world No.1 One Shot Monster in season28")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-sp",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/dxHpqnD9B5k",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "src": "r1.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("【Summoners War | Curry's RTA】Unbreakable! The Power Resis 100% Laika!")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-sp",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/qRZ0sOqywBo",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "src": "r2.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("【Summoners War | Curry's RTA】The Power Belial, king of power CRI DMG 217%!!")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-sp",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/5tWcVF5yGhk",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "src": "r3.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("【Summoners War | Curry's RTA】New Meta! THE BUFFED Racuni, he gots insane power!!!")])], 1)], 1)], 1)], 1), _vm._v(" "), [_c('adsbygoogle', {
    attrs: {
      "ad-slot": "2872403902"
    }
  })], _vm._v(" "), _c('div', {
    staticClass: "headline font-weight-bold my-6",
    staticStyle: {
      "font-family": "Anton!important"
    }
  }, [_vm._v("G3 RTA VIDEOS")]), _vm._v(" "), _c('div', {
    staticClass: "main-banner-area rounded-xl pa-4 mb-4"
  }, [_c(VSlideGroup_VSlideGroup, {
    attrs: {
      "multiple": "",
      "show-arrows": ""
    }
  }, [_c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-sp",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/4yhVk78l3tk",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "src": "g4.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("G3 Break Crazy Power Perna, he destroys everything with his power🤯🤯🤯")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-sp",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/7HENE0I_u9M",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    staticStyle: {
      "position": "relative"
    },
    attrs: {
      "src": "g5.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("EZ G3 Break, King of Power Chow🫡🫡🫡")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-sp",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/jpqBYeIQl0g",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    staticStyle: {
      "position": "relative"
    },
    attrs: {
      "src": "g6.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("EZ G3 CC Break, OP Counter Haegang🤪🤪🤪")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-sp",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/DZ9LP2rT2iQ",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "src": "g1.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("【Summoners War | Curry's RTA】How To Break World Ranker? Hyper Turn2 Team vs Hyper Player!")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-sp",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/CQ3phY2COL8",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "src": "g2.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("【Summoners War | Curry's RTA】VAMP & VIO Double Panda Debut!!")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-sp",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/hAsdJRbAUck",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "src": "g3.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("【Summoners War | Curry's RTA】ROAD TO G3, SEASON23 FINAL!!")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "headline font-weight-bold my-6",
    staticStyle: {
      "font-family": "Anton!important"
    }
  }, [_vm._v("MOST RECENT VIDEOS")]), _vm._v(" "), _c('div', {
    staticClass: "main-banner-area rounded-xl pa-4 mb-4"
  }, [_c(VSlideGroup_VSlideGroup, {
    attrs: {
      "multiple": "",
      "show-arrows": ""
    }
  }, [_c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-sp",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/rUN2KL0aUpk",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "src": "m4.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("Increase All Harmful effect, Pang × Gurkha Combo of fear Debut😵‍💫😵‍💫😵‍💫")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-sp",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/mbDqiA_aOHw",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    staticStyle: {
      "position": "relative"
    },
    attrs: {
      "src": "m5.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("It's impossible to defeat them, Akroma × Borgnine combo debut🙃🙃🙃")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-sp",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/mT0TIsJau3M",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    staticStyle: {
      "position": "relative"
    },
    attrs: {
      "src": "m6.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("New Turn2 Weapon Res 100% Parjanya Debut🤩🤩🤩")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-sp",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/un4kXiOh9P0",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "src": "m1.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("【Summoners War RTA】The Power Dongbaek, is she better than wind one???")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-sp",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/ZviFHGRWioY",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "src": "m2.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("【Summoners War | Curry's RTA】2, 4, 6 ATK and Resis 100%!! Full Power Kaki Debut!!")])], 1)], 1), _vm._v(" "), _c(VSlideItem, [_c(VCard["a" /* default */], {
    staticClass: "carousel-content-sp",
    attrs: {
      "hover": "",
      "ripple": "",
      "href": "https://youtu.be/T8Weoliwvvo",
      "target": "_blank"
    }
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "src": "m3.png"
    }
  }), _vm._v(" "), _c(components_VCard["a" /* VCardSubtitle */], {
    staticClass: "font-weight-bold"
  }, [_vm._v("【Summoners War RTA】The Power Swift Rakan, fast pick and fast move, enemy will be confused by this!")])], 1)], 1)], 1)], 1), _vm._v(" "), [_c('adsbygoogle', {
    attrs: {
      "ad-slot": "9043910648"
    }
  })]], 2)]], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=5190f64a

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js = ({
  layout: "default"
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pagesvue_type_script_lang_js = (lib_vue_loader_options_pagesvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(7);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js,
  lib_vue_loader_options_pagesvue_type_template_id_5190f64a_render,
  staticRenderFns,
  false,
  null,
  null,
  "58e3b09e"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VCardActions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VCardSubtitle; });
/* unused harmony export VCardText */
/* unused harmony export VCardTitle */
/* harmony import */ var _VCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


const VCardActions = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "f"])('v-card__actions');
const VCardSubtitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "f"])('v-card__subtitle');
const VCardText = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "f"])('v-card__text');
const VCardTitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "f"])('v-card__title');

/* unused harmony default export */ var _unused_webpack_default_export = ({
  $_vuetify_subcomponents: {
    VCard: _VCard__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    VCardActions,
    VCardSubtitle,
    VCardText,
    VCardTitle
  }
});

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(99);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("d67becdc", content, true)

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-slide-group{display:flex}.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__next,.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__prev{display:none}.v-slide-group.v-item-group>.v-slide-group__next,.v-slide-group.v-item-group>.v-slide-group__prev{cursor:pointer}.v-slide-item{display:inline-flex;flex:0 1 auto}.v-slide-group__next,.v-slide-group__prev{align-items:center;display:flex;flex:0 1 52px;justify-content:center;min-width:52px}.v-slide-group__content{display:flex;flex:1 0 auto;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-slide-group__wrapper{contain:content;display:flex;flex:1 1 auto;overflow:hidden}.v-slide-group__next--disabled,.v-slide-group__prev--disabled{pointer-events:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map