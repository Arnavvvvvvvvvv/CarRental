import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import Title from '../../components/owner/Title'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const AddCar = () => {

  const {axios, currency, }= useAppContext();

  const [image, setImage]= useState(null)
  const [car, setCar]= useState({
    brand: '',
    model: '',
    year: 0,
    price_per_day: 0,
    category: '',
    transmission: '',
    fuel_type : '',
    seating_capacity: 0,
    location: '',
    description: '',
  })

  const [loading, setLoading]= useState(false);

  const onSubmitHandler = async(e) => {
    e.preventDefault()
    if(loading) return null; // Prevent multiple submissions
    setLoading(true);

    try {
      const formData= new FormData();
      formData.append('image', image);
      formData.append('carData', JSON.stringify(car));

      const {data}= await axios.post('/api/owners/add-car', formData);

      if(data.success){
        toast.success(data.message);
        setImage(null);
        setCar({
          brand: '',
          model: '',
          year: 0,
          price_per_day: 0,
          category: '',
          transmission: '',
          fuel_type : '',
          seating_capacity: 0,
          location: '',
          description: '',
        })
      } else{
        toast.error(data.message);
      }

    } catch (error) {
      toast.error(error.message);
    }
    finally{
      setLoading(false);
    }
  }

  return (
    <div className='px-4 py-10 md:px-10 flex-1'>
      <Title title={'Add New Car'} subTitle="Fill in the details for the new car you want to add" />

      <form onSubmit={onSubmitHandler} className='flex flex-col gap-5 text-gray-700 text-sm mt-6 max-w-xl'>
        <div className='flex items-center gap-3 w-full'>
          <label htmlFor="car-image">
            <img src={image? URL.createObjectURL(image): assets.upload_icon} alt="Car Image" className='h-24 rounded cursor-pointer' />
            <input type="file" accept="image/*" id="car-image" hidden onChange={(e) => setImage(e.target.files[0])} />
          </label>
          <p className='text-sm text-gray-500'>Upload a car image</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='flex flex-col w-full'>
            <label>Brand</label>
            <input type="text" placeholder='e.g. BMW, Mercedes, Audi' value={car.brand} onChange={(e) => setCar({...car, brand: e.target.value})} className='px-3 py-2 mt-1 border rounded-md outline-none' required />
          </div>
          <div className='flex flex-col w-full'>
            <label>Model</label>
            <input type="text" placeholder='e.g. X3, C-Class, A4' value={car.model} onChange={(e) => setCar({...car, model: e.target.value})} className='px-3 py-2 mt-1 border rounded-md outline-none' required />
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <div className='flex flex-col w-full'>
            <label>Year</label>
            <input type="number" placeholder='e.g. 2020, 2021, 2022' value={car.year} onChange={(e) => setCar({...car, year: parseInt(e.target.value)})} className='px-3 py-2 mt-1 border rounded-md outline-none' required />
          </div>
          <div className='flex flex-col w-full'>
            <label>Price per Day ({currency})</label>
            <input type="number" placeholder='e.g. 500, 1000, 1500' value={car.price_per_day} onChange={(e) => setCar({...car, price_per_day: parseFloat(e.target.value)})} className='px-3 py-2 mt-1 border rounded-md outline-none' required />
          </div>
          <div className='flex flex-col w-full'>
            <label>Category</label>
            <select value={car.category} onChange={(e) => setCar({...car, category: e.target.value})} className='px-3 py-2 mt-1 border rounded-md outline-none' required>
              <option value="">Select a category</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Hatchback">Hatchback</option>
            </select>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <div className='flex flex-col w-full'>
            <label>Transmission</label>
            <select value={car.transmission} onChange={(e) => setCar({...car, transmission: e.target.value})} className='px-3 py-2 mt-1 border rounded-md outline-none' required>
              <option value="">Select a transmission</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
              <option value="Semi-Automatic">Semi-Automatic</option>
            </select>
          </div>
          <div className='flex flex-col w-full'>
            <label>Fuel Type</label>
            <select value={car.fuel_type} onChange={(e) => setCar({...car, fuel_type: e.target.value})} className='px-3 py-2 mt-1 border rounded-md outline-none' required>
              <option value="">Select a fuel type</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
          <div className='flex flex-col w-full'>
            <label>Seating Capacity</label>
            <input type="number" placeholder='e.g. 4, 5, 7' value={car.seating_capacity} onChange={(e) => setCar({...car, seating_capacity: parseInt(e.target.value)})} className='px-3 py-2 mt-1 border rounded-md outline-none w-full' required />
          </div>
        </div>

        <div className='flex flex-col w-full'>
          <label>Location</label>
          <select name="location" id="location" value={car.location} onChange={(e) => setCar({...car, location: e.target.value})} className='px-3 py-2 mt-1 border rounded-md outline-none' required>
            <option value="">Select a location</option>
            <option value="Dwarka">Dwarka</option>
            <option value="Lajpat Nagar">Lajpat Nagar</option>
            <option value="Rajouri Garden">Rajouri Garden</option>
            <option value="Connaught Place">Connaught Place</option>
            <option value="Saket">Saket</option>
            <option value="Khan Market">Khan Market</option>
            <option value="Greater Kailash">Greater Kailash</option>
            <option value="Rohini">Rohini</option>
            <option value="Janakpuri">Janakpuri</option>
          </select>
        </div>

        <div className='flex flex-col w-full'>
          <label>Description</label>
          <textarea placeholder='Provide a brief description of the car' value={car.description} onChange={(e) => setCar({...car, description: e.target.value})} className='px-3 py-2 mt-1 border rounded-md outline-none w-full' rows={5} required></textarea>
        </div>

        <button className='flex items-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600  w-max mt-4 cursor-pointer' type='submit' disabled={loading}>
           { loading ? 'Adding Car...' : 'Add Car' }
        </button>

      </form>
      
    </div>
  )
}

export default AddCar
