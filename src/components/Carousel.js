import React from 'react';

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner" id='carousel'>
                    <div className="carousel-caption" style={{ zIndex: "10" }}>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                        </form>
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
    );
}
