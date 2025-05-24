# Currency Exchange App

Una aplicación web completa para el intercambio de monedas desarrollada con **Spring Boot** (backend) y **Angular** (frontend).

## 🚀 Funcionalidades

### 🔐 Autenticación
- Sistema de login con JWT (JSON Web Tokens)
- Sesiones seguras y protegidas
- Guard de autenticación para rutas protegidas

### 💱 Intercambio de Monedas
- Conversión de monedas en tiempo real
- Integración con API externa de tipos de cambio (ExchangeRate-API)
- Soporte para múltiples monedas:
  - USD (Dólar Estadounidense)
  - EUR (Euro)
  - PEN (Sol Peruano)
  - GBP (Libra Esterlina)
  - JPY (Yen Japonés)
  - CAD (Dólar Canadiense)
  - AUD (Dólar Australiano)
  - CHF (Franco Suizo)
  - CNY (Yuan Chino)
  - MXN (Peso Mexicano)

### 📊 Historial de Transacciones
- Registro automático de todos los intercambios realizados
- Vista tabular con detalles completos:
  - Monto original y convertido
  - Monedas de origen y destino
  - Tipo de cambio aplicado
- Función de actualización manual

### 🛡️ Seguridad
- Autenticación JWT
- Protección CORS configurada
- Validación de formularios
- Manejo seguro de tokens

## 🔑 Credenciales de Acceso

Para acceder a la aplicación, utiliza cualquiera de las siguientes credenciales:

| Usuario | Contraseña |
|---------|------------|
| `luis` | `luis123` |
| `marisol` | `mari123` |

## 🏗️ Arquitectura

### Backend (Spring Boot)
- **Framework**: Spring Boot 2.3.12
- **Seguridad**: Spring Security + JWT
- **Base de datos**: H2 (en memoria)
- **API Externa**: ExchangeRate-API
- **Puerto**: 8090

### Frontend (Angular)
- **Framework**: Angular 17
- **UI**: Bootstrap 5
- **Iconos**: Font Awesome
- **Puerto**: 4200

## 🚦 Cómo usar la aplicación

1. **Acceder al login**
   - Navega a `http://localhost:4200`
   - Ingresa credenciales válidas

2. **Realizar intercambio**
   - Selecciona "Intercambio" en el menú
   - Ingresa el monto a convertir
   - Selecciona moneda de origen y destino
   - Haz clic en "Calcular Intercambio"

3. **Ver historial**
   - Selecciona "Historial" en el menú
   - Revisa todos los intercambios realizados
   - Usa "Actualizar" para refrescar los datos

## 🛠️ Tecnologías Utilizadas

### Backend
- Java 11
- Spring Boot
- Spring Security
- Spring Data JPA
- H2 Database
- JWT (JSON Web Tokens)
- OpenFeign (cliente HTTP)
- Lombok

### Frontend
- Angular 17
- TypeScript
- Bootstrap 5
- Font Awesome
- RxJS
- Angular Reactive Forms

## 📡 APIs y Servicios

- **ExchangeRate-API**: `https://open.er-api.com/v6/latest/`
- **Endpoints internos**:
  - `POST /api/auth/login` - Autenticación
  - `POST /api/intercambios/procesa` - Procesar intercambio
  - `GET /api/intercambios` - Obtener historial

## 💡 Características Destacadas

- ✅ Interfaz responsive y moderna
- ✅ Validación de formularios en tiempo real
- ✅ Manejo de errores robusto
- ✅ Tipos de cambio actualizados
- ✅ Persistencia de datos
- ✅ Seguridad implementada
- ✅ Experiencia de usuario optimizada


