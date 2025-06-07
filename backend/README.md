# Milele Psychology Center - Contact Form API

Este backend proporciona una API para gestionar el formulario de contacto del Centro de Psicología Milele.

## Estructura del proyecto

```
backend/
├── src/
│   ├── controllers/    # Controladores para manejar la lógica de negocio
│   ├── lib/           # Utilidades (configuración de email)
│   ├── models/        # Modelos de datos para MongoDB
│   ├── routes/        # Rutas de la API
│   └── server.js      # Configuración principal del servidor
├── .env.example       # Plantilla para variables de entorno
├── package.json       # Dependencias y scripts del proyecto
└── README.md          # Documentación del proyecto
```

## Requisitos

- Node.js (v14+)
- MongoDB

## Configuración

1. Copia el archivo `.env.example` a `.env` y configura las variables de entorno:

```bash
cp .env.example .env
```

2. Modifica el archivo `.env` con tu configuración:

```
PORT=5000                               # Puerto para el servidor
MONGODB_URI=mongodb://localhost:27017/milele  # URL de conexión a MongoDB
RESEND_API_KEY=your_resend_api_key_here # Clave API de Resend para envío de emails
CONTACT_EMAIL=contact@milele.com        # Email donde recibir los formularios de contacto
```

## Instalación

```bash
# Instalar dependencias
npm install
```

## Ejecución

```bash
```bash
# Modo desarrollo con recarga automática
npm run dev

# Modo producción
npm start
```

## API Endpoints

### Formulario de Contacto

- `POST /api/contact` - Enviar formulario de contacto

## Modelo

### Contacto

```javascript
{
  name: String,             // Nombre completo (requerido)
  email: String,            // Correo electrónico (requerido)
  phone: String,            // Teléfono (opcional)
  message: String,          // Mensaje (requerido)
  createdAt: Date,          // Fecha de creación automática
}
```

## Funcionalidades

- **Validación de datos**: Validación completa de campos requeridos
- **Persistencia**: Almacenamiento de formularios en MongoDB
- **Notificaciones por email**: Envío automático de emails usando Resend
- **CORS configurado**: Permite peticiones desde el frontend
- **Manejo de errores**: Respuestas de error descriptivas

## Configuración de Email

El sistema utiliza Resend para el envío de emails. Los formularios de contacto se envían automáticamente al email configurado en `CONTACT_EMAIL`.

## Tecnologías

- **Node.js** - Entorno de ejecución
- **Express.js** - Framework web
- **MongoDB** - Base de datos
- **Mongoose** - ODM para MongoDB
- **Resend** - Servicio de envío de emails
- **CORS** - Configuración de políticas de origen cruzado
