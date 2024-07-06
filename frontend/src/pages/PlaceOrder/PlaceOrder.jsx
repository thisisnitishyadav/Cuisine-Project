import React, { useContext } from 'react'
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';

  const handlePay = async () =>{
  console.log("hello pay")

  const option = {
    amount : '1000',
    currency : 'INR'
  }

  const {data} = await axios.post('https://boat-clone-backend.onrender.com/userapp/payment/checkout',option, {
    headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
    
});

if(data.status==='SUCCESS'){
  alert("You will redirect to Payment Gateway")
  
     handleClearAll()
  
   }
   else
    return false;


  const options = {
    key:process.env.REACT_APP_RAZORPAY_API_ID,
    "amount": data.order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": 'Nitish Yadav',
    "description": "Test Transaction",
    "image": "https://avatars.githubusercontent.com/u/101405119?v=4",
    // "order_id": data.order.id, 
    "callback_url": "http://localhost:5001/userapp/payment/paymentVerify",
    "prefill": {
        "name":user.name,
        "email":user.email,
        "contact":user.phone
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
   var rzp1 = new window.Razorpay(options);
    rzp1.open();

}


const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input type = "text" placeholder='First name'/>
          <input type = "text" placeholder='Last name'/>
        </div>
        <input type = "email" placeholder='Email address'/>
        <input type = "text" placeholder='Street'/>
        <div className='multi-fields'>
          <input type = "text" placeholder='City'/>
          <input type = "text" placeholder='State'/>
        </div>
        <div className='multi-fields'>
          <input type = "text" placeholder='Zip Code'/>
          <input type = "text" placeholder='Country'/>
        </div>
        <input type = "text" placeholder='Phone'/>
      </div>
      <div className='place-order-right'>
      <div className='cart-total'>
                    <h2>Cart Totals</h2>
                    <div>
                    <div className='cart-total-details'>
                            <p>Subtotal</p>
                            <p>₹{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='cart-total-details'>
                            <p>Delivery Fee</p>
                            <p>₹{getTotalCartAmount()===0?0:5}</p>
                        </div>
                        <hr />
                        <div className='cart-total-details'>
                            <b>Total</b>
                            <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount() + 5}</b>
                        </div>
                    </div>
                    <button onClick={handlePay} >PROCEED TO PAYMENT</button>
                </div>
      </div>
    </form>
  )
}

export default PlaceOrder
