import Stripe from 'stripe';

const stripe = new Stripe('your-stripe-secret-key', {
  apiVersion: '2020-08-27',
});

const createPaymentIntent = async (amount: number) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: 'usd',
  });

  return paymentIntent.client_secret;
};

const payButton = document.getElementById('pay-button');
payButton.addEventListener('click', async () => {
  const clientSecret = await createPaymentIntent(1000); // 1000 cent = 10 USD
  const cardElement = elements.getElement(CardElement);

  const result = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: cardElement,
    },
  });

  if (result.error) {
    console.log(result.error.message);
  } else {
    if (result.paymentIntent.status === 'succeeded') {
      console.log('Payment succeeded!');
    }
  }
});
