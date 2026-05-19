# Ghostly Scents GT — DecantParfum

> **Nombre del proyecto:** DecantParfum  
> **Marca:** Ghostly Scents GT  
> **URL:** Próximamente  
> **Stack:** Angular 18 + Fuse Admin Template + Tailwind CSS 3  
> **Propósito:** E-commerce de decants (muestras) y perfumes en Guatemala

---

## 1. ¿Qué es este proyecto?

Tienda web para **Ghostly Scents GT**, un negocio guatemalteco que vende **decants** (muestras de 5ml y 10ml) de perfumes originales de diseñador, nicho y árabes. Permite a los usuarios explorar fragancias, agregarlas a un carrito y enviar el pedido directamente por WhatsApp.

---

## 2. Stack técnico

| Capa         | Tecnología                                      |
| ------------ | ----------------------------------------------- |
| Framework    | Angular 18.0.1 (standalone components, Signals) |
| UI           | Angular Material 18, Tailwind CSS 3.4.3         |
| Plantilla    | Fuse Angular Admin Template v20                 |
| i18n         | Transloco (inglés/turco — configurado)          |
| Gráficos     | ApexCharts + ng-apexcharts                      |
| Editor texto | Quill 2 + ngx-quill                             |
| Backend      | Cloudflare Worker (API REST)                    |
| Imágenes     | CDN propio (`https://images.ghostlyscentsgt.com/`) |
| Pipe         | Node 18+, npm                                   |

---

## 3. Estructura del proyecto

```text
src/
├── @fuse/                          # Librería Fuse template (animaciones,
│                                   # componentes, directivas, servicios)
├── app/
│   ├── components/                 # Componentes reutilizables
│   │   ├── dinamic-form/           # Generador de formularios dinámicos
│   │   ├── dinamic-table/          # Tabla genérica con paginación y filtros
│   │   ├── dinamic-filter/         # Filtros dinámicos
│   │   ├── dialog-layout/          # Layout base para diálogos
│   │   ├── empty-data/             # Estado vacío
│   │   ├── items-grid/             # Grid de tarjetas de productos
│   │   ├── page-layout/            # Layout de página admin
│   │   └── toast-alert/            # Sistema de notificaciones toast
│   ├── core/                       # Servicios y lógica central
│   │   ├── api/                    # ApiService (HTTP genérico), interceptors
│   │   ├── auth/                   # AuthService (login/logout/token)
│   │   ├── forms/                  # Definiciones de formularios (CheckoutForm,
│   │   │                           # ParfumForm)
│   │   ├── guards/                 # Route guards (auth, reset-password)
│   │   ├── helpers/                # Utilidades (fechas, paginador español,
│   │   │                           # queries, etc.)
│   │   ├── icons/                  # Sistema de iconos
│   │   ├── models/                 # Modelos de dominio (Item, Cart, etc.)
│   │   ├── models-api/             # Interfaces de respuesta de API
│   │   ├── navigation/             # Servicio de navegación
│   │   ├── objects/                # Catálogo estático de fragancias + carrito
│   │   ├── services/               # Servicios de negocio (catalog, shopping-cart,
│   │   │                           # session, storage, config)
│   │   ├── transloco/              # Cargador de traducciones HTTP
│   │   └── user/                   # Servicio de usuario
│   ├── directives/                 # Directivas (permission, no-whitespaces)
│   ├── layout/                     # Layout principal + layouts horizontal/vertical
│   ├── mock-api/                   # Mock API de Fuse
│   └── modules/                    # Módulos de funcionalidad
│       ├── admin/fragance-list/    # CRUD de perfumes (admin)
│       ├── auth/                   # Sign-in, sign-up, forgot/reset password
│       ├── checkout/               # Carrito + formulario → WhatsApp
│       ├── customers/              # CRUD de clientes (admin)
│       ├── faqs/                   # Página de preguntas frecuentes
│       ├── fragance-list/          # Catálogo público de fragancias
│       ├── gyms/                   # CRUD de gimnasios (admin)
│       ├── landing/home/           # Landing page
│       └── roles/                  # CRUD de roles y permisos (admin)
├── environments/                   # environment.ts / environment.prod.ts
├── index.html
└── main.ts
```

