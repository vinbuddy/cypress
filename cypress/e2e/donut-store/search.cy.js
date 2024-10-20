describe("Tìm kiếm sản phẩm", () => {
    it("Đóng kết quả tìm kiếm khi click ra ngoài", () => {
        cy.visit("https://vinbuddy.github.io/donut-store/index.html");

        cy.get(".search__input").type("Chocolate");

        cy.get("#result.show").should("exist");

        // Kiểm tra click ra ngoài có đóng kết quả tìm kiếm không
        cy.get("body").click({ force: true }); // force: true để click vào phần tử bị che khuất

        cy.get("#result.hide").should("exist");
    });
});
