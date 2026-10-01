# 🛒 TP2 - Flujo de Checkout Mobile (React Native & Expo)

Aplicación móvil desarrollada en **React Native** con **Expo** que implementa un flujo de compra (*Checkout Flow*) completo para una tienda online, basado en las especificaciones del diseño de Figma.

---

## 📋 Requerimientos de Negocio Cumplidos

### 1. 🛍️ Pantalla Shopping Cart
* **Selección de Color:** Cada producto permite seleccionar interactivamente el color disponible.
* **Selección de Talle (Size):** Permite cambiar el talle seleccionado del producto en tiempo real.
* **Selección de Cantidad (Qty):** Control de incremento/decremento (`+` / `-`) de unidades por producto.
* **Cálculo en tiempo real:** Actualización automática del subtotal, costo de envío y precio total del pedido.

### 2. 🗑️ Eliminar Productos
* Botón de papelera para eliminar productos individualmente del carrito.
* Vista dinámica de "Carrito Vacío" cuando no hay productos disponibles.

### 3. 💳 Pantalla Secure Payment
* **Selección de Tipo de Tarjeta:** Opción para elegir entre **Visa**, **Mastercard**, **American Express** u **Otras tarjetas**.
* **Previsualización Dinámica de Tarjeta:** Renderizado visual interactivo del plástico de crédito según el tipo de tarjeta seleccionado.
* **Formulario Completo:** Campos para número de tarjeta, titular, fecha de vencimiento y CVC/CVV.
* **Confirmación de Pago:** Procesamiento simulado con alertas nativas de confirmación.

---

## 📁 Estructura del Proyecto

```text
TP2- React Native/
├── App.js                      # Componente raíz y control de flujo/navegación entre pantallas
├── app.json                    # Configuración general de Expo
├── package.json                # Dependencias y scripts del proyecto
├── README.md                   # Documentación del proyecto
└── src/
    ├── components/
    │   └── CartItem.js         # Tarjeta de producto interactiva (Color, Talle, Qty, Delete)
    ├── data/
    │   └── mockProducts.js     # Datos mock de productos iniciales
    └── screens/
        ├── ShoppingCartScreen.js # Vista del Carrito de Compras y Resumen
        └── SecurePaymentScreen.js # Vista de Pago Seguro y Selección de Tarjeta
```

---

## 🚀 Cómo Ejecutar el Proyecto

### Requisitos Previos
* Tener instalado [Node.js](https://nodejs.org/) (v18 o superior).
* Opcional: App **Expo Go** en tu dispositivo móvil o Xcode / Android Studio para simuladores.

### Pasos de Instalación y Ejecución

1. **Clonar o abrir el proyecto en la terminal:**
   ```bash
   cd "TP2- React Native"
   ```

2. **Instalar las dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo de Expo:**
   ```bash
   npx expo start
   ```

4. **Ejecutar la app:**
   * **En Celular Físico:** Abrí la cámara (iOS) o la app **Expo Go** (Android) y escaneá el código QR mostrado en la terminal.
   * **En Simulador de iOS (Mac):** Presioná la tecla `i` en la terminal o ejecutá `npx expo run:ios`.
   * **En Emulador de Android:** Presioná la tecla `a` en la terminal o ejecutá `npx expo run:android`.

---

## 🛠️ Tecnologías Utilizadas

* **React Native** (v0.86)
* **Expo** (SDK 57)
* **JavaScript (ES6+)** / **StyleSheet** para estilos nativos
