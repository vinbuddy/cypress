describe("Quản lý giỏ hàng", () => {
    const url = "https://vinbuddy.github.io/donut-store/cart.html";

    it("Active nút thanh toán nếu check vào sản phẩm", () => {
        cy.visit(url);

        if (cy.get(".cart__empty").should("exist")) {
            cy.visit("https://vinbuddy.github.io/donut-store/detail.html#d-6");
            cy.get(".detail__add").click();
            cy.wait(1000);

            cy.visit("https://vinbuddy.github.io/donut-store/detail.html#d-7");
            cy.get(".detail__add").click();
            cy.wait(1000);
        }

        cy.visit(url);

        // Đợi cho các phần tử trong giỏ hàng được cập nhật
        cy.get(".cart__item")
            .should("exist")
            .then(() => {
                cy.get(".cart__item").each((item) => {
                    cy.get(item).find(".cart__checkbox").click(); // Click vào checkbox của từng sản phẩm
                });
            });

        cy.get(".checkout__btn").should("be.enabled");

        cy.wait(5000);

        // Uncheck tất cả sản phẩm
        cy.get(".cart__item").each((item) => {
            cy.get(item).find(".cart__checkbox").click(); // Click vào checkbox của từng sản phẩm
        });

        cy.get(".checkout__btn").should("be.disabled");
    });
});
