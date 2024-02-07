import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import img from '../assets/Group 1.png';

const Result = () => {
  const location = useLocation();
  const { state } = location;
  const { bmiValue } = state || {};

  let resultMessage = '';
  let nutrientTips = '';

  if (bmiValue) {
    if (bmiValue < 20) {
      resultMessage = "You are underweight";
      nutrientTips = (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-lg font-semibold mb-3">Nutrient Tips:</p>
            <ul className="list-disc list-inside">
              <li>Increase calorie intake with nutrient-dense foods like nuts, seeds, avocados, and healthy oils.</li>
              <li>Include protein-rich foods like lean meats, poultry, fish, beans, and lentils to help build muscle mass.</li>
              <li>Incorporate healthy carbohydrates from whole grains, fruits, and vegetables to provide energy.</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-lg font-semibold mb-3">Health Tip:</p>
            <p>Consult a registered dietitian for personalized dietary recommendations to achieve a healthy weight.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-lg font-semibold mb-3">Interesting Fact:</p>
            <p>The concept of BMI was developed by Belgian mathematician Adolphe Quetelet in the 19th century.</p>
          </div>
        </div>
      );
    } else if (bmiValue >= 20 && bmiValue <= 24) {
      resultMessage = "You have normal weight";
      nutrientTips = (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-lg font-semibold mb-3">Nutrient Tips:</p>
            <ul className="list-disc list-inside">
              <li>Maintain a balanced diet with a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats.</li>
              <li>Focus on portion control and mindful eating to sustain a healthy weight.</li>
              <li>Stay hydrated by drinking plenty of water throughout the day.</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-lg font-semibold mb-3">Fitness Tip:</p>
            <p>Incorporate strength training exercises along with cardiovascular activities to improve overall fitness.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-lg font-semibold mb-3">Did You Know:</p>
            <p>Muscle tissue burns more calories at rest compared to fat tissue, contributing to a higher metabolic rate.</p>
          </div>
        </div>
      );
    } else {
      resultMessage = "You are overweight";
      nutrientTips = (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-lg font-semibold mb-3">Nutrient Tips:</p>
            <ul className="list-disc list-inside">
              <li>Reduce calorie intake by limiting processed foods, sugary snacks, and high-fat foods.</li>
              <li>Increase physical activity with regular exercise such as walking, jogging, cycling, or strength training.</li>
              <li>Include more fiber-rich foods like fruits, vegetables, whole grains, and legumes to promote satiety and aid in weight management.</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-lg font-semibold mb-3">Fitness Tip:</p>
            <p>Engage in regular aerobic exercises to burn calories and improve cardiovascular health.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-lg font-semibold mb-3">Health Tip:</p>
            <p>Consult a healthcare professional for personalized advice on weight management and lifestyle changes.</p>
          </div>
        </div>
      );
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
          {nutrientTips}
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
