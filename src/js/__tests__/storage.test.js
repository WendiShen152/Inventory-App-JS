import Storage from "../storage.js";

describe("Storage", () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test("returns empty product list when products are not stored", () => {
        expect(Storage.getProducts).toEqual([]);
    });

    test("saves and returns products", () => {
        const products = [
            {
                id: 1,
                title: "Book",
                quantity: "3",
                location: "BDG",
                category: "Office",
                createdAt: "2026-05-03T10:00:00.000Z",
            },
        ];

        Storage.saveProducts(products);

        expect(Storage.getProducts).toEqual(products);
    });

    test("returns empty category list when categories are not stored", () => {
        expect(Storage.getCategories()).toEqual([]);
    });

    test("saves and returns categories", () => {
        const categories = [
            {
                id: 1,
                title: "Books",
                description: "Book category",
            },
        ];

        Storage.saveCategories(categories);

        expect(Storage.getCategories()).toEqual(categories);
    });

    test("removes a product by id", () => {
        const products = [
            { id: 1, title: "Book" },
            { id: 2, title: "Pen" },
        ];

        Storage.saveProducts(products);
        Storage.removeProduct(1);

        expect(Storage.getProducts).toEqual([{ id: 2, title: "Pen" }]);
    });
});
