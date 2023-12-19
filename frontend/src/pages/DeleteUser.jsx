// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import {useDispatch, useSelector} from 'react-redux';
import { deleteUser, fetchUsers } from '../redux/UserSlice';

const DeleteUser = () => {

    const {id} = useParams();
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const users = useSelector(state=> state.user.users);

    const handleDelete = async()=>{
      dispatch(deleteUser(id)); 
      navigate('/user');
    }

    useEffect(()=>{
      // fetch the users after deletion
      dispatch(fetchUsers());
    },[dispatch]);

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