---

## 4. Funcionalidades principales

### 4.1 Catálogo público (`/decants`)

- Grid paginado con tarjetas de cada fragancia
- Filtro por género (Masculino / Femenino / Unisex)
- Búsqueda por texto (casa + nombre)
- Al hacer clic: diálogo con descripción, notas olfativas (salida/corazón/fondo) y disponibilidad
- Botón "Agregar al carrito" → selecciona tamaño (5ml / 10ml) y cantidad

### 4.2 Carrito de compras

- Persistencia en `localStorage`
- Límite de 5 unidades por producto/tamaño
- Modificar cantidades, eliminar productos
- Cálculo automático del total
- Descuento navideño automático (10% del 20 al 31 de diciembre)

### 4.3 Checkout (`/checkout`)

- Formulario: Nombre completo, Teléfono (8 dígitos), Dirección exacta
- Validación en tiempo real
- Al enviar: genera un mensaje con la lista de productos, cantidades, precios y total
- Redirige a WhatsApp con el mensaje pre-llenado
- Confirmación de envío → limpia el carrito

### 4.4 FAQs (`/faqs`)

- Preguntas frecuentes estáticas sobre el negocio:
  - ¿Qué es un decant?
  - ¿Por qué comprar un decant?
  - ¿Los perfumes son originales?
  - ¿Hacen envíos a todo el país? (Q35 Ciudad Guatemala/Mixco, otros vía Forza)
  - ¿Métodos de pago? (depósito o transferencia)

### 4.5 Admin: Gestión de Fragancias (`/fragances`)

- CRUD de perfumes (crear, leer, actualizar, eliminar)
- Diálogo con campos: Casa, Nombre, Descripción, Ruta de imagen, Notas (salida/corazón/fondo), Género
- Botón para subir todo el catálogo al backend (Cloudflare KV)
- Botón para actualizar todo

### 4.6 Admin: Clientes (`/customers`)

- Tabla de clientes con columnas: Nombre, Teléfono, Email, NIT
- CRUD completo con diálogos
- Soporte para permisos por rol

### 4.7 Admin: Roles (`/roles`)

- CRUD de roles
- Navegación a permisos por rol
- Paginación desde API

### 4.8 Admin: Gimnasios (`/gyms`)

- CRUD de gimnasios (parcialmente implementado)
- Filtros dinámicos por nombre/dirección/teléfono
- Paginación desde API

### 4.9 Autenticación

- Sign-in, Sign-up, Forgot/Reset password
- Unlock session
- Auth guard, token management
- Sistema de permisos por rol/acción (basado en claims)

---

## 5. APIs y endpoints

**Backend:** Cloudflare Worker (`https://perfumes-catalog.diegorogelio.workers.dev`)

| Endpoint | Método | Descripción |
|----------|--------|-------------|
| `/list` | GET | Lista todos los perfumes |
| `/add` | POST | Agrega un perfume |
| `/update?id={id}` | PUT | Actualiza un perfume |
| `identity/Login` | POST | Inicio de sesión |
| `identity/users/` | GET | Lista de usuarios |
| `identity/roles/` | GET | Lista de roles |
| `customers/` | GET | Lista de clientes |
| `gyms/` | GET | Lista de gimnasios |

El servicio `ApiService` expone 4 métodos genéricos:
- `CallApi<T>()` — JSON genérico (GET/POST/PUT/DELETE/PATCH)
- `CallApiFile<T>()` — para PDF
- `CallApiPostFormData<T>()` — FormData multipart
- `CallApiGetFormData<T>()` — Para imágenes binarias

