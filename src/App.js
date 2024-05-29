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
  const [crmPackage, setCrmPackage] = useState(null)
  const [engageCard, setEngageCard] = useState(null)
  const [adminCount, setAdminCount] = useState(0)
  const [salesCount, setSalesCount] = useState(0)
  const [fieldCount, setFieldCount] = useState(0)

  return (
    <>
      <PackageSelection 
        crmPackage={crmPackage}
        setCrmPackage={setCrmPackage}
        engageCard={engageCard}
        setEngageCard={setEngageCard}
        adminCount={adminCount}
        setAdminCount={setAdminCount}
        salesCount={salesCount}
        setSalesCount={setSalesCount}
        fieldCount={fieldCount}
        setFieldCount={setFieldCount}
      />
      <PricingSelection 
        crmPackage={crmPackage}
        engageCard={engageCard}
        adminCount={adminCount}
        salesCount={salesCount}
        fieldCount={fieldCount}
      />
    </>
  );
}

export default App;
