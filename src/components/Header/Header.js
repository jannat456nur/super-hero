import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
                <div className="container-fluid">
                    <p className="navbar-brand" href="#">Home</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <p className="nav-link active" aria-current="page" href="#">Plans</p>

                            </li>
                            <li className="nav-item">
                                <p className="nav-link active" aria-current="page" href="#">Top Spots</p>

                            </li>
                            <li className="nav-item">
                                <p className="nav-link active" aria-current="page" href="#">Badget</p>

                            </li>



                        </ul>
                        <form className="d-flex flex-fill mx-5">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-secondary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

            <h1 className="fs-1 fw-bold text-white px-3"><i className="fas fa-bus"></i> Get toggether </h1>
            <h3 className="text-white px-3">Total Badget 5500 <i className="fas fa-dollar-sign" /> Taka </h3>
            <p className="fw-light text-white px-3 pt-0"> Total Friends 15</p>

        </div>
    );
};

export default Header;