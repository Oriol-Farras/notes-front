<div align="center">

# 📝 Notes Front - Angular Application

[![Angular](https://img.shields.io/badge/Angular-21.1-red.svg)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple.svg)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

**Frontend moderno para gestión de notas construido con Angular 21**

[Características](#-características) • [Instalación](#-instalación) • [Uso](#-uso) • [Estructura](#-estructura-del-proyecto)

</div>

---

## 🎯 Descripción

**Notes Front** es una aplicación frontend desarrollada con **Angular 21** que proporciona una interfaz moderna y reactiva para gestionar notas. Utiliza las últimas características de Angular, incluyendo componentes standalone, signals y el nuevo sistema de inyección de dependencias.

### ¿Por qué este proyecto?

- 🎓 **Aprendizaje**: Implementación práctica de Angular moderno
- � **Standalone Components**: Sin necesidad de NgModules
- 📱 **Responsive**: Diseño adaptable con Bootstrap 5
- ⚡ **Reactivo**: Programación reactiva con RxJS
- 🎨 **UI Moderna**: Interfaz profesional con animaciones

---

## ✨ Características

- ✅ **Componentes Standalone** - Arquitectura moderna sin módulos
- ✅ **Reactive Programming** - RxJS para gestión asíncrona
- ✅ **HttpClient** - Comunicación con API REST
- ✅ **Two-Way Data Binding** - Sincronización automática de datos
- ✅ **Bootstrap 5** - Diseño responsive y profesional
- ✅ **Font Awesome** - Iconografía moderna
- ✅ **CSS Animations** - Transiciones suaves y fluidas
- ✅ **TypeScript** - Tipado fuerte y autocompletado

---

## 🛠 Tecnologías

| Tecnología | Versión | Descripción |
|-----------|---------|-------------|
| ![Angular](https://img.shields.io/badge/Angular-21.1-red?logo=angular) | 21.1 | Framework frontend |
| ![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript) | 5.9 | Lenguaje tipado |
| ![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple?logo=bootstrap) | 5.3 | Framework CSS |
| ![RxJS](https://img.shields.io/badge/RxJS-7.8-B7178C?logo=reactivex) | 7.8 | Programación reactiva |
| ![Font Awesome](https://img.shields.io/badge/Font%20Awesome-6.0-339AF0?logo=fontawesome) | 6.0 | Iconos |

---

## 🏗 Arquitectura

```
┌─────────────────────────────────────────┐
│         Angular Application             │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │      AppComponent (Standalone)    │  │
│  │  - Template con Bootstrap         │  │
│  │  - Two-way binding [(ngModel)]    │  │
│  │  - Event handlers                 │  │
│  └───────────────────────────────────┘  │
│                 │                       │
│                 ▼                       │
│  ┌───────────────────────────────────┐  │
│  │        NoteService                │  │
│  │  - HttpClient injection           │  │
│  │  - Observable<Note[]>             │  │
│  │  - CRUD operations                │  │
│  └───────────────────────────────────┘  │
│                 │                       │
│                 ▼                       │
│  ┌───────────────────────────────────┐  │
│  │         Note Model                │  │
│  │  - Interface TypeScript           │  │
│  │  - Type safety                    │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
                 │
          HTTP Requests
                 │
                 ▼
        Backend API (Spring Boot)
     http://localhost:8080/api/notes
```

---

## 📦 Instalación

### Prerrequisitos

Asegúrate de tener instalado:

- 📦 **Node.js 20.19+** - [Descargar](https://nodejs.org/)
- 🅰️ **Angular CLI 21.1** - Instalar con: `npm install -g @angular/cli`

### 🚀 Instalación Rápida

#### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/Oriol-Farras/notes-front.git
cd notes-front
```

#### 2️⃣ Instalar dependencias

```bash
npm install
```

#### 3️⃣ Configurar el backend

Asegúrate de que el backend esté corriendo en `http://localhost:8080`

#### 4️⃣ Ejecutar la aplicación

```bash
# Modo desarrollo
ng serve

# Abrir automáticamente en el navegador
ng serve -o

# Especificar puerto
ng serve --port 4200
```

La aplicación estará disponible en: `http://localhost:4200`

---

## 💻 Uso

### Crear una Nota

1. Escribe tu nota en el campo de texto
2. Presiona **Enter** o haz clic en el botón **"Añadir"**
3. La nota aparecerá instantáneamente en la lista

### Visualizar Notas

- Todas las notas se cargan automáticamente al iniciar
- Cada nota muestra su contenido y su ID único
- El contador muestra el total de notas guardadas

### Interfaz de Usuario

```
┌─────────────────────────────────────────┐
│         📝 Mis Notas                    │
│    Spring Boot + Angular App            │
├─────────────────────────────────────────┤
│  ┌───────────────────────┬──────────┐   │
│  │ ¿Qué tienes en mente? │ + Añadir │   │
│  └───────────────────────┴──────────┘   │
│                                         │
│  Lista de tareas                        │
│  ┌─────────────────────────────────┐    │
│  │ Mi primera nota          ID: 1  │    │
│  │ Recordar comprar leche   ID: 2  │    │
│  └─────────────────────────────────┘    │
│                                         │
│         Total notas: 2                  │
└─────────────────────────────────────────┘
```

---

## � Estructura del Proyecto

```
notes-front/
├── src/
│   ├── app/
│   │   ├── app.ts                    # Componente principal standalone
│   │   ├── app.config.ts             # Configuración de la aplicación
│   │   ├── app.routes.ts             # Definición de rutas
│   │   ├── note.ts                   # Interface del modelo Note
│   │   └── note.service.ts           # Servicio HTTP para API
│   │
│   ├── index.html                    # HTML principal
│   ├── main.ts                       # Punto de entrada
│   └── styles.css                    # Estilos globales
│
├── public/
│   └── favicon.ico                   # Icono de la aplicación
│
├── angular.json                      # Configuración de Angular
├── package.json                      # Dependencias npm
├── tsconfig.json                     # Configuración TypeScript
└── README.md                         # Este archivo
```

### Componentes Principales

#### 📄 **app.ts** - Componente Principal
```typescript
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `...`,
  styles: [`...`]
})
export class AppComponent implements OnInit {
  notes: Note[] = [];
  newNoteText: string = '';
  
  constructor(private noteService: NoteService) { }
  
  ngOnInit() {
    this.loadNotes();
  }
  
  loadNotes() { ... }
  addNote() { ... }
}
```

#### 🔧 **note.service.ts** - Servicio HTTP
```typescript
@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private apiUrl = 'http://localhost:8080/api/notes';
  
  constructor(private http: HttpClient) { }
  
  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.apiUrl);
  }
  
  createNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.apiUrl, note);
  }
}
```

#### 📋 **note.ts** - Modelo
```typescript
export interface Note {
  id?: number;
  text: string;
}
```

---

## 🔧 Configuración

### Variables de Entorno

Edita `note.service.ts` para cambiar la URL del backend:

```typescript
private apiUrl = 'http://localhost:8080/api/notes';
```

### Configuración de HttpClient

En `app.config.ts`:

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient()  // Habilita HttpClient
  ]
};
```

### Bootstrap y Font Awesome

Incluidos en `index.html`:

```html
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
```

---

## 🚀 Build y Despliegue

### Build de Producción

```bash
# Generar build optimizado
ng build

# Build con configuración específica
ng build --configuration production
```

Los archivos se generarán en `dist/notes-front/`

### Despliegue en Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel --prod
```

### Despliegue en Netlify

```bash
# Build
ng build --configuration production

# Desplegar carpeta dist
netlify deploy --prod --dir=dist/notes-front/browser
```

---

## 🎨 Personalización

### Cambiar Colores

Modifica las clases de Bootstrap en `app.ts`:

```typescript
// Cabecera
<div class="card-header bg-primary text-white">

// Botón
<button class="btn btn-success">
```

### Añadir Animaciones

Las animaciones están definidas en los `styles` del componente:

```typescript
styles: [`
  .animate-fade {
    animation: fadeIn 0.5s ease-in-out;
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`]
```

---

## 📝 Scripts Disponibles

```bash
# Desarrollo
npm start              # Inicia servidor de desarrollo
ng serve              # Igual que npm start
ng serve -o           # Abre automáticamente en el navegador

# Build
npm run build         # Build de producción
ng build              # Igual que npm run build

# Otros
ng generate component <name>   # Generar componente
ng generate service <name>     # Generar servicio
```

---

## 🔍 Características de Angular 21

Este proyecto utiliza las últimas características de Angular:

- ✅ **Standalone Components** - Sin NgModules
- ✅ **Signals** - Sistema de reactividad mejorado
- ✅ **Inject Function** - Inyección de dependencias moderna
- ✅ **Control Flow** - Nuevo @if, @for, @switch
- ✅ **Defer Loading** - Carga diferida de componentes

---

## 📚 Recursos de Aprendizaje

- [Angular Documentation](https://angular.io/docs)
- [Angular CLI](https://angular.io/cli)
- [RxJS Documentation](https://rxjs.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Bootstrap Documentation](https://getbootstrap.com/docs/)

---

## 👨‍💻 Autor

**Oriol Farràs**

- GitHub: [@Oriol-Farras](https://github.com/Oriol-Farras)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 🙏 Agradecimientos

- [Angular Team](https://angular.io/)
- [Bootstrap](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)
- [RxJS](https://rxjs.dev/)

---

<div align="center">

**⭐ Si te ha gustado este proyecto, dale una estrella! ⭐**

Hecho con ❤️ por [Oriol Farràs](https://github.com/Oriol-Farras)

</div>
