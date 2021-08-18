This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
nmp i,
npm run dev

```

Desarrollar una SPA en React JS , de un cajero automático (TASI), que permita realizar
operaciones como: extracción, depósito y consulta de saldo.
La misma puede estar desarrollada bajo el paradigma de class o de component function.
En caso de ser desarrollada bajo el paradigma de component function, se tomará en
cuenta el uso de hooks .
Para el diseño puede hacer uso de librerias como reactstrap o material-ui.
Se valora el uso de la metodología de Atomic Design
Para la navegación entre vistas, puede hacer uso de librerias como react-router-dom o
reach router.
La SPA deberá consumir datos moqueados en JSON. Los mismos deberar ser mostrados y
modificados según las definiciones de la aplicación.
A continuación se le proporcionará un boceto de las vistas y sus definiciones:

### ` Requisitos`

### `Vista inicial- Definiciones`

• El campo DNI, solo aceptara número entre 7 y 8 caracteres.
• El campo Clave, solo aceptara números y deberá tener 4 caracteres.
• Los botones del 1 al 0 agregaran su valor solo al campo que tenga “focus”.
• El botón Continuar, estará “disabled” si los campos DNI y Clave están vacíos o no se cumpla las
validaciones de dichos campos.
• A pulsar el botón Continuar, enviará los datos a un método o función, que se encargue de verificar
dichos datos del cliente mediante un objeto JSON. En caso que los datos sean incorrectos , deberá mostrar un “alert” con el mensaje de “Datos incorrectos”, de lo contrario se realizara un redireccionamiento a la vista de Operaciones.
• El botón Borrar limpia los campos DNI y Clave.
• Agregar un setTimeout de 20 segundos a la vista que limpie los campo DNI y Clave, en caso de que
esta deje de ser usada por el cliente. Tenga en cuenta que cada vez que se realiza una acción en la vista se debería inicializar el setTimeout.

### `Vista Operaciones - Definiciones`

• Se deberá mostrar un texto de bienvenida con el primer nombre del cliente.
• El botón Extracción redireccionara a la vista de extracción.
• El botón Depósito redireccionara a las vista de deposito.
• El botón Consultar saldo redireccionara a las vista de saldo.
• El botón Cancelar redireccionara a las vista de cancelación.
• Se tomará en cuenta que al pulsar el botón de Cancelar, muestre un modal de confirmación de
cancelar la operación (no excluyente).
• Agregar un setTimeout de 30 segundos a la vista que redireccione al inicio, en caso de que esta
deje de ser usada por el cliente. Tenga en cuenta que cada vez que se realiza una acción en la vista se debería inicializar el setTimeout

### `Vista Extracción - Definiciones`

• Al seleccionar uno de los montos sugeridos y posterior pulsar el botón Continuar, el monto será verificado con el saldo en cuenta del cliente. Si el monto es mayor que el saldo, deberá mostrar un modal (como se muestra en la posterior imagen) con el mensaje “Su saldo es insuficiente. Puede consultar su saldo, probar con otro monto o cancelar la operación”. En caso de que el monto seleccionado sea menor al saldo, se restara el monto del saldo del cliente y se redireccionara la vista de Éxito.
• Si selecciona la opción “Otro monto” redireccionara a la vista otro monto.
• El botón Continuar estará “disabled por default" si ninguna de la opciones a sido seleccionada.
• El botón Cancelar redireccionara a las vista de cancelación.
• Se tomará en cuenta que al pulsar el botón de Cancelar, muestre un modal de confirmación de
cancelar la operación (no excluyente).
• Agregar un setTimeout de 30 segundos a la vista que redireccione al inicio, en caso de que esta
deje de ser usada por el cliente. Tenga en cuenta que cada vez que se realiza una acción en la vista se debería inicializar el setTimeout.

### `Modal Saldo insuficiente (Vista Extracción)- Definiciones`

• Si pulsa Consultar saldo, se cierra el modal y redirecciona a la vista de saldo.
• Si pulsa Otro monto , se cierra el modal y redirecciona a la vista de otro monto.
• El botón Cancelar, cierra el modal y redireccionara a las vista de cancelación.
• Se tomará en cuenta que al pulsar el botón de Cancelar, muestre un modal de confirmación de cancelar la
operación (no excluyente).

### ` Vista Otro monto - Definiciones`

• El valor del monto se agregara por medio del teclado numérico, en una etiqueta label que deberá mostrarse en formato de miles.
• El valor del label deberá estar por default en 0.
• El botón Continuar estará “disabled por default" si el valor del monto es igual a 0.
• Al pulsar el botón Continuar, el monto será verificado con el saldo en cuenta del cliente. Si el
monto es mayor que el saldo, deberá mostrar un modal (como se muestra en la posterior imagen) con el mensaje “Su saldo es insuficiente. Puede consultar su saldo, probar con otro monto o cancelar la operación”. En caso de que el monto seleccionado sea menor al saldo, se restara el monto del saldo del cliente y se redireccionara la vista de Éxito.
• El botón Borrar inicializa el valor del label a 0.
• El botón Cancelar redireccionara a las vista de cancelación.
• Se tomará en cuenta que al pulsar el botón de Cancelar, muestre un modal de confirmación de
cancelar la operación (no excluyente).
• Agregar un setTimeout de 30 segundos a la vista que redireccione al inicio, en caso de que esta
deje de ser usada por el cliente. Tenga en cuenta que cada vez que se realiza una acción en la vista se debería inicializar el setTimeout.

### ` Modal Saldo insuficiente (Vista Otro monto) - Definiciones`

• Si pulsa Consultar saldo, se cierra el modal y redirecciona a la vista de saldo.
• Si pulsa Otro monto , se cierra el modal.
• El botón Cancelar, cierra el modal y redireccionara a las vista de cancelación.
• Se tomará en cuenta que al pulsar el botón de Cancelar, muestre un modal de confirmación de cancelar la
operación (no excluyente).

### ` Vista Depósito- Definiciones`

• Los campos cantidad solo aceptan números entre 1 y 4 caracteres. Tendrán el valor inicial por defaulf en 0
• Los botones del 1 al 0 agregaran su valor solo al campo cantidad que tenga “focus”.
• El monto a depositar se mostrara en una etiqueta label, con un valor inicial de 0
• El valor del campo cantidad será multiplicado por su moneda asociada y el resultado sumado al
valor del monto a depositar.
• El botón Continuar estará “disabled por default" si el valor de todos los campos cantidad es igual a 0.
• Al pulsar el botón Continuar , el monto a depositar deberá sumarse al saldo del cliente y
redireccionar a la vista de Éxito.
• El botón Borrar , elimina uno por uno los caracteres del campo cantidad que tenga “focus”. De
borrar todos los caracteres del campo, inicializa el valor del campo a 0.
• El botón Cancelar redireccionara a las vista de cancelación.
• Se tomará en cuenta que al pulsar el botón de Cancelar, muestre un modal de confirmación de
cancelar la operación (no excluyente).
• Agregar un setTimeout de 30 segundos a la vista que redireccione al inicio, en caso de que esta
deje de ser usada por el cliente. Tenga en cuenta que cada vez que se realiza una acción en la vista se debería inicializar el setTimeout

### ` Vista Saldo - Definiciones`

• En esta vista se deberá mostrar el saldo en cuenta del cliente.
• El botón Si redirecciona a la vista de operaciones.
• El botón NO redirecciona a la vista de cancelación.
• Agregar un setTimeout de 15 segundos a la vista que redireccione al inicio, en caso de que esta
deje de ser usada por el cliente.

### ` Vista Éxito de Extracción o Depósito - Definiciones`

• En caso de éxito por extracción, deberá mostrar el monto debitado y la cuenta del cliente donde fue realizada.
• En caso de éxito por depósito, deberá mostrar el monto depositado y la cuenta del cliente donde fue realizada la operación.
• Agregar un setTimeout de 10 segundos a la vista que redireccione al inicio.

### ` Vista Cancelación - Definiciones`

• En esta vista deberá mostrarse un texto “La operación ha sido cancelada.”
• Agregar un setTimeout de 5 segundos a la vista que redireccione al inicio.
