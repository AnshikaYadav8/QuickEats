import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

export default function Home() {
    const [search, setSearch] = useState('');
    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const loadData = async () => {
        try {
            let response = await fetch("http://localhost:5000/api/foodData", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            response = await response.json();
            setFoodItem(response[0]);
            setFoodCat(response[1]);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <Navbar />
            <div> 
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner" id='carousel'>
                    <div className="carousel-caption" style={{ zIndex: "10" }}>
                        <div className="d-flex justify-content-center">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
                            {/*<button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/09/beef-burger.jpg" 
                            className="d-block w-100"
                            alt="Burger"
                            style={{ height: "500px", objectFit: "cover" }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.thespruceeats.com/thmb/UnVh_-znw7ikMUciZIx5sNqBtTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg"
                            className="d-block w-100"
                            alt="Momos"
                            style={{ height: "500px", objectFit: "cover" }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/1200px-Pizza-3007395.jpg"
                            className="d-block w-100"
                            alt="Pizza"
                            style={{ height: "500px", objectFit: "cover" }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
                </div>


            <div className="container mt-4">
                {foodCat.length > 0 ? (
                    foodCat.map((data) => (
                        <div key={data._id} className="mb-4">
                            <div className="fs-3 m-3">{data.CategoryName}</div>
                            <div className="row g-4">
                                {foodItem.length > 0 ? (
                                    foodItem
                                        .filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                                        .map((filterItems) => (
                                            <div key={filterItems._id} className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
                                                <Card 
                                                    foodItem={filterItems}
                                                    options={filterItems.options[0]} 
                                            
                                                />
                                            </div>
                                        ))
                                ) : (
                                    <div>No such data found.</div>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </div>
            <div className="d-flex justify-content-center container pb-5">
                <Footer />
            </div>
        </div>
    );
}

