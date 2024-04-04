// import React, { useState } from 'react';
// import axios from 'axios';

// const WasteForm = () => {
//   const [formData, setFormData] = useState({
//     formOfWaste: '',
//     typeOfWaste: '',
//     volume: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Send the form data to the backend
//       const response = await axios.post('http://your-api-endpoint.com/submit-waste-data', formData);
//       console.log(response.data);
//       // Reset the form state after successful submission
//       setFormData({
//         formOfWaste: '',
//         typeOfWaste: '',
//         volume: '',
//       });
//       alert('Data submitted successfully!');
//     } catch (error) {
//       console.error('Error submitting waste data:', error);
//       alert('An error occurred while submitting the data.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="w-64 bg-white p-4 rounded shadow-md">
//       <div className="mb-2">
//         <label className="block text-gray-700 font-bold mb-1">
//           Form of Waste:
//           <select
//             name="formOfWaste"
//             value={formData.formOfWaste}
//             onChange={handleChange}
//             required
//             className="w-full bg-gray-200 border border-gray-300 text-gray-700 py-1 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//           >
//             <option value="">Select</option>
//             <option value="wet">Wet</option>
//             <option value="dry">Dry</option>
//             <option value="damp">Damp</option>
//           </select>
//         </label>
//       </div>
//       <div className="mb-2">
//         <label className="block text-gray-700 font-bold mb-1">
//           Type of Waste:
//           <select
//             name="typeOfWaste"
//             value={formData.typeOfWaste}
//             onChange={handleChange}
//             required
//             className="w-full bg-gray-200 border border-gray-300 text-gray-700 py-1 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//           >
//             <option value="">Select</option>
//             <option value="biodegradable">Biodegradable Waste</option>
//             <option value="non-biodegradable">Non-Biodegradable Waste</option>
//             <option value="e-waste">Electronic Waste (e-Waste)</option>
//             <option value="industrial">Industrial Waste</option>
//             <option value="biomedical">Biomedical Waste</option>
//             <option value="radioactive">Radioactive Waste</option>
//           </select>
//         </label>
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 font-bold mb-1">
//           Volume:
//           <select
//             name="volume"
//             value={formData.volume}
//             onChange={handleChange}
//             required
//             className="w-full bg-gray-200 border border-gray-300 text-gray-700 py-1 px-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//           >
//             <option value="">Select</option>
//             <option value="small">Small (&lt;10Kg)</option>
//             <option value="medium">Medium (&lt;20Kg)</option>
//             <option value="large">Large</option>
//           </select>
//         </label>
//       </div>
//       <div className="flex items-center justify-between">
//         <button
//           type="submit"
//           className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Submit
//         </button>
//       </div>
//     </form>
//   );
// };

// export default WasteForm;
import React from 'react';

const WasteSolutionForm = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center">Choose Your Waste Solution</h2>
        <div className="mb-6">
          <button className="block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg">
            For Business & Organizations
          </button>
        </div>
        <div className="mb-6">
          <button className="block w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded-lg">
            For Your Home
          </button>
        </div>
        <form>
          <div className="mb-6">
            <input className="block w-full bg-gray-200 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Address" />
          </div>
          <div className="mb-6 flex flex-wrap">
            <div className="w-full md:w-1/2 md:pr-3 mb-6 md:mb-0">
              <input className="block w-full bg-gray-200 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Name" />
            </div>
            <div className="w-full md:w-1/2 md:pl-3">
              <input className="block w-full bg-gray-200 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="mb-6">
            <input className="block w-full bg-gray-200 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Phone" />
          </div>
          <div className="mb-6">
            <input className="block w-full bg-gray-200 text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="email" placeholder="Email" />
          </div>
          <div className="mb-6">
            <label className="flex items-center">
              <input className="mr-2 leading-tight" type="checkbox" />
              <span className="text-sm">
                I agree to the Waste Connections <a href="#" className="text-blue-500">Terms of Service</a> and <a href="#" className="text-blue-500">Privacy Policy</a>
              </span>
            </label>
          </div>
          <div className="flex justify-center">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline" type="button">
              See available services
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WasteSolutionForm;
