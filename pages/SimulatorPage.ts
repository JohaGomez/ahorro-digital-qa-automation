import { Page } from '@playwright/test';

export class SimulatorPage {
  constructor(private page: Page) {}

  // Mock para simulación exitosa
  async openSuccessMock() {
    await this.page.setContent(`
      <html>
        <body>
          <input id="amount" />
          <button id="simulateBtn">Simular</button>
          <div class="result">Resultado de simulación</div>
        </body>
      </html>
    `);
  }

  // Mock para simulación fallida (monto inválido)
  async openErrorMock() {
    await this.page.setContent(`
      <html>
        <body>
          <input id="amount" />
          <button id="simulateBtn">Simular</button>
          <div class="error-message">Monto inválido</div>
        </body>
      </html>
    `);
  }

  // 👉 ESTE MÉTODO ES EL QUE FALTABA
  async simulate(amount: string) {
    await this.page.fill('#amount', amount);
    await this.page.click('#simulateBtn');
  }

  result() {
    return this.page.locator('.result');
  }

  errorMessage() {
    return this.page.locator('.error-message');
  }
}
