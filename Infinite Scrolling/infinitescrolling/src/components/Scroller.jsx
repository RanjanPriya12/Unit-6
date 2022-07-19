
import React, { useState,useEffect } from 'react';
import axios from "axios";


export const Scroller = () => {
    let offset = 0;
    const [Data, setData] = useState([]);

    const getData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/todos?&_limit=${offset}`).then(({ data }) => {
            const newData = [];
            data.forEach((el) => {
                newData.push(el);
            });
            setData(newData);
            console.log(newData);
        });
        offset += 10;
    };

    const handleScroll = (e) => {
        if (window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight) {
            getData();
        }
    }


    useEffect(() => {
        getData()
        window.addEventListener('scroll', handleScroll);
    }, []);


    return (
        <div>
            {
                Data.map((el) => (
                    <p className='flex'>{el.id}-{el.title}</p>
                ))
            }
        </div>
    )
}
