exports.ekcoLoginPage = class ekcoLoginPage {
    constructor(page) {
        this.page = page;
        this.email_textbox = page.getByPlaceholder('Your email');
        this.password_textbox = page.getByPlaceholder('Your password');
        this.login_button = page.getByRole('button', { name: 'Log In' });
    };

    async gotoekcoLoginPage() {
        await this.page.goto('https://portal.ek.co/');
    };

    async login(email, password) {
        await this.email_textbox.fill('Your email');
        await this.password_textbox.fill('Your password');
        await this.login_button.click();
    }
};