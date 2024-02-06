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
      <h1 className='pt-10 pl-5 font-semibold text-2xl'>welcome 😄</h1>
      <h2 className='pl-5 pt-4 font-bold text-3xl'>BMI Calculator</h2>
      <h2 className='text-center pt-10 text-4xl'>Check Your <span className='font-bold text-4xl'>BMI</span></h2>
      <label className='pl-5 text-3xl font-semibold'>
        <p className='pl-5 text-3xl font-semibold'>Height (cm):</p>
      </label>
      <div className='mx-5 my-3'>
        <input className='text-2xl font-semibold border-2 border-black rounded-xl'
        placeholder='  eg.126'
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          />
          </div>

      <label className='my-3 text-3xl font-semibold'>
       <p className='pl-5 text-3xl font-semibold'> Weight (kg):</p>
      </label>
      <div className='px-5'>
        <input className='text-2xl font-semibold border-2 border-black rounded-xl'
        placeholder='  eg.60'
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        />
        </div>
        <div className='flex justify-center my-10'>
      <button className='rounded-xl p-2 text-3xl font-semibold text-white bg-blue-500' onClick={calculateBMI}>Calculate BMI</button>
        </div>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7877602362549451"
     crossorigin="anonymous"></script>
        <div className='flex justify-end mt-16 pt-2'>
        <img src={img} alt='img' className='h-60 w-60'/>
        </div>
    </div>
  );
};

export default Calculate;
