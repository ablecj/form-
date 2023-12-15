import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import BackButton from '../components/BackButton';

const EditUser = () => {

    const { id } = useParams();
    console.log(id,"userid")
    const initialFormData = {
      firstname: '',
      secondname: '',
      email: '',
      address: '',
    };
    const [formData, setFormData] = useState(initialFormData);
    console.log(formData,"form data")
  
    const fetchUserData = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/user/${id}`);
          setFormData(response.data); // Assuming the API response contains user data
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
    
      useEffect(() => {
        if (id) {
          fetchUserData();
        }
      }, [id]);
  
    useEffect(() => {
      fetchUserData();
    }, [id]);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const navigate = useNavigate();

    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
        await axios.put(`http://localhost:8000/user/${id}`, formData);
        console.log('User data updated:', formData);
        // Redirect or perform any necessary actions after saving the data
        navigate("/user")
      } catch (error) {
        console.error('Error updating user data:', error);
      }
    };

  return (
    <>
    <div className='mt-8 flex items-center justify-center'>
  <div className='w-1/2 px-2 '>
    {/* Your component goes here */}
    <BackButton />
  </div>
</div>
    
    <div className="flex items-center justify-center h-screen">
        
      <form onSubmit={handleFormSubmit} className="w-full max-w-md">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstname"
            >
              First Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstname"
              type="text"
              placeholder="Enter first name"
              name="firstname"
              value={formData.firstname}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="secondname"
            >
              Second Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="secondname"
              type="text"
              placeholder="Enter second name"
              name="secondname"
              value={formData.secondname}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter email address"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              placeholder="Enter address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
    </>
  )
}

export default EditUser
