
document.querySelectorAll(".pricing-option").forEach(function(element){
    var button = element.querySelector(".button");
    var price = element.querySelector(".price");
    paypal.Button.render(
      console.log(button.id),
      {
        // Configure environment
        env: 'sandbox',
        client: {
          sandbox: 'Aa9ZMnvho8dKL0yYplXCl70U7kctqORYYcdSV_Fx4QPMCzvP9sZ6BSLb1AkiwIgI2QEnzhU5XtnsYxpm',
          production: 'EBjfl8DM61Mwf98yGvdjt4TRgGkQG4oUm8ykcxM9PUMDnKM9GLpz90Ka4XN30s_TXBjOINR9VQPC4UZy'
        },
        // Customize button (optional)
        locale: 'en_US',
        style: {
          size: 'medium',
          color: 'gold',
          shape: 'pill',
        },
      
        // Enable Pay Now checkout flow (optional)
        commit: true,
      
        // Set up a payment
        payment: function(data, actions) {
          return actions.payment.create({
            transactions: [{
              amount: {
                total: price,
                currency: 'USD'
              }
            }]
          });
        },
        // Execute the payment
        onAuthorize: function(data, actions) {
          return actions.payment.execute().then(function() {
            // Show a confirmation message to the buyer
            window.alert('Thank you for your purchase!');
          });
        }
      }, '#'+button.id+'');
});