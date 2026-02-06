# 🎭 UI Test Cases – Ahorro Digital (Playwright)

---

## AT-01 — Registro exitoso con datos válidos

**Tipo:** Funcional
**Prioridad:** P0  
**Herramienta:** Playwright  
**Precondition:** Usuario no registrado. Página de registro disponible.

### Pasos
1. Acceder a la página de registro.
2. Ingresar email válido no registrado.
3. Ingresar contraseña válida.
4. Aceptar términos y condiciones.
5. Completar recaptcha válido.
6. Hacer clic en “Registrar”.

### Resultado esperado
- Usuario registrado correctamente
- Redirección exitosa


## AT-02 — Registro fallido con campos obligatorios vacíos

**Tipo:** Negativo 
**Prioridad:** P0  
**Herramienta:** Playwright  
**Precondition:** Usuario no registrado. Página de registro visible.


### Pasos
1.	Acceder a la página de registro.
2.	No diligenciar campos obligatorios.
3.	Hacer clic en “Registrar”

### Resultado esperado
- El sistema no permite continuar.
- Se muestran mensajes de error por cada campo obligatorio.
- El botón de registro permanece deshabilitado o bloqueado.


## AT-03 — Login fallido con contraseña incorrecta

**Tipo:** Negativo  
**Prioridad:** P0  
**Herramienta:** Playwright  
**Precondition:** Usuario previamente registrado.

### Pasos
1. Acceder a la página de login.
2. Ingresar email válido.
3. Ingresar contraseña incorrecta.
4. Hacer clic en “Ingresar”.

### Resultado esperado
- El sistema rechaza el acceso.
- Se muestra mensaje de error “usuario o password inválido”.
- El usuario no accede al sistema.

## AT-04 — Simulación de ahorro con monto válido

**Tipo:** Funcional  
**Prioridad:** P0  
**Herramienta:** Playwright 
**Precondition:** Usuario autenticado. Simulador disponible.

### Pasos
1. Acceder al módulo de simulador.
2. Ingresar un monto válido permitido.
3. Hacer clic en “Simular”


### Resultado esperado
- El sistema realiza el cálculo correctamente.
- Se muestran los resultados del rendimiento.
- No se presentan errores visuales ni funcionales.

## AT-05 — Simulación fallida con monto igual a 0

**Tipo:** Negativo 
**Prioridad:** P1  
**Herramienta:** Playwright 
**Precondition:** Usuario autenticado. Simulador disponible.

### Pasos
1. Acceder al módulo de simulador.
2. Ingresar monto = 0.
3. Hacer clic en “Simular”.

### Resultado esperado
- El sistema no ejecuta la simulación.
- Se muestra mensaje de error informativo indicando monto inválido.



