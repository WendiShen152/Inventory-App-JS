import Storage from "./storage.js";
import { t } from "./i18n.js";

export default class CategoryView {
    constructor() {
        this.ctgTitleInput = document.querySelector("#categoryTitle");
        this.ctgDescInput = document.querySelector("#categoryDescription");
        this.ctgCacelBtn = document.querySelector("#categoryCanelBtn");
        this.ctgAddBtn = document.querySelector("#categoryAddNewBtn");
        this.ctgSelect = document.querySelector("#categoriesSelect");

        this.ctgAddBtn.addEventListener("click", () => {
            this.addNewCategory();
        });

        this.ctgCacelBtn.addEventListener("click", () => {
            this.ctgTitleInput.value = "";
            this.ctgDescInput.value = "";
        });
    }

    setupApp() {
        this.instantCtgUpdate(Storage.getCategories());
    }

    addNewCategory() {
        if (this.ctgTitleInput.value.trim().length >= 2) {
            const newCategroy = {
                id: new Date().getTime(),
                title: this.ctgTitleInput.value.trim(),
                description: this.ctgDescInput.value.trim(),
            };

            this.ctgTitleInput.value = "";
            this.ctgDescInput.value = "";

            const savedCategories = Storage.getCategories();
            const norm = (text) => String(text).trim().toLowerCase();
            const existedItem = savedCategories.find(
                (category) => norm(category.title) === norm(newCategroy.title)
            );

            if (existedItem) {
                existedItem.title = newCategroy.title;
                existedItem.description = newCategroy.description;
                alert(t("duplicateCategory"));
                Storage.saveCategories(savedCategories);
                this.instantCtgUpdate(savedCategories);
                return;
            }

            newCategroy.id = new Date().getTime();
            newCategroy.createdAt = new Date().toISOString();
            savedCategories.push(newCategroy);

            Storage.saveCategories(savedCategories);
            this.instantCtgUpdate(savedCategories);
        } else {
            alert(t("categoryTitleError"));
        }
    }

    instantCtgUpdate(categories) {
        const ctgListTitles = categories.map((obj) => obj.title.trim());

        this.ctgSelect.innerHTML = `<option selected value="none">${t("selectCategory")}</option>`;

        ctgListTitles.forEach((option) => {
            const newOption = document.createElement("option");
            newOption.value = option;
            newOption.textContent = option;
            this.ctgSelect.append(newOption);
        });
    }
}
