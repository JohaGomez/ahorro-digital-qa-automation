import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async openErrorMock() {
  await this.page.setContent(`
    <html>
      <body>
        <input id="email" />
        <input id="password" />
        <button id="loginBtn">Login</button>
        <div class="error-message">Credenciales inválidas</div>
      </body>
    </html>
  `);
}

  async login(email: string, password: string) {
    await this.page.fill('#email', email);
    await this.page.fill('#password', password);
    await this.page.click('#loginBtn');
  }

  errorMessage() {
    return this.page.locator('.error-message');
  }
}
