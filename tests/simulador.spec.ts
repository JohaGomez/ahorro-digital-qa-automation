import { test, expect } from '@playwright/test';
import { SimulatorPage } from '../pages/SimulatorPage';

test.describe('Simulador de ahorro – Core del negocio', () => {

  // AT-04 | Simulación con monto válido
  test('AT-04 Simulación con monto válido', async ({ page }) => {
    const simulator = new SimulatorPage(page);

    await simulator.openSuccessMock();
    await simulator.simulate('1000000');

    await expect(simulator.result()).toBeVisible();
  });


  // AT-05 | Simulación con monto 0 no permitida
  test('AT-05 Simulación con monto 0 no permitida', async ({ page }) => {
    const simulator = new SimulatorPage(page);

    await simulator.openErrorMock();
    await simulator.simulate('0');

    await expect(simulator.errorMessage())
      .toContainText('Monto inválido');
  });


});
