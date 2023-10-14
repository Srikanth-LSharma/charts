import React from 'react';
import BarChart from './containers/BarChartD3';
import InitialBarChart from './containers/BarChart';
import logo from './logo.svg';
import './App.css';
import { Grid } from '@mui/material';
import LineChart from './containers/LineChartStock';

function App() {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={6} sx={{ padding: "50px" }}>
          <BarChart />
        </Grid>
        <Grid item xs={6} sx={{ padding: "50px" }}>
          <LineChart />
        </Grid>
        <Grid item xs={6} sx={{ padding: "50px" }}>
          <InitialBarChart />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;