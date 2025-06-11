import React, { useState, useEffect, useRef } from "react";
import { useDispatchCart, useCart } from './ContextReducer';
export default function Card(props) {

    let dispatch = useDispatchCart();
    let data = useCart()
    const priceRef = useRef();
    let options = props.options || {};
    let priceOptions = Object.keys(options);
    const [qty, setQty] = useState(1)
    const [size, setSize] = useState("")
    
    const handleAddToCart = async () => {

        let food = []
        for (const item of data) {
            if (item.id === props.foodItem._id) {
                food = item;
                break;
            }
        }
        if (food.length > 0) {
            if (food.size === size) {
                await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty:qty })
                return
            }
            else if (food.size !== size) {
                await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
                return
            }//console.log(data)
            return
        }
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
   
    }

    let finalPrice = qty * parseInt(options[size]);
    useEffect(() => {
        setSize(priceRef.current.value)
    }, [])

    return (
        <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px", overflow: "hidden" }}>
            <img
                src={props.foodItem.img}
                className="card-img-top"
                alt="Food Image"
                style={{ height: "150px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{props.foodItem.name}</h5>

                <div className="d-flex flex-column align-items-center">
                    <div className="d-flex justify-content-between w-100">
                        <select className="bg-success rounded p-1" style={{ width: "45%", fontSize: "0.8rem" }} onChange={(e) => setQty(e.target.value)} >
                            {Array.from(Array(6), (_, i) => (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            ))}
                        </select>
                        <select className="bg-success rounded p-1" ref={priceRef} style={{ width: "45%", fontSize: "0.8rem" }} onChange={(e) => setSize(e.target.value)}>
                            {priceOptions.map((data) => {
                                return <option key={data} value={data}>{data}</option>
                            })}
                        </select>
                    </div>

                    <div className="mt-2 text-center w-100" style={{ fontSize: "0.9rem" }}>
                        ₹{finalPrice}/-
                    </div>
                </div>
                <hr></hr>

                <button
                    className="btn btn-success w-auto ms-2"
                    onClick={(e) => {
                        handleAddToCart();
                        e.target.blur();
                    }}>
                    Add to Cart
                </button>

            </div>
        </div>
    );
}








