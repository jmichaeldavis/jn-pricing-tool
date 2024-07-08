import './App.css';
import { PackageSelection } from './Views/PackageSelection';
import { PricingSelection } from './Views/PricingBreakdown';
import { ViewSelection } from './Views/ViewSelection';
import { SubscriptionBreakdown } from './Views/SubscriptionBreakdown';
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
  const goToNextPage = () => {setPage('next');};
  const goToFirstPage = () => {setPage('first');};
  const [page, setPage] = useState('first');
  const [annualView, setAnnualView] = useState(true)
  const [sixMonthView, setSixMonthView] = useState(true)
  const [monthlyView, setMonthlyView] = useState(true)
  const [crmPackage, setCrmPackage] = useState(null)
  const [engageCard, setEngageCard] = useState(null)
  const [adminCount, setAdminCount] = useState(1)
  const [salesCount, setSalesCount] = useState(1)
  const [fieldCount, setFieldCount] = useState(1)
  return (
  <> 
   {page === 'first' && 
      <ViewSelection
        goToNextPage={goToNextPage}
        annualView={annualView}
        setAnnualView={setAnnualView}
        sixMonthView={sixMonthView}
        setSixMonthView={setSixMonthView}
        monthlyView={monthlyView}
        setMonthlyView={setMonthlyView}
      />}
   {page === 'next' && 
   <>
      <PackageSelection 
        goToFirstPage={goToFirstPage}
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
        annualView={annualView}
        sixMonthView={sixMonthView}
        monthlyView={monthlyView}
      />
      <SubscriptionBreakdown 
        crmPackage={crmPackage}
        engageCard={engageCard}
        adminCount={adminCount}
        salesCount={salesCount}
        fieldCount={fieldCount}
      />
    </> }
  </>
  );
}

export default App;
