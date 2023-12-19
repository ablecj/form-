// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData, updateUser } from '../redux/UserSlice';
import BackButton from '../components/BackButton';

const EditUser = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.user.userData);

    const initialFormData = {
      firstname: '',
      secondname: '',
      email: '',
      address: '',
    };
    const [formData, setFormData] = useState(initialFormData);
  
    useEffect(() => {
    dispatch(fetchUserData(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (userData) {
      setFormData(prevFormData => ({
        ...prevFormData,
        firstname: userData.firstname || '',
        secondname: userData.secondname || '',
        email: userData.email || '',
        address: userData.address || '',
      }));
    }
  }, [userData]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await dispatch(updateUser({ id, formData }));
    dispatch(fetchUserData(id)); 
    navigate('/user');
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
