import React from "react"
import StripeCheckout from "react-stripe-checkout"

 const StripeCheckoutButton = ({price}) => {
     const priceForStripe = price * 100
     const publishableKey ="pk_test_51IIWsYK1DNnVbCCsskSOe8Czgj5heg4TpjrMCeM4RDqxYUHcPEByUDYtT4W7976Y837SvUT7byITyJFcCRHO6dQE002ErSJbdm"
     const onToken = token =>{
         console.log(token)
         alert("Nice dude")
     }
     
     return(
         <StripeCheckout
         label="Pay Now"
         name="CRWN Clothing tld."
         billingAddress
         shippingAddress
         image="https://svgshare.com/i/CUz.svg"
         description={`Your total is ${price}`}
         amount={priceForStripe}
         panelLabel="Pay Now"
         token={onToken}
         stripeKey={publishableKey}>
             
         </StripeCheckout>
     ) 
    }


export default StripeCheckoutButton