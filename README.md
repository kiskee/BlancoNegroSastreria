# Blanco y Negro Sastrería 🎩

Sitio web profesional para sastrería especializada en trajes y prendas a medida. Construido con Next.js 16 y un pipeline de CI/CD completo.

## 🚀 Características

- **Next.js 16** con App Router
- **TypeScript** para type safety
- **Tailwind CSS** para estilos
- **Responsive Design** optimizado para todos los dispositivos
- **CI/CD Pipeline** completo con GitHub Actions
- **Unit Testing** con Jest y React Testing Library
- **Git Hooks** con Husky para calidad de código
- **Deploy automático** a Vercel

## 🛠️ Tecnologías

- **Frontend:** Next.js 16, React 19, TypeScript
- **Estilos:** Tailwind CSS 4
- **Testing:** Jest, React Testing Library
- **Linting:** ESLint, Prettier
- **CI/CD:** GitHub Actions
- **Deploy:** Vercel
- **Git Hooks:** Husky, lint-staged

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/blancoynegrosastreria.git
cd blancoynegrosastreria

# Instalar dependencias
npm install

# Configurar Git Hooks
npm run prepare

# Ejecutar en desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🧪 Scripts Disponibles

### Desarrollo
```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
```

### Testing
```bash
npm test             # Ejecutar tests
npm run test:watch   # Tests en modo watch
npm run test:coverage # Tests con cobertura
```

### Calidad de Código
```bash
npm run lint         # Verificar código con ESLint
npm run lint:fix     # Corregir errores automáticamente
npm run type-check   # Verificar tipos de TypeScript
```

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow

Nuestro pipeline automatizado incluye:

#### 1. **Validación de Código** (en cada push/PR)
- ✅ Instalación de dependencias
- ✅ Verificación con ESLint
- ✅ Type checking con TypeScript
- ✅ Build del proyecto
- ✅ Ejecución de tests unitarios

#### 2. **Deploy Automático** (solo en main)
- ✅ Deploy a Vercel solo si pasan todas las validaciones
- ✅ URL de producción: [https://blancoynegrosastreria.com](https://blancoynegrosastreria.com)

### Configuración de Secrets

Para el deploy automático, configura estos secrets en GitHub:

```bash
VERCEL_TOKEN=tu-token-de-vercel
VERCEL_ORG_ID=team_oI9mnMnKAX3OZtTFKy4LI4EZ
VERCEL_PROJECT_ID=prj_1RRRfcbAeP4b4BLVC5VlVW4AuB48
```

## 🪝 Git Hooks

### Pre-commit
Antes de cada commit se ejecuta:
- **ESLint** en archivos modificados
- **Type checking** de TypeScript
- **Formateo** con Prettier

### Pre-push
Antes de cada push se ejecuta:
- **Type checking** completo
- **Tests unitarios** completos

### Comandos para configurar hooks
```bash
# Instalar Husky
npm install --save-dev husky lint-staged prettier

# Inicializar Husky
npm run prepare

# Los hooks se configuran automáticamente
```

## 🧪 Testing

### Estructura de Tests
```
__tests__/
├── Header.test.tsx      # Tests del componente Header
├── layout.test.tsx      # Tests del RootLayout
├── page.test.tsx        # Tests de la página principal
└── pages.test.tsx       # Tests de páginas secundarias
```

### Cobertura de Tests
- **Componentes:** Header, RootLayout
- **Páginas:** Home, Servicios, Contacto
- **Navegación:** Links y rutas
- **Renderizado:** Contenido y elementos

### Ejecutar Tests
```bash
# Tests básicos
npm test

# Tests con cobertura
npm run test:coverage

# Tests en modo watch
npm run test:watch
```

## 📁 Estructura del Proyecto

```
blancoynegrosastreria/
├── app/                    # App Router de Next.js
│   ├── contacto/
│   │   └── page.tsx       # Página de contacto
│   ├── servicios/
│   │   └── page.tsx       # Página de servicios
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página de inicio
├── components/
│   └── Header.tsx         # Componente Header
├── __tests__/             # Tests unitarios
├── .github/
│   └── workflows/
│       └── ci-cd.yml      # Pipeline de CI/CD
├── .husky/                # Git hooks
│   ├── pre-commit        # Hook pre-commit
│   └── pre-push          # Hook pre-push
├── jest.config.js         # Configuración de Jest
├── jest.setup.js          # Setup de Jest
├── next.config.js         # Configuración de Next.js
├── tailwind.config.ts     # Configuración de Tailwind
├── tsconfig.json          # Configuración de TypeScript
└── vercel.json            # Configuración de Vercel
```

## 🎨 Diseño

### Paleta de Colores
- **Principal:** Negro y Blanco
- **Acentos:** Grises elegantes
- **Efectos:** Gradientes y sombras

### Características de Diseño
- **Responsive:** Adaptado a todos los dispositivos
- **Elegante:** Diseño minimalista y profesional
- **Animaciones:** Efectos sutiles y transiciones suaves
- **Tipografía:** Fuentes Geist optimizadas

## 🚀 Deploy

### Deploy Automático
El deploy se realiza automáticamente cuando:
1. Se hace push a la rama `main`
2. Pasan todas las validaciones del CI
3. GitHub Actions ejecuta el deploy a Vercel

### Deploy Manual
```bash
# Instalar Vercel CLI
npm install -g vercel

# Login en Vercel
vercel login

# Deploy
vercel --prod
```

## 🔧 Configuración de Desarrollo

### Variables de Entorno
Crea un archivo `.env.local` para variables locales:
```bash
# Ejemplo
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Configuración de IDE
Recomendamos usar VS Code con estas extensiones:
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- TypeScript Importer
- Prettier - Code formatter
- ESLint

## 📈 Flujo de Trabajo

### Para Desarrolladores
1. **Crear rama:** `git checkout -b feature/nueva-funcionalidad`
2. **Desarrollar:** Hacer cambios y commits
3. **Pre-commit:** Se ejecutan validaciones automáticas
4. **Push:** `git push origin feature/nueva-funcionalidad`
5. **Pre-push:** Se ejecutan tests completos
6. **PR:** Crear Pull Request a `main`
7. **CI:** GitHub Actions valida el código
8. **Merge:** Si todo pasa, merge a `main`
9. **Deploy:** Deploy automático a producción

### Comandos Útiles
```bash
# Verificar todo antes de commit
npm run lint && npm run type-check && npm test

# Arreglar problemas de formato
npm run lint:fix

# Ver cobertura de tests
npm run test:coverage

# Build local para verificar
npm run build
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu rama de feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 📞 Contacto

**Blanco y Negro Sastrería**
- Website: [https://blancoynegrosastreria.com](https://blancoynegrosastreria.com)
- Email: contacto@blancoynegrosastreria.com

---

⚡ **Desarrollado con Next.js y mucho ☕**