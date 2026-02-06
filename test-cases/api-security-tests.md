# 🔐 API Security Test Cases – Ahorro Digital

---

## SEC-API-01 — Acceso a recurso protegido sin token

**Tipo:** Seguridad  
**Prioridad:** P0  
**Herramienta:** Postman / Newman  

### Precondición
Ninguna

### Descripción
Validar que el sistema bloquee el acceso a recursos protegidos cuando el usuario no está autenticado.

### Pasos
1. Enviar request GET `/api/products`
2. No enviar header `Authorization`

### Resultado esperado
- Status 401 Unauthorized
- Mensaje indicando que el usuario no está autenticado
- No se retorna información sensible


### Resultado obtenido
- Status 200 OK

---

## SEC-API-02 — Acceso con token inválido

**Tipo:** Seguridad  
**Prioridad:** P0  
**Herramienta:** Postman / Newman  

### Precondición
Ninguna

### Descripción
Validar que el sistema rechace tokens inválidos, alterados o expirados

### Pasos
1. Enviar request GET `/api/products`
2. Enviar header `Authorization: Bearer token_invalido`

### Resultado esperado
- Status 401 Unauthorized
- Mensaje de token inválido
- Acceso denegado al recurso

### Resultado Obtenido
- Status 200 OK
