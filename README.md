# 💰 Ahorro Digital – QA Automation Challenge

Proyecto de aseguramiento de calidad para una aplicación web ficticia orientada a productos de ahorro digital.

---

## 🎯 Objetivo
Garantizar que la aplicación cumpla criterios de calidad funcional y de seguridad antes de salir a producción, detectando defectos críticos de manera temprana.

---

## 🧪 Estrategia de Pruebas

### 🎭 UI Automation – Playwright
- Flujos de registro y autenticación
- Validaciones funcionales y negativas
- Evidencia: screenshots y reportes HTML

### 🚀 API Testing – Postman + Newman
- Pruebas de seguridad (autorización)
- Ejecución automatizada desde línea de comandos
- Evidencia: reporte HTML de Newman

---

## 🔐 Pruebas de Seguridad Ejecutadas
- Acceso sin token (401 esperado)
- Acceso con token inválido (401 esperado)

📌 Ambas pruebas fallaron, evidenciando vulnerabilidades críticas.

---

## 🐞 Defectos Detectados
- Acceso a recursos protegidos sin autenticación
- Falta de validación de tokens inválidos

---

## 📊 Evidencias
- `postman-report.html`
- Reportes de Playwright
- Casos de prueba y bugs documentados en Markdown

---

## 🧠 Observación
Este reto permitió identificar los riesgos que se pueden encontrar en la aplicación "ahorro digital", teniendo en cuenta un plan de pruebas estructurado, escenarios posibles a ejecutar con base en el objetivo y alcance del proyecto.

---

## 🛠️ Herramientas Utilizadas
- 🎭 Playwright
- 🚀 Postman
- 🤖 Newman
- GitHub
