import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const FetchData = ({ cat }) => {

    const [Data, setData] = useState(null);

    const fetchData = async () => {
        await axios
            .get(
                cat
                    ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=4fc1e250b8344cf19998fc20578896dd`
                    : "https://newsapi.org/v2/top-headlines?country=in&apiKey=4fc1e250b8344cf19998fc20578896dd"
            ).then((res) => {
                setData(res.data.articles);
            });
    };

    useEffect(() => {
        fetchData();
    }, [cat])


    return (
        <div className='container mx-auto my-4 min-h-screen'>
            <h3 className=' text-3xl font-bold uppercase underline'>
                TOP Headlines</h3>
            <div className='flex justify-center items-center flex-wrap my-3'>{Data ?
                Data.map((items, index) =>
                    <>
                        <div className='container m-2 p-3 w-[600px] shadow-lg bg-white rounded-lg'>
                            <h5 className='font-semibold text-lg my-2'>{items.title}</h5>
                            <div className='flex justify-center items-center'>
                                <img src={items.urlToImage} alt="img not found" className='container w-full h-[300px] object-cover' />
                            </div>
                            <p className='text-sm my-1'>{items.content}</p>
                            <a href={items.url} target='_blank' className='text-blue-500 text-sm underline'>View More</a>
                        </div>
                    </>
                ) : 'Loading...'}
            </div>
        </div>


    )
}

export default FetchData