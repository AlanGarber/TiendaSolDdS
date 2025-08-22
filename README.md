Estructura de Ramas
main
├── develop
    ├── feature/implementar-modelo-objetos
    ├── feature/health-check-endpoint
    ├── feature/sistema-notificaciones
    └── hotfix/fix-critico (si es necesario)

Ramas Principales
  main: Contiene código estable y listo para producción
  develop: Rama de integración donde se unen todas las características desarrolladas

Ramas de Soporte
  feature/*: Para desarrollo de nuevas funcionalidades
  hotfix/*: Para correcciones críticas en producción
  release/*: Para preparar versiones de lanzamiento

Convenciones de Nomenclatura
  Nombres de Ramas
    bashfeature/nombre-descriptivo-funcionalidad
    hotfix/descripcion-del-problema
    release/version-numero

Commits
  <tipo>[alcance opcional]: <descripción>

  Tipos:
  - feat: nueva funcionalidad
  - fix: corrección de errores
  - docs: documentación
  - style: formato, espacios (sin cambios de código)
  - refactor: refactorización de código
  - test: agregar o modificar tests
  - chore: tareas de mantenimiento
