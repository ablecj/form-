// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const PhonePicker = () => {
    // useState for the phone number
    const [phoneNumber, setPhoneNumber] = useState('');
    const [valid, setValid] = useState(true);
    console.log("phon no: ",phoneNumber);
    console.log("valid",valid);

    const handlechangePhone =(value)=>{
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value));
    }

    const validatePhoneNumber =(phoneNumber)=>{
        const phoneNumberPattern = /^\+?\d{10,14}$/;
        return phoneNumberPattern.test(phoneNumber);
    }

  return (
    <div className='mt-2'>
            <PhoneInput 
            country={'us'}
            value={phoneNumber}
            onChange={handlechangePhone}
            inputProps={{required: true }}
            />
        {!valid && (<p className='text-red-500 text-sm font-thin'>* Please enter the valid phone number</p>)}
    </div>
  )
}

export default PhonePicker