import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import axios from 'axios';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function HomeScreen() {
    const [products, setProducts] = useState([]);
    //Show Loading
    const [loading, setLoading] = useState(false)
    //Show Error
    const [error, setError] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get('/api/products'); //array of data in backend transfers to frontend
                setLoading(false);
                setProducts(data);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }

        };
        fetchData();
    }, [])

    return (
        <div>
            {loading ? <LoadingBox></LoadingBox> :
                error ? <MessageBox variant="danger">{error}</MessageBox> :
                    <div className="row center">
                        {
                            products.map(product => (
                                <Product key={product._id} product={product}></Product>

                            ))}
                    </div>}

        </div>
    )
}
