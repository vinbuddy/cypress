describe("Xác thực", () => {
    it("Đăng nhập sai thông tin", () => {
        // Mở trang đăng nhập
        cy.visit("https://vinbuddy.github.io/donut-store/login.html");

        // Tìm trường nhập name và nhập email hợp lệ
        cy.get('input[name="name"]').type("Quang Teo");

        // Tìm trường nhập mật khẩu và nhập mật khẩu hợp lệ
        cy.get('input[name="password"]').type("0933693264");

        // Nhấn vào nút đăng nhập
        cy.get("#submit-btn").click();

        // Kiểm tra xem thông báo lỗi có hiển thị không
        cy.get(".form__exist.invalid").should("exist");
    });
});
