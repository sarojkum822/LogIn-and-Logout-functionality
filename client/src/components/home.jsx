import axios from 'axios';
import React, { useEffect, useState } from 'react'

const home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await axios.get("http://localhost:8080/findLoginUser",{
                    params:{name:"saroj"}
                });
                setData(res.data);
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            } catch (error) {
                setLoading(false);
                console.log("error", error);
            }
        };
        
        
            fetchData();
       
    }, []);
    
    console.log(data); 
    

    if(loading){
        return <h1>Loading ...</h1>
    }

    return (
        <>
               <div className='w-full h-20 bg-sky-400'>
                <h1 className='text-black text-3xl'>{
                    data.map((item,index)=>{
                       return <h1 key={index}>{item.name}</h1>
                    })
                }</h1>
               </div>
        </>
    )
}

export default home