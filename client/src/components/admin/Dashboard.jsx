import React, { useState, useEffect } from 'react'
import cover from "../../assets/images/vector.jpg"
import axios from "axios"
import { IoEyeSharp } from "react-icons/io5";
import { AiTwotoneLike } from "react-icons/ai";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();
    const [blogData, setBlogData] = useState([]);

    const getBlogData = async () => {
        try {
            const result = await axios.get('http://localhost:3000/myblog')
            setBlogData(result.data.data)
            console.log(result.data.data)
        } catch (error) {
            console.log("error", error)
        }

    };

    useEffect(() => {
        getBlogData();
    }, []);

    const convertView = (views) => {
        let numView = 0;
        if (views >= 1000) {
            numView = views / 1000
        } else {
            numView = views
        }
        return numView;
    }

    return (
        <div>
            {/* Greeting message */}
            <div className="bg-[#F2C94C] rounded-xl p-4 flex w-full h-fit justify-between">
                <div className="basis-3/5">
                    <h2 className='font-bold text-4xl text-[#232946]'>Hello Sarah!</h2>
                    <p className='my-3 text-[#232946] text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, beatae? typesetting industry</p>

                    <button className="bg-[#232946] text-[#EEBBC3] mt-2 px-3 py-2 text-base rounded-lg hover:bg-black dark:hover:bg-gray-700 group" onClick={() => navigate("/createPost")}>Write new post</button>

                </div>
                {/* Image part */}
                <div className='basis-2/5'>
                    <img src={cover} alt="" className="m-auto" width={200} height={200} />
                </div>
            </div>
            {/* Blog Content */}
            <section className='mt-3 p-4 bg-[#F4F6FF]'>
                <h3 className='text-2xl font-bold'>Top Articles</h3>
                {/* map */}
                {
                    blogData.map((item) => {
                        return (
                            <div key={item.id} className='my-12 flex items-start justify-center text-lg gap-5 text-[#232946]'>
                                <div className='basis-3/5 flex items-start justify-start space-x-5'>
                                    <p>0{item.id}</p>
                                    <img src={item.imageContent} alt="" width={110} height={110} className='rounded-xl' />
                                    <h2 className='mt-1'>{item.topic}</h2>
                                </div>
                                <div className='basis-2/5'>
                                    <div className='flex items-start justify-start'>
                                        <span className='flex items-center justify-center basis-1/3 gap-2'><IoEyeSharp className='w-7 h-7' />{convertView(item.watch)} k</span>
                                        <span className='flex items-center justify-center basis-1/3 gap-2'><AiTwotoneLike className='w-7 h-7' />{convertView(item.likes)} k</span>
                                        <span className='flex items-center justify-center basis-1/3 gap-2'><FaMoneyCheckAlt className='w-7 h-7' />{item.price} $</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default Dashboard