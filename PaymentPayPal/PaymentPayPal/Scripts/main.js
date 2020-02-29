/* Pago 199 dolares */

paypal.Button.render({
  // Configuración de los keys de prueba y de producción de Paypal
  env: 'sandbox',
  client: {
    sandbox: 'AdBR9YXW-9rlG2EIviB4k8Z3atEXd_XWB5kZwOi5-BHgoOKnwH0vUoXgU3gB-rOi7ZGqFkJ0paE7fhQz',
    production: 'EPwPXKi-sRlD7JtUkJovsKsw9PaNSS3OscyhVFmB7jKzlO6XRh61xr5-OzsIMcWaoaTsshLz4EW8onR7'
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
}, "#btn-paypal-1");


/* Pago 399 dolares */

paypal.Button.render({
  // Configuración de los keys de prueba y de producción de Paypal
  env: 'sandbox',
  client: {
    sandbox: 'AdBR9YXW-9rlG2EIviB4k8Z3atEXd_XWB5kZwOi5-BHgoOKnwH0vUoXgU3gB-rOi7ZGqFkJ0paE7fhQz',
    production: 'EPwPXKi-sRlD7JtUkJovsKsw9PaNSS3OscyhVFmB7jKzlO6XRh61xr5-OzsIMcWaoaTsshLz4EW8onR7'
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
          total: '399',
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
}, "#btn-paypal-2");


/* Pago 999 dolares */

paypal.Button.render({
  // Configuración de los keys de prueba y de producción de Paypal
  env: 'sandbox',
  client: {
    sandbox: 'AdBR9YXW-9rlG2EIviB4k8Z3atEXd_XWB5kZwOi5-BHgoOKnwH0vUoXgU3gB-rOi7ZGqFkJ0paE7fhQz',
    production: 'EPwPXKi-sRlD7JtUkJovsKsw9PaNSS3OscyhVFmB7jKzlO6XRh61xr5-OzsIMcWaoaTsshLz4EW8onR7'
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
          total: '999',
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
}, "#btn-paypal-3");


/* Pago parametrizado */
this.pagoParametrizado = function(){
  paypal.Button.render({
    // Configuración de los keys de prueba y de producción de Paypal
    env: 'sandbox',
    client: {
      sandbox: 'AdBR9YXW-9rlG2EIviB4k8Z3atEXd_XWB5kZwOi5-BHgoOKnwH0vUoXgU3gB-rOi7ZGqFkJ0paE7fhQz',
      production: 'EPwPXKi-sRlD7JtUkJovsKsw9PaNSS3OscyhVFmB7jKzlO6XRh61xr5-OzsIMcWaoaTsshLz4EW8onR7'
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
            total: textAmount.value,
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
  }, "#btn-paypal-3");
}

