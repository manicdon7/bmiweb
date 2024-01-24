// Result.js
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import img from '../assets/Group 1.png'

const Result = () => {
  const location = useLocation();
  const { state } = location;
  const { bmiValue } = state || {};

  let resultMessage = '';

  if (bmiValue) {
    if (bmiValue < 20) {
      resultMessage = "You are underweight";
    } else if (bmiValue >= 20 && bmiValue <= 24) {
      resultMessage = "You have normal weight";
    } else {
      resultMessage = "You are overweight";
    }
  }
  
  return (
      <div className='bg-gradient-to-b from-blue-200 via-gray-100 to-white'>
      <Link to="/" className='text-black pl-5 mt-10 font-bold text-2xl'>Back</Link>
        <div className='text-2xl text-left pt-10 pl-5 font-semibold text-blue-500 my-10'>
          Your BMI is: <br />
        </div>
      {bmiValue ? (
          <div>
          <div className='flex justify-center'>
          <p className='text-3xl text-black font-bold'>{resultMessage}</p>
          </div>
          <div className='pt-10 flex justify-center'>
            <span className='text-black text-center font-bold text-6xl'>{bmiValue}</span>
          </div>
          </div>
      ) : (
        <p>No BMI value found</p>
      )}
      <div className='flex justify-end mt-28 pt-32'>
        <img src={img} alt='img' className='h-60 w-60'/>
        </div>
    </div>
    
  );
};

export default Result;
