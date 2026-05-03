import {
    applyTranslations,
    getLanguage,
    setLanguage,
    t,
    translations,
} from "../i18n.js";

describe("i18n", () => {
    beforeEach(() => {
        localStorage.clear();
        document.documentElement.lang = "en";
        document.body.innerHTML = "";
    });

    test("defaults to English when no language is stored", () => {
        expect(getLanguage()).toBe("en");
    });

    test("stores and returns selected language", () => {
        setLanguage("zh");

        expect(getLanguage()).toBe("zh");
        expect(localStorage.getItem("language")).toBe("zh");
    });

    test("returns translated text for current language", () => {
        setLanguage("zh");

        expect(t("addProduct")).toBe(translations.zh.addProduct);
    });

    test("falls back to English or key when translation is missing", () => {
        setLanguage("zh");

        expect(t("appTitle")).toBe(translations.zh.appTitle);
        expect(t("missingKey")).toBe("missingKey");
    });

    test("applies text, placeholder, aria-label, and html lang translations", () => {
        document.body.innerHTML = `
            <h1 data-i18n="appTitle">Old title</h1>
            <input data-i18n-placeholder="searchPlaceholder" placeholder="Old placeholder">
            <button data-i18n-aria-label="deleteProduct" aria-label="Old label"></button>
        `;

        setLanguage("zh");
        applyTranslations();

        expect(document.documentElement.lang).toBe("zh-CN");
        expect(document.querySelector("[data-i18n]").textContent).toBe(
            translations.zh.appTitle
        );
        expect(
            document.querySelector("[data-i18n-placeholder]").placeholder
        ).toBe(translations.zh.searchPlaceholder);
        expect(
            document.querySelector("[data-i18n-aria-label]").getAttribute("aria-label")
        ).toBe(translations.zh.deleteProduct);
    });

    test("sets html lang to English for English language", () => {
        setLanguage("en");
        applyTranslations();

        expect(document.documentElement.lang).toBe("en");
    });
});
