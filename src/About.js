import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function About() {
    const [data, setData] = useState({ data: [] });
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://fortnite-api.theapinetwork.com/store/get',
            );
            setData(result.data);

        };
        fetchData();
    }, []);
    return (
        <div>
            {data.data.map(item => (
                <h3 key={item.itemId}>
                    <Link to={`/about/${item.itemId}`}>{item.item.name} : £{item.store.cost}</Link>
                </h3>

            ))}
            <Link to="/"><Button>Back</Button></Link>
        </div>
    );
}
export default About;