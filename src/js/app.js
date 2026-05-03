import ProductView from "./productView.js";
import CategoryView from "./categoryView.js";
import Storage from "./storage.js";
import { applyTranslations, getLanguage, setLanguage } from "./i18n.js";

document.addEventListener("DOMContentLoaded", () => {
    const productView = new ProductView();
    const categoryView = new CategoryView();

    categoryView.setupApp();
    productView.setupApp();
    applyTranslations();
    updateLanguageButtons();

    document.querySelector("#langEn").addEventListener("click", () => {
        setLanguage("en");
        applyTranslations();
        categoryView.instantCtgUpdate(Storage.getCategories());
        productView.sortBySelect(productView.sortSelect.value);
        updateLanguageButtons();
    });

    document.querySelector("#langZh").addEventListener("click", () => {
        setLanguage("zh");
        applyTranslations();
        categoryView.instantCtgUpdate(Storage.getCategories());
        productView.sortBySelect(productView.sortSelect.value);
        updateLanguageButtons();
    });
});

function updateLanguageButtons() {
    const language = getLanguage();
    const langEn = document.querySelector("#langEn");
    const langZh = document.querySelector("#langZh");

    if (language === "en") {
        langEn.className = "px-3 py-1 rounded-lg bg-green-600 text-main font-semibold";
        langZh.className = "px-3 py-1 rounded-lg border-2 border-green-600 text-green-600 font-semibold";
    } else {
        langZh.className = "px-3 py-1 rounded-lg bg-green-600 text-main font-semibold";
        langEn.className = "px-3 py-1 rounded-lg border-2 border-green-600 text-green-600 font-semibold";
    }
}
