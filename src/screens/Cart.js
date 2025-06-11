import React from 'react';
import { useCart, useDispatchCart } from '../components/ContextReducer';

export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div>
        <div className='text-white m-5 w-100 text-center fs-3'>🛒 The Cart is Empty!</div>
      </div>
    )
  }

  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  };

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");

    try {
        let response = await fetch("http://localhost:5000/api/auth/orderData", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                order_data: data,
                email: userEmail,
                order_date: new Date().toDateString()
            })
        });

        console.log("JSON RESPONSE:::::", response.status);

        if (response.status === 200) {
            dispatch({ type: "DROP" });
            alert('Order placed successfully');
        } else {
            alert('Error placing order');
        }
    } catch (error) {
        console.error('Error during checkout:', error);
        alert('An error occurred. Please try again.');
    }
  }

  let totalPrice = data.reduce((total, food) => total + food.price, 0)

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.size}</td>
              <td>{item.qty}</td>
              <td>₹{item.price}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemove(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div><h1 className='text-white fs-2'>Total Price: ₹{totalPrice}/-</h1></div>
      {/*
      <div>
        <button className='btn bg-success mt-5' onClick={handleCheckOut}>Check Out</button>
      </div>
      */}
    </div>
  );
}
