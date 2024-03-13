import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const FetchData = ({ cat }) => {

    const [Data, setData] = useState(null);

    const fetchData = async () => {
        await axios
            .get(
                cat
                    ? `https://gnews.io/api/v4/top-headlines?category=${cat}&lang=en&country=in&max=10&apikey=ff46992c1f613cb6dac59d0efb664bbc`
                    : "https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&max=10&apikey=ff46992c1f613cb6dac59d0efb664bbc"
            ).then((res) => {
                setData(res.data.articles);
            });
    };

    useEffect(() => {
        fetchData();
    }, [cat])


    return (
        <div className='container mx-auto my-4 min-h-screen'>
            <h3 className='text-3xl text-center md:text-4xl font-bold uppercase underline'>
                TOP Headlines</h3>
            <div className='flex justify-center items-center flex-wrap my-3'>{Data ?
                Data.map((items, index) =>
                    <>
                        <div className='container m-2 p-3 w-[600px] shadow-lg bg-white rounded-lg'>
                            <h5 className='font-semibold text-lg md:text-xl my-2'>{items.title}</h5>
                            <div className='flex justify-center items-center'>
                                <img src={items.image} alt="img not found" className='container w-full h-[300px] object-cover rounded-md ' />
                            </div>
                            <p className='text-xs md:text-sm my-1'>{items.content}</p>
                            <a href={items.url} target='_blank' className='text-blue-500 text-sm underline'>View More</a>
                        </div>
                    </>
                ) : 'Loading...'}
            </div>
        </div>


    )
}

export default FetchData