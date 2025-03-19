export const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    // Check if Razorpay is already loaded
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    
    // Add timeout to handle blocked scripts
    const timeoutId = setTimeout(() => {
      if (!window.Razorpay) {
        console.warn('Razorpay script load timed out. Check if it\'s being blocked.');
        resolve(false);
      }
    }, 5000); // 5 second timeout

    script.onload = () => {
      clearTimeout(timeoutId);
      resolve(true);
    };
    
    script.onerror = () => {
      clearTimeout(timeoutId);
      console.error('Failed to load Razorpay script. Check if it\'s being blocked.');
      resolve(false);
    };

    document.body.appendChild(script);
  });
};

export const initializeRazorpayPayment = (orderData, onSuccess, onDismiss) => {
  try {
    if (!window.Razorpay) {
      throw new Error('Razorpay not loaded. Please disable ad blocker.');
    }

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: orderData.amount,
      currency: "INR",
      name: "Your Store",
      description: "Purchase Payment",
      order_id: orderData.orderId,
      prefill: {
        name: orderData.name || '',
        email: orderData.email || '',
        contact: orderData.contact || ''
      },
      config: {
        display: {
          blocks: {
            utib: {
              name: "Pay using UPI",
              instruments: [
                {
                  method: "upi"
                }
              ]
            },
            other: {
              name: "Other Payment Methods",
              instruments: [
                {
                  method: "card"
                },
                {
                  method: "netbanking"
                }
              ]
            }
          },
          sequence: ["block.utib", "block.other"],
          preferences: {
            show_default_blocks: false
          },
          hide: [
            { method: 'paylater' },
            { method: 'emi' }
          ]
        }
      },
      retry: {
        enabled: false
      },
      handler: function (response) {
        onSuccess(response);
        window.location.href = '/home';
      },
      modal: {
        ondismiss: function() {
          if (onDismiss) onDismiss();
        },
        confirm_close: true,
        handleback: true,
        escape: true,
        animation: true,
        backdropclose: false
      },
      theme: {
        color: "#4F46E5"
      }
    };

    const rzp = new window.Razorpay(options);

    rzp.on('payment.failed', function (response) {
      if (onDismiss) onDismiss();
      console.error('Payment failed:', response.error);
    });

    rzp.open();
    return rzp;
  } catch (error) {
    if (onDismiss) onDismiss();
    console.error('Razorpay initialization error:', error);
    throw error;
  }
};
