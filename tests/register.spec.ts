import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';

test.describe('Registro de usuario – Onboarding', () => {

  // AT-01 | Registro exitoso con datos válidos
  test('AT-01 Registro exitoso con datos válidos', async ({ page }) => {
    const register = new RegisterPage(page);

    await register.openSuccessMock();
    await register.register('qa@mail.com', 'Password123');

    await expect(register.successMessage()).toBeVisible();
  });


  // AT-02 | Registro fallido con campos vacíos
  test('AT-02 Registro fallido con campos vacíos', async ({ page }) => {
    const register = new RegisterPage(page);

    await register.openEmptyFormMock();
    await register.submitEmptyForm();

    await expect(register.errorMessage()).toBeVisible();
  });


});
