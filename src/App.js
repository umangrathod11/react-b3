import React from 'react';
import "./styles.css";
import EmpTable from './components/EmpTable';
// import MemoisedDemo from './components/MemoisedDemo';
// import VowelsCount from './components/VowelsCount';

export default function App() {

  return (
    <div className="App">
      <h1>Date : June 16, 2023 </h1>
      {/* <VowelsCount /> */}
      {/* <MemoisedDemo /> */}
      <EmpTable />
    </div>
  );
}
