import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login de usuario – Autenticación', () => {

  // AT-03 | Login fallido con contraseña incorrecta
  test('AT-03 Login fallido con contraseña incorrecta', async ({ page }) => {
    const login = new LoginPage(page);

    await login.openErrorMock();
    await login.login('qa@mail.com', 'wrongpass');

    await expect(login.errorMessage())
      .toContainText('Credenciales inválidas');
  });


});
