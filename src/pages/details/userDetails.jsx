import React, { useState } from 'react'
import './details.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function UserDetails() {
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [userdata, setuserdata] = useState({});
    const fetchSingleUser = async () =>{
        await axios.get(`https://dummyjson.com/users/${id}`)
        .then((res)=>{
            setIsLoading(false)
            console.log(res);
            setuserdata(res.data);
        })
        .catch((error)=>{
            setIsLoading(false);
            console.log(error);
            
        })
    }
    fetchSingleUser();
  return (
    <div className='container-fluid'>
     {
        isLoading == true?(
            <div className="row error">
            <div className="col-md-4 m-auto text-center">
                <img src="https://technometrics.net/wp-content/uploads/2020/11/loading-icon-animated-gif-19-1.gif" alt="" style={{width:'150px'}} />
            </div>
           </div>
        ):(
            <center>
            <h1>{userdata.username}</h1>
           </center>
        )
     }
    </div>
  )
}

export default UserDetails