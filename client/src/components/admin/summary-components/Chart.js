import React from 'react'
import styled from 'styled-components';
// import  { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {
    const data = [
        {
          month: 'August',
         amount: 2000,
         events:6,
         members:20,
   
        },
        {
          month: 'July',
          amount: 5000,
          events:5,
          members:20,
        },
        {
          month: 'September',
         amount:6000,
         events:300,
         members:20,
        },
        {
            month: 'October',
           amount:500,
           events:400,
           members:20,
          },
          {
            month: 'November',
           amount:3000,
           events:400,
           members:20,
          },
          {
            month: 'Décember',
           amount:6000,
           events:400,
           members:20,
          },
      ];
  return (
    <StyledChart>
        <h3>Last 6 Months Earnings(eur €)</h3>
        <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day " />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="amount" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="events" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </StyledChart>
  )
}

export default Chart

const StyledChart = styled.div`
width:100%;
height:300px;
margin-top:2rem;
padding:1rem;
border:2px solid rgba(48,51,78,0.2);
border-radius:5px;
h3{
    margin-bottom:1rem;
}
`;
// const Loader = styled.p`
// margin-bottom:1rem;
// `;
