import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';

const DeleteUser = () => {

    const {id} = useParams();
    const navigate = useNavigate()
    const handleDelete = async()=>{
        try {
            await axios.delete(`http://localhost:8000/user/${id}`);
            navigate('/user');
        } catch (error) {
         console.log(error,"error")   
        }
    }


  return (
    <>
  
      <div className="flex items-center justify-start m-5 ">
        <BackButton />
      </div>
    <div className="flex items-center justify-center h-screen">
      <div className="p-4 bg-white shadow-md rounded">
        <h1 className="text-3xl mb-4">Delete User</h1>
        <p className="mb-4">Are you sure you want to delete this user?</p>
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Delete User
        </button>
      </div>
    </div>
    </>
  )
}

export default DeleteUser
