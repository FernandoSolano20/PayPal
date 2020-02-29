

# Sistema de pagos con Paypal

<img src="https://res.cloudinary.com/grupo-bejuco/image/upload/v1582943582/paypal_vcvybf.png" width="290"/>

### ¿Qué es PayPal?

PayPal es una plataforma mundial de pagos en línea que permite transferencias de dinero en línea y funciona como una alternativa electrónica a los métodos tradicionales.

Su sistema permite transacciones en línea rápidas y seguras , ya que Paypal se asegura que la información sensible utilizada durante los pagos sea manejada de una forma más segura, mejorando la confianza de sus usuarios y de las tiendas.


------------



### Objetivo

En este repositorio encontrará la información necesaria para configurar y realizar pagos en línea mediante el API de PayPal, incluyendo los pasos para completar el registro dentro de la plataforma y el código HTML, JS y C# utilizado.

------------

#### Creación de la cuenta

1.  Ingresar a [paypal.com](https://www.paypal.com/es/webapps/mpp/home) y seleccione la opción **Crear una cuenta gratis**
2. Seleccione **Cuenta Business** para empresas
3. Ingrese su cuenta de correo electrónico y contraseña
4. Ingrese los datos de su empresa
5. Seleccione **Aceptar y crear cuenta**


------------



#### Configuración de la cuenta

Después de crear la cuenta, deberá acceder a [developer.paypal.com/developer/applications](https://developer.paypal.com/developer/applications). Una vez dentro, en el panel de navegación al lado izquierdo en la sección **My app and Credentials** deberá crear la aplicación en la cual desea realizar las transacciones.

Al hacer click en la nueva aplicación podrá visualizar el correo electrónico utilizado para el manejo de las transacciones desde su cuenta sandbox y además dos códigos, el primero corresponde a **Client ID**,  el cual será utilizado para realizar pagos de prueba y el segundo código llamado **Secret** le permitirá realizar transacciones reales. Ambos códigos serán utilizados próximamente dentro del código.


------------

#### Cuentas Sandbox

Paypal permite a los desarrolladores usar cuentas de prueba o **Sandbox**. De esta manera, facilita la realización de transacciones ficticias, para la comprobación del correcto funcionamiento de la aplicación.

En [developer.paypal.com/developer/accounts](https://developer.paypal.com/developer/accounts/), podrá encontrar dos cuentas preconfiguradas. La cuenta **Personal** permite realizar transacciones desde el lado del cliente y la cuenta **Business** permite recibir y manejar pagos desde el lado de la empresa.

En caso de requerir una cuenta **Sandbox** personalizada, puede seleccionar la opción **Create account** o **Create Bulk Accounts** para generar una cantidad determinada de cuentas.

------------

#### Funciomiento en código JS

Para la implementación del API de PayPal deberá crear un archivo HTML y un archivo JS. 

En su archivo HTML deberá agregar las librerías oficiales de Paypal mediante el siguiente script:

```html
<script src="https://www.paypalobjects.com/api/checkout.js"></script>
```

Una vez agregado, deberá generar un contenedor donde aparecerá el botón de pago de PayPal. Este contenedor deberá tener un **ID**, de esta forma podrá ser leído desde el archivo JS y así agregar el botón.

```html
<div id="btn-paypal"></div>

```
Una vez logrado esto, deberá llamar a las librerías de PayPal agregadas anteriormente, para generar el botón dentro de su HTML. En las siguientes líneas se muestra el código específico con el que se completa esta tarea dentro de este proyecto.

```javascript
paypal.Button.render({
  // Configuración de los keys de prueba y de producción de Paypal
  env: 'sandbox',
  client: {
    sandbox: ' #Token de transacción sandbox',
    production: '#Token de transacción de produción'
  },
  // Customización del botón mostrado
  locale: 'en_US',
  style: {
    size: 'medium',
    color: 'gold',
    shape: 'pill',
  },
  // Habilitar la posibilidad del pago instantaneo (esto es opcional)
  commit: true,

  // Configuración del pago
  payment: function(data, actions) {
    return actions.payment.create({
      transactions: [{
        amount: {
          total: '199',
          currency: 'USD'
        }
      }]
    });
  },
  // Ejecutar el pago
  onAuthorize: function(data, actions) {
    return actions.payment.execute().then(function() {
      // Mostrar mensaje de confirmacion!
      window.alert('Muchas gracias por su compra!');
    });
  }
}, "#btn-paypal");
```

Una vez completados estos pasos, el botón deberá ser generado en su archivo HTML. Al hacer **click** sobre este, se desplegará el inicio de sesión de PayPal, el cual le solicitará sus credenciales. En este punto, podrá agregar alguna de las cuentas **Sandbox** generadas anteriormente y así realizar pago de prueba para verificar el funcionamiento correcto de la plataforma.

<img src="https://res.cloudinary.com/grupo-bejuco/image/upload/v1582948214/payment_s7owke.png" width="290"/>

------------

#### Funciomiento en código C#

Los pasos compartidos anteriormente son de gran utilidad si se desea realizar el procesamiento de los pagos **directamente en el navegador**. En el caso que se desee  procesar dichos pagos desde el lado del servidor utilizando una propuesta de diseño **MVC**, deberá seguir estos pasos:

1. Ingresar a **Visual Studio**
2. Crear un proyecto **WEB Application MVC**
3. Instalar el paquete Nuget **Paypal 1.5.0**
4. Crear el controlador **PayPalController**, donde se recibirán los *request* de los usuarios desde el navegador. Acá se implementa el método PaymentWithPaypal
5. Agregar la clase **ConfigurationPaypal**, donde obtiene la información necesaria para conectarse con el API.
6. Generar las vistas para la visualización del catálogo, además de las vistas para el mensaje de confirmación y el mensaje de fallo, en caso de que suceda un error durante la transacción, el usuario esté informado.

**IMPORTANTE:** Dentro del Web.Config del proyecto, deberá agregar los tokens tanto **Sandbox** como **Production** como se muestra a continuación:

```xml
<paypal>
    <settings>
      <add name="mode" value="sandbox"/>
      <add name="connectionTimeout" value="360000"/>
      <add name="requestRetries" value="1"/>
      <add name="clientId" value="Token de transacción sandbox"/>
      <add name="clientSecret" value="Token de transacción de produción"/>
    </settings>
  </paypal>
```
Para más detalles en la implementación de esta propuesta, por favor visitar nuestro vídeo en YouTube, que se encuentra en la parte de abajo de esta documentación o ingresar al código del repositorio.

------------



#### Ver tutorial en YouTube

Para conocer un poco más sobre esta implementación,  visite nuestro vídeo en YouTube: [Sistema de pagos con PayPal](https://www.youtube.com/watch?v=9VkrnMwp-Bk&feature=youtu.be)


------------



#### Créditos

La presente investigación fue realizada por Grupo Bejuco durante el curso de Proyecto de Ingeniería del Software 2 de la Universidad Cenfotec.

**Integrantes:**

- Andrés Bonilla Agüero (abonillaa@ucenfotec.ac.cr)
- Julissa Garay Montalvan (jgaray@ucenfotec.ac.cr)
- María Fernanda Granados Arias (mgranadosa@ucenfotec.ac.cr)
- Jorge Mata Garro (jmatag@ucenfotec.ac.cr)
- Luis Fernando Solano Montoya (lsolanom1@ucenfotec.ac.cr)
- Axel Ulate Ulate (aulateu@ucenfotec.ac.cr)


------------

