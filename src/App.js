import React, { useState } from 'react';
import { Box, Flex, Heading, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { useDispatch } from 'react-redux';
import toastr from 'toastr'
import 'toastr/build/toastr.min.css';
import { getDashboardData } from './redux/adminSlice';
const Charts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedChart, setSelectedChart] = useState(null);
  
React.useEffect(()=>{
fetchNow();
},[])
const dispatch=useDispatch();
const [totalJobsData,settotalJobsData]=React.useState([])
const [jobsByCompanyData,setjobsByCompanyData]=React.useState([])
const [pieChartData ,setpieChartData ]=React.useState([])
const fetchNow=async()=>{
  let res=await dispatch(getDashboardData())
  
  if(getDashboardData.rejected.match(res)){
console.log(res)
    toastr.error(res?.payload?.error)
  }
  if(getDashboardData.fulfilled.match(res)){
    console.log("RES")
    console.log(res)
    settotalJobsData(res?.payload?.pibi?.month)
    setjobsByCompanyData(res?.payload?.pibi?.company)
    const renamedJobs = res?.payload?.pibi?.company?.map(job => ({
      ...job,
      value: job.jobs // Rename the `name` property to `value`
    }));
  console.log("RENAMED")
  console.log(renamedJobs)
    setpieChartData(renamedJobs)
  }
}



  

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  const handleChartClick = (chart) => {
    setSelectedChart(chart);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box p={8} overflowX="auto">
      <Flex direction="column" alignItems="center">
        <Heading mb={4}>Total Jobs Over Time</Heading>
        <ResponsiveContainer width="80%" height={400}>
          <LineChart data={totalJobsData}>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid stroke="#f5f5f5" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="jobs" stroke="#ff7300" />
          </LineChart>
        </ResponsiveContainer>
      </Flex>
      <Flex direction="column" alignItems="center" mt={8}>
        <Heading mb={4}>Jobs Posted by Company</Heading>
        <ResponsiveContainer width="80%" height={400}>
          <BarChart data={jobsByCompanyData}>
            <XAxis dataKey="company" />
            <YAxis />
            <CartesianGrid stroke="#f5f5f5" />
            <Tooltip />
            <Legend />
            <Bar dataKey="jobs" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </Flex>
      <Flex direction="column" alignItems="center" mt={8}>
        <Heading mb={4}>Distribution of Jobs by Company</Heading>
        <ResponsiveContainer width="80%" height={400}>
          <PieChart>
            <Pie
              data={pieChartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={150}
              fill="#8884d8"
              label
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Flex>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedChart}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedChart === 'Total Jobs Over Time' && (
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={totalJobsData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <CartesianGrid stroke="#f5f5f5" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="jobs" stroke="#ff7300" />
                </LineChart>
              </ResponsiveContainer>
            )}
            {selectedChart === 'Jobs Posted by Company' && (
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={jobsByCompanyData}>
                  <XAxis dataKey="company" />
                  <YAxis />
                  <CartesianGrid stroke="#f5f5f5" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="jobs" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            )}
            {selectedChart === 'Distribution of Jobs by Company' && (
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={pieChartData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                    fill="#8884d8"
                    label
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Charts;
