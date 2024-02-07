import React, { useState } from 'react';
import img from '../assets/Group 1.png';
import {useNavigate} from 'react-router-dom';

const Calculate = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const navigate = useNavigate();

  const calculateBMI = () => {
    if (height && weight) {
        console.log(bmi);
      const bmiValue = (weight / ((height / 100) * (height / 100))).toFixed(2);
      setBMI(bmiValue);
      navigate('/result', { state: { bmiValue } });
    } else {
      setBMI(null);
    }
  };

  return (
    <div className='bg-gradient-to-b from-blue-200 via-gray-100 to-white'>
      <h1 className='pt-10 pl-5 font-semibold text-2xl md:text-left md:pl-20'>welcome 😄</h1>
      <h2 className='pl-5 pt-4 font-bold text-3xl md: text-center'>BMI Calculator</h2>
      <h2 className='text-center pt-10 text-4xl'>Check Your <span className='font-bold text-4xl'>BMI</span></h2>
      <label className='pl-5 text-3xl font-semibold'>
        <p className='pl-5 text-3xl font-semibold md: text-center'>Height (cm):</p>
      </label>
      <div className='mx-5 my-3 md:flex md:justify-center md:my-3'>
        <input className='text-2xl font-semibold border-2 border-black rounded-xl'
        placeholder='  eg.126'
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          />
          </div>

      <label className='my-3 text-3xl font-semibold'>
       <p className='pl-5 text-3xl font-semibold md:text-center'> Weight (kg):</p>
      </label>
      <div className='px-5 flex md:justify-center md:my-2'>
        <input className='text-2xl font-semibold border-2 border-black rounded-xl'
        placeholder='  eg.60'
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        />
        </div>
        <div>
          <p className='text-ellipsis text-nowrap mx-5 md:mx-20 md:my-5 my-5'>
          BMI, or Body Mass Index, is a measure that assesses body weight relative to height. It's commonly used to categorize individuals into different weight categories. Here are the typical weight categories based on BMI values:

Underweight: A BMI below 18.5 indicates that a person may be underweight. This can be a concern as it may suggest inadequate nutrition or underlying health issues.

Normal Weight: A BMI between 18.5 and 24.9 is considered within the normal weight range. Individuals in this category generally have a healthy weight for their height.

Overweight: A BMI between 25 and 29.9 indicates that a person may be overweight. This can increase the risk of various health issues, such as heart disease, diabetes, and high blood pressure.

Obese: A BMI of 30 or higher suggests obesity. This significantly increases the risk of developing serious health conditions, including cardiovascular diseases, certain cancers, and type 2 diabetes.

It's important to note that BMI is a general indicator and may not always accurately reflect an individual's overall health. Other factors such as muscle mass, bone density, and distribution of fat can also influence health outcomes. It's best to consult with a healthcare professional for personalized advice and assessment.
          </p>
        </div>
        <div className='flex justify-center my-10'>
      <button className='rounded-xl p-2 text-3xl font-semibold text-white bg-blue-500' onClick={calculateBMI}>Calculate BMI</button>
        </div>
        <div className='flex justify-end mt-16 pt-2'>
        <img src={img} alt='img' className='h-60 w-60'/>
        </div>
    </div>
  );
};

export default Calculate;
