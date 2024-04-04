import React, { useState } from 'react';
import axios from 'axios';

const Forminput = () => {
  const [formData, setFormData] = useState({
    formOfWaste: '',
    typeOfWaste: '',
    volume: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the form data to the backend
      const response = await axios.post('http://your-api-endpoint.com/submit-waste-data', formData);
      console.log(response.data);
      // Reset the form state after successful submission
      setFormData({
        formOfWaste: '',
        typeOfWaste: '',
        volume: '',
      });
      alert('Data submitted successfully!');
    } catch (error) {
      console.error('Error submitting waste data:', error);
      alert('An error occurred while submitting the data.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-64 bg-white p-4 rounded shadow-md">
      <div className="mb-2">
        <label className="block text-gray-700 font-bold mb-1">
          Form of Waste:
          <select
            name="formOfWaste"
            value={formData.formOfWaste}
            onChange={handleChange}
            required
            className="w-full bg-gray-200 border border-gray-300 text-gray-700 py-1 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="">Select</option>
            <option value="wet">Wet</option>
            <option value="dry">Dry</option>
            <option value="damp">Damp</option>
          </select>
        </label>
      </div>
      <div className="mb-2">
        <label className="block text-gray-700 font-bold mb-1">
          Type of Waste:
          <select
            name="typeOfWaste"
            value={formData.typeOfWaste}
            onChange={handleChange}
            required
            className="w-full bg-gray-200 border border-gray-300 text-gray-700 py-1 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="">Select</option>
            <option value="biodegradable">Biodegradable Waste</option>
            <option value="non-biodegradable">Non-Biodegradable Waste</option>
            <option value="e-waste">Electronic Waste (e-Waste)</option>
            <option value="industrial">Industrial Waste</option>
            <option value="biomedical">Biomedical Waste</option>
            <option value="radioactive">Radioactive Waste</option>
          </select>
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-1">
          Volume:
          <select
            name="volume"
            value={formData.volume}
            onChange={handleChange}
            required
            className="w-full bg-gray-200 border border-gray-300 text-gray-700 py-1 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="">Select</option>
            <option value="small">Small (&lt;10Kg)</option>
            <option value="medium">Medium (&lt;20Kg)</option>
            <option value="large">Large</option>
          </select>
        </label>
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Forminput;
