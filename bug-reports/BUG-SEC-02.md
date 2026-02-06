# 🐞 BUG-SEC-02 — Token inválido no es validado

**Severidad:** Alta  
**Prioridad:** P0  
**Componente:** Seguridad / Autorización  

### Descripción
El sistema no valida correctamente tokens inválidos, permitiendo el acceso.

### Pasos para reproducir
1. Ingresar al request SEC-API-02 Acceso con token inválido
2. Enviar GET `/api/products`
3. Enviar header `Authorization: Bearer token_invalido`

### Resultado actual
- Status 200 OK

### Resultado esperado
- Status 401 Unauthorized
- Mensaje de error de token inválido

### Evidencia
- Reporte HTML de Newman
- Logs de ejecución
