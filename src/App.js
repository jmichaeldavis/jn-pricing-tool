import './App.css';
import { PackageSelection } from './Views/PackageSelection';
import { PricingSelection } from './Views/PricingBreakdown';
import { useState } from 'react';

const quote = {
  packageType: "Basic",
  userTypes: {
    adminCount: 1,
    salesCount: 2,
    fieldCount: 5
  },

}

function App() {
  return (
    <>
      <PackageSelection />
      <PricingSelection />
    </>
  );
}

export default App;
