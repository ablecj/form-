import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai';
import {MdOutlineDelete} from 'react-icons/md';
import Spinner from '../components/Spinner';

const ListUser = () => {
    const [users, setUser] = useState([]);
    const [loader, setLoader]= useState(false);

    console.log(users,"user")
    useEffect(()=>{
        setLoader(true)
        axios.get('http://localhost:8000/user')
        .then((res)=>{
            setUser(res.data.data);
            setLoader(false)
        })
        .catch((error)=>{
            setLoader(false);
            console.log("Error",error.message);
        })
    },[])
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        {/* <Link>
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link> */}
      </div>
      {loader ? (
        <Spinner />
      ) : (
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">No</th>
              <th className="border border-slate-600 rounded-md">First Name</th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Second Name
              </th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Address
              </th>
              <th className="border border-slate-600 rounded-md">Operations</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="h-8">
                <td className="border border-slate-700 rounded-md text-center">
                  {index + 1}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {user.firstname}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {user.secondname}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {user.address}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/user/edit/${user._id}`}>
                      <AiOutlineEdit className="text-2xl text-yellow-600" />
                    </Link>
                    <Link to={`/user/delete/${user._id}`}>
                      <MdOutlineDelete className="text-2xl text-red-600" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
            
          </tbody>
        </table>
      )}
    </div>
  )
}

export default ListUser
