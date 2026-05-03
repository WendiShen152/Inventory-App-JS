"use strict";

var _productView = _interopRequireDefault(require("./productView.js"));
var _categoryView = _interopRequireDefault(require("./categoryView.js"));
var _storage = _interopRequireDefault(require("./storage.js"));
var _i18n = require("./i18n.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
document.addEventListener("DOMContentLoaded", function () {
  var productView = new _productView["default"]();
  var categoryView = new _categoryView["default"]();
  categoryView.setupApp();
  productView.setupApp();
  (0, _i18n.applyTranslations)();
  updateLanguageButtons();
  document.querySelector("#langEn").addEventListener("click", function () {
    (0, _i18n.setLanguage)("en");
    (0, _i18n.applyTranslations)();
    categoryView.instantCtgUpdate(_storage["default"].getCategories());
    productView.sortBySelect(productView.sortSelect.value);
    updateLanguageButtons();
  });
  document.querySelector("#langZh").addEventListener("click", function () {
    (0, _i18n.setLanguage)("zh");
    (0, _i18n.applyTranslations)();
    categoryView.instantCtgUpdate(_storage["default"].getCategories());
    productView.sortBySelect(productView.sortSelect.value);
    updateLanguageButtons();
  });
});
function updateLanguageButtons() {
  var language = (0, _i18n.getLanguage)();
  var langEn = document.querySelector("#langEn");
  var langZh = document.querySelector("#langZh");
  if (language === "en") {
    langEn.className = "px-3 py-1 rounded-lg bg-green-600 text-main font-semibold";
    langZh.className = "px-3 py-1 rounded-lg border-2 border-green-600 text-green-600 font-semibold";
  } else {
    langZh.className = "px-3 py-1 rounded-lg bg-green-600 text-main font-semibold";
    langEn.className = "px-3 py-1 rounded-lg border-2 border-green-600 text-green-600 font-semibold";
  }
}