**CDN de imágenes:** `https://images.ghostlyscentsgt.com/`

---

## 6. Modelos de datos clave

### Item (Perfume)
```typescript
Item {
  id: number;
  house: string;        // Casa perfumera (e.g. "Afnan", "Carolina Herrera")
  name: string;         // Nombre del perfume
  description: string;  // Descripción detallada
  image: string;        // Nombre archivo imagen
  notes: { top, middle, base };  // Notas olfativas
  options: ItemOptions[];  // Tamaños disponibles (5ml, 10ml, 50ml, 100ml)
  gender: Gender;       // Masculino | Femenino | Unisex
  status: ItemStatus;   // Available | SoldOut
}
```

### ShoppingCart / ItemsCart
```typescript
ItemsCart {
  itemId: number;
  house: string;
  itemName: string;
  image: string;
  name: SizeOptions;    // "5ml" | "10ml" | "50ml" | "100ml"
  price: number;
  quantity: number;
}
```

---

## 7. Componentes reutilizables

| Componente | Propósito |
|------------|-----------|
| `DinamicFormComponent` | Genera formularios desde un modelo declarativo (inputs, selects, textareas, chips, datepickers, toggles, autocomplete) |
| `DinamicTableComponent` | Tabla genérica con ordenamiento, paginación (español), filtros, menús contextuales |
| `DinamicFilterComponent` | Filtros de búsqueda configurables |
| `ItemsGridComponent` | Grid tipo cards con paginación para mostrar perfumes |
| `ToastAlertComponent` | Notificaciones toast (éxito/error) |
| `DialogLayoutComponent` | Layout base para diálogos modales |
| `PageLayoutComponent` | Layout con header + breadcrumb para páginas admin |
| `EmptyDataComponent` | Estado de datos vacíos |

---

## 8. Comandos de desarrollo

```bash
# Servidor de desarrollo (abre navegador)
npm start               # ng serve -o

# Build producción
npm run build           # cross-env NODE_ENV=production ng build

# Build staging
npm run staging         # cross-env NODE_ENV=production ng build --configuration staging

# Build para GitHub Pages
npm run github          # mismo que build pero con base-href '/'

# Tests unitarios
npm test                # ng test

# Watch mode
npm run watch           # ng build --watch --configuration development
```

Node version requerido: 18+ (definido en `.nvmrc`)

---

## 9. Configuración

### environment.ts
```typescript
export const environment = {
  production: false,
  API_URL: 'https://perfumes-catalog.diegorogelio.workers.dev',
  IMAGES_URL: 'https://images.ghostlyscentsgt.com/',
  S_KEY: 'HX0KSQPHrapmAZLPB'
};
```

### public/config.json (fallback, no usado actualmente)
```json
{ "api": "http://www.google.com/", "key": "mundo" }
```

---

## 10. Notas importantes

- El **catálogo local** (`src/app/core/objects/items.ts`) contiene ~80+ fragancias hardcodeadas como catálogo estático
- La app carga desde la API de Cloudflare Workers al iniciar; si falla, usaría el catálogo local (pero la lógica actual solo usa API)
- El **carrito** se persiste en `localStorage` con clave `shopping-cart`
- Los **pedidos** se envían vía WhatsApp al número `+502 3973 0756`
- El guard de autenticación (`authGuard`) está **comentado** en las rutas — la app actualmente no exige login para navegar
- El sistema de permisos está implementado con directiva `*appPermission` basada en claims del backend
- El catálogo local tiene **2 opciones de precio por fragancia**: 5ml y 10ml
- Las imágenes están en formato `.webp`, `.jpg`, `.png`
- La app tiene splash screen con logo de Ghostly Scents
- Traducciones: Transloco configurado con inglés y turco (aunque el contenido real está en español)

---

## 11. Licencia

Basado en **Fuse - Angular Admin Template** (licencia estándar de ThemeForest).
Proyecto privado de Ghostly Scents GT.
