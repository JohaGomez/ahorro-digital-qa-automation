import { Page } from '@playwright/test';

export class RegisterPage {
  constructor(private page: Page) {}

  // Mock para escenario exitoso
  async openSuccessMock() {
    await this.page.setContent(`
      <html>
        <body>
          <input id="email" />
          <input id="password" />
          <input type="checkbox" id="terms" />
          <button id="registerBtn">Registrar</button>
          <div class="success-message">Registro exitoso</div>
        </body>
      </html>
    `);
  }

  // Mock para escenario con campos vacíos ❗
  async openEmptyFormMock() {
    await this.page.setContent(`
      <html>
        <body>
          <button id="registerBtn">Registrar</button>
          <div class="error-message">Campos obligatorios</div>
        </body>
      </html>
    `);
  }

  // 👉 ESTE MÉTODO ES EL QUE FALTABA
  async submitEmptyForm() {
    await this.page.click('#registerBtn');
  }

  async register(email: string, password: string) {
    await this.page.fill('#email', email);
    await this.page.fill('#password', password);
    await this.page.check('#terms');
    await this.page.click('#registerBtn');
  }

  errorMessage() {
    return this.page.locator('.error-message');
  }

  successMessage() {
    return this.page.locator('.success-message');
  }
}
