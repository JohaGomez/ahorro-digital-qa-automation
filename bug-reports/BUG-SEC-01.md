# 🐞 BUG-SEC-01 — Acceso sin autenticación permitido

**Severidad:** Alta  
**Prioridad:** P0  
**Componente:** Seguridad / Autorización  

### Descripción
El sistema permite acceder a un recurso protegido sin autenticación.

### Pasos para reproducir
1. Ingresar al request SEC-API-01 Acceso sin token
2. Enviar GET `/api/products`
3. No enviar token de autenticación

### Resultado actual
- Status 200 OK

### Resultado esperado
- Status 401 Unauthorized
- Acceso denegado

### Evidencia
- Reporte HTML de Newman
- Captura de Postman
