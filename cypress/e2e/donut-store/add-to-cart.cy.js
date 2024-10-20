describe("Thêm sản phẩm vào giỏ hàng", () => {
    it("Thêm vào giỏ hàng khi chưa đăng nhập", () => {
        cy.visit("https://vinbuddy.github.io/donut-store/detail.html#d-6");

        cy.get(".user").should("not.exist"); // Kiểm tra xem user chưa đăng nhập

        cy.get(".detail__add").click();

        cy.url().should("include", "/login.html");
    });
});
