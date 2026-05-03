"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyTranslations = applyTranslations;
exports.getLanguage = getLanguage;
exports.setLanguage = setLanguage;
exports.t = t;
exports.translations = void 0;
var translations = exports.translations = {
  en: {
    appTitle: "Inventory App With JS & TailwindCSS",
    languageSelector: "Language selector",
    addNewCategory: "Add New Category",
    title: "Title",
    description: "Description",
    cancel: "Cancel",
    addCategory: "Add Category",
    addNewProduct: "Add New Product",
    quantity: "Quantity",
    location: "Location",
    category: "Category",
    selectLocation: "- select location -",
    selectCategory: "- select category -",
    addProduct: "Add Product",
    productsList: "Products List",
    searchProducts: "Search products",
    searchPlaceholder: "Search...",
    sortProducts: "Sort products",
    newest: "Newest",
    oldest: "Oldest",
    deleteProduct: "Delete product",
    decreaseQuantity: "Decrease quantity",
    increaseQuantity: "Increase quantity",
    productTitleError: "Your product title must be at least 2 non-space characters.",
    locationError: "Please select a valid storage location.",
    categoryError: "Please select a category.",
    quantityError: "Quantity must be zero or a positive whole number.",
    duplicateCategory: "This category name has been added before, so we will update the category description.",
    categoryTitleError: "Your entered title for category must be at least 2 characters."
  },
  zh: {
    appTitle: "库存管理应用 JS 与 TailwindCSS",
    languageSelector: "语言选择器",
    addNewCategory: "添加新分类",
    title: "标题",
    description: "描述",
    cancel: "取消",
    addCategory: "添加分类",
    addNewProduct: "添加新产品",
    quantity: "数量",
    location: "位置",
    category: "分类",
    selectLocation: "- 请选择位置 -",
    selectCategory: "- 请选择分类 -",
    addProduct: "添加产品",
    productsList: "产品列表",
    searchProducts: "搜索产品",
    searchPlaceholder: "搜索...",
    sortProducts: "排序产品",
    newest: "最新",
    oldest: "最旧",
    deleteProduct: "删除产品",
    decreaseQuantity: "减少数量",
    increaseQuantity: "增加数量",
    productTitleError: "产品标题至少需要 2 个非空字符。",
    locationError: "请选择有效的存储位置。",
    categoryError: "请选择分类。",
    quantityError: "数量必须是 0 或正整数。",
    duplicateCategory: "该分类名称已经存在，因此将更新分类描述。",
    categoryTitleError: "分类标题至少需要 2 个字符。"
  }
};
function getLanguage() {
  return localStorage.getItem("language") || "en";
}
function setLanguage(language) {
  localStorage.setItem("language", language);
}
function t(key) {
  var language = getLanguage();
  return translations[language][key] || translations.en[key] || key;
}
function applyTranslations() {
  var language = getLanguage();
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach(function (element) {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (element) {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach(function (element) {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });
}
