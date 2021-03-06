import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Details from '../Details/Details';
import './Friends.css'

const Friends = () => {

    //Data load kore rakar jonne state

    const [friends, setFriends] = useState([])

    //Cart a product rakhar jonne state

    const [cart, setCart] = useState([])

    //Load data

    useEffect(() => {
        fetch('./friends.JSON')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])

    // Button Handle function call

    const handleAddToCart = (friend) => {
        // console.log(friend?.taka)
        const newCart = [...cart, friend]
        setCart(newCart)
    }


    return (
        <div className="row">
            {/* Cart container */}

            <div className="col-mc-1">
                <Cart cart={cart}></Cart>
            </div>

            {/* friends container */}

            <div className="col-md-11">
                <div className=" row">
                    {/* <h3>Friends:{friends.length}</h3> */}
                    {/* Using map on friends array pass handleler function */}
                    {
                        friends.map(friend => <Details
                            key={friend.id}
                            details={friend}
                            handleAddToCart={handleAddToCart}
                        ></Details>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Friends;