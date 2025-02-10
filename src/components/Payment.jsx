import { ToastContainer, toast } from 'react-toastify';

function Payment(props) {
    function pay() {
      const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
      localStorage.setItem("paymentStarted", "true")
      const paymentBody = {
        "account_name": "EUR3D1",
        "nonce": "165asd1" + new Date() + Math.random() * 9999999,
        "timestamp": new Date(),
        "amount": props.sum,
        "order_reference": Math.random() * 9999999,
        "customer_url": "https://kevin-webshop.web.app/cart",
        "api_username": "92ddcfab96e34a5f"
      }
      const paymentHeaders = {
        "Authorization": "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA==",
        "Content-Type": "application/json"
      }
   
      fetch(url, {"method": "POST", "body": JSON.stringify(paymentBody), "headers": paymentHeaders })
        .then(res => res.json())
        .then(json => {
          if (json.payment_link) {
            window.location.href = json.payment_link
          } else {
            toast.error("Payment failed")
          }
        })
      }


    // <Link to="" --> dünaamikat pole, aga rakenduse siseseks liikumiseks
    // useNavigate, navigate --> on dünaamika, rakenduse siseseks liikumiseks
    // window.location-href --> dünaamika + rakenduse väline liikumine (läheb uuele url-ile)
    // a target= "_blank" href={shop.href} ---> HTML + rakendusest välja
   
    return (
      <div><button onClick={pay}>Pay</button>

      <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
        </div>
    )
  }
   
  export default Payment