const Stripe = require('stripe');
const express = require('express');
const { Order } = require('../models/order');
const router = express.Router(); 
require("dotenv").config();

const stripe = Stripe(process.env.STRIPE_KEY );

router.post('/create-checkout-session', async (req, res) => {
  const customer = await stripe.customers.create({
    metadata:{
      userId : req.body.userId,
     
    },
  });
  const line_items = req.body.cartItems.map((item)=>{
    return{
      price_data:{
        currency:"eur",
        product_data:{
          name:item.productName,
          images:[item.productImage],
          metadata: {
            id: item.id,
          },
        },
        unit_amount:parseInt(item.productPrice)*100,
       },
       quantity:item.cartQuantity,  
    }
  });
 
  
  const session = await stripe.checkout.sessions.create({
    phone_number_collection: {
      enabled: true,
    },
    customer:customer.id,
    line_items,
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}/checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}/ShoppingCard`,
  });

  res.send({url:session.url});
});
//CREATE ORDER
const createOrder = async(customer,data,lineItems)=>{
 

  const newOrder = new Order({
    userId:customer.metadata.userId,
    customerId : data.customer,
    paymentIntentId : data.payment_intent,
    products:lineItems.data,
    subtotal:data.amount_subtotal,
    total:data.amount_total,
    payment_status:data.payment_status,
  });
  try {
    const savedOrder =await  newOrder.save()
    console.log("Processed Order:" , savedOrder);
  } catch (err) {
    console.log(err)
    
  }
}
//Webhook

let endpointSecret;

//  endpointSecret = "whsec_9c592a428dfd11c1e0f6a5feff35f78c47524f5cd2fe663545c298539fd66051";

router.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
  const signature = req.headers['stripe-signature'];

  let data;
  let eventType;

if(endpointSecret){
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, signature, endpointSecret);
    console.log("webhook verified.")
  } catch (err) {
    console.log(`webhook Error: ${err.message}`)
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }
  data = event.data.object;
  eventType = event.type;
}else{
data = req.body.data.object;
eventType = req.body.type
}
  // Handle the event
  if(eventType === "checkout.session.completed"){
    stripe.customers
    .retrieve(data.customer)
    .then((customer)=>{
      stripe.paymentLinks.listLineItems(
        data.id,
        {},
        function(err, lineItems) {
          console.log("line_items",lineItems)
        }
      );
        createOrder(customer , data,lineItems)
      })
      .catch(err => console.log(err.message))
  }

  // Return a 200 response to acknowledge receipt of the event
  res.send().end();
});

module.exports = router;

