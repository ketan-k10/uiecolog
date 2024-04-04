

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

// Assuming you have an API endpoint that returns this data
const API_URL = 'http://your-api-endpoint.com/waste-data';

const Dashboard = () => {
  const [wasteData, setWasteData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setWasteData(response.data);
      } catch (error) {
        console.error('Error fetching waste data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Waste Management Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <WasteGraph wasteData={wasteData} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <WastePieChart wasteData={wasteData} />
          </div>
          <div>
            <WasteFormPieChart wasteData={wasteData} />
          </div>
        </div>
        <div>
          <WasteStats wasteData={wasteData} />
        </div>
      </div>
    </div>
  );
};

const WasteGraph = ({ wasteData }) => {
  // Implement your graph component here
  return <div>Waste Graph</div>;
};

const WastePieChart = ({ wasteData }) => {
  // Prepare data for the pie chart
  const wasteTypeData = {
    labels: ['Biodegradable', 'Non-Biodegradable'],
    datasets: [
      {
        data: [50, 50], // Example data
        backgroundColor: ['#4caf50', '#f44336'],
      },
    ],
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Waste by Type</h2>
      <Doughnut data={wasteTypeData} />
    </div>
  );
};

const WasteFormPieChart = ({ wasteData }) => {
  // Prepare data for the pie chart
  const wasteFormData = {
    labels: ['Wet', 'Dry', 'Damp'],
    datasets: [
      {
        data: [30, 40, 30], // Example data
        backgroundColor: ['#ffeb3b', '#2196f3', '#9c27b0'],
      },
    ],
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Waste by Form</h2>
      <Doughnut data={wasteFormData} />
    </div>
  );
};

const WasteStats = ({ wasteData }) => {
  // Calculate stats based on the data
  const recycledWaste = 0; // Example calculation
  const environmentContribution = 0; // Example calculation
  const earnings = 0; // Example calculation

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Statistics</h2>
      <div>Recycled Waste: {recycledWaste}</div>
      <div>Environment Contribution: {environmentContribution}</div>
      <div>Earnings: {earnings}</div>
    </div>
  );
};

export default Dashboard;