
import React, { useState } from 'react'
import './home.css'
import axios from 'axios';

function AllUsers() {
    const [alluser, setAllusers] = useState([]); //to store the adta from the server
    const [isLoading, setisLoading] = useState(true);

    const fetchuserData = async() =>{
        axios.get('https://dummyjson.com/users')
        .then((responce)=>{
            setisLoading(false);
            console.log(responce.data.users);
            setAllusers(responce.data.users)
        })
        .catch((error)=>{
            setisLoading(false);
            console.log(error);
        })
        
        
    }
    fetchuserData();
  return (
    <section className="container-fluid bg-white">
       {
        isLoading ==true?(
           <div className="row error">
            <div className="col-md-4 m-auto text-center">
                <img src="https://technometrics.net/wp-content/uploads/2020/11/loading-icon-animated-gif-19-1.gif" alt="" style={{width:'150px'}} />
            </div>
           </div>
        ):(

            <table className='  mt-4' align='center'>
            <tr>
                <th>SI.No</th>
                <th>Username</th>
                <th>Age</th>
                <th>Color</th>
                <th>Email</th>
                <th>Phoner</th>
                <th>Gender</th>
                <th>Actions</th>
            </tr>
            {
                alluser.map((item, index)=>(
                    <tr>
                        <td>{index+1}</td>
                        <td>{item.username}</td>
                        <td>{item.age}</td>
                        <td><div className="color" style={{background:item.hair.color}}></div></td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.gender}</td>
                        <td><a href="/" className='btn text-primary'>View Details</a></td>
                    </tr>
                ))
            }
        </table>
        )
       }
    </section>
  )
}

export default AllUsers