'use client'
import { useEffect, useState } from 'react';

export default function Page() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const data = await response.json();
                setProduct(data.products);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <h1>Product List</h1>
            {product.map((item, index) => (
                <table border='2px' cellpadding='10px'>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                    </tr>
                </table>
            
            ))}
        </>
    );
}
