import {
  PackageSelectionContainer,
  JobNimbusLogo,
  PageTitle,
  Bubble,
  BubbleText,
  RowContainer,
  RowTitle,
  BaseCrmCard,
  CardCost,
  TitleContainer,
  BaseCrmCardHeader,
  BaseCrmCardSubHeader,
  BaseCrmCardFooter,
  PackageDetailsContainer,
  BaseCrmCardPackageDetailsHeader,
  BaseCrmCardPackageDetails,
  EngageCard,
  EngageCardHeader,
  EngageCardSubHeader,
  EngageCardPackageDetailsHeader,
  EngageCardPackageDetails,
  UserTypeSelectionContainer,
  UserTypeCard,
  UserTitleContainer,
  UserTypeCardHeader,
  UserTypeCardSubHeader,
  UserTypeCounterContainer,
  UserTypeCounter,
  UserTypeRightContainer,
  UserTypeCardButtonContainer,
  UserTypeCardButton,
} from "./styles";

export const PackageSelection = ({
  crmPackage,
  setCrmPackage,
  engageCard,
  setEngageCard,
  adminCount,
  setAdminCount,
  salesCount,
  setSalesCount,
  fieldCount,
  setFieldCount,
}) => {

  return (
    <PackageSelectionContainer>
      <JobNimbusLogo src={require('../../Assets/JNLogo.png')} />
      <PageTitle>Pricing Calculator</PageTitle>
      <RowContainer>
        <RowTitle>CRM Package</RowTitle>
        <BaseCrmCard
          onClick={() => crmPackage === "growing" ? setCrmPackage(null) : setCrmPackage("growing")}
          selected={crmPackage === "growing"}
        >
          <Bubble 
            selected={crmPackage === "growing"}          
          >
            <BubbleText>Recommended</BubbleText>
          </Bubble>
          <TitleContainer>
            <CardCost>$199/month</CardCost>
            <BaseCrmCardHeader>Growing</BaseCrmCardHeader>
            <BaseCrmCardSubHeader>Single-location Business</BaseCrmCardSubHeader>
          </TitleContainer>
          <PackageDetailsContainer>
            <BaseCrmCardPackageDetailsHeader>Limited Features</BaseCrmCardPackageDetailsHeader>
            <BaseCrmCardPackageDetails>Up to 5 integrations</BaseCrmCardPackageDetails>
          </PackageDetailsContainer>
          <BaseCrmCardFooter>Standard Onboarding</BaseCrmCardFooter>
        </BaseCrmCard>
        <BaseCrmCard
          onClick={() => crmPackage === "established" ? setCrmPackage(null) : setCrmPackage("established")}
          selected={crmPackage === "established"}
        >
          <Bubble 
            selected={crmPackage === "established"}          
          >
            <BubbleText>Recommended</BubbleText>
          </Bubble>
          <TitleContainer>
            <CardCost>$499/month</CardCost>
            <BaseCrmCardHeader>Established</BaseCrmCardHeader>
            <BaseCrmCardSubHeader>Run Multi-locations or Businesses</BaseCrmCardSubHeader>
          </TitleContainer>
          <PackageDetailsContainer>
            <BaseCrmCardPackageDetailsHeader>Features</BaseCrmCardPackageDetailsHeader>
            <BaseCrmCardPackageDetails>Unlimited integrations</BaseCrmCardPackageDetails>
            <BaseCrmCardPackageDetails>Access to Open API Documentation</BaseCrmCardPackageDetails>
          </PackageDetailsContainer>
          <BaseCrmCardFooter>Eligible for Account Manager $750+</BaseCrmCardFooter>
        </BaseCrmCard>
      </RowContainer>
      <RowContainer>
      <RowTitle>Texting Package</RowTitle>
        <EngageCard
          onClick={() => engageCard === "starter" ? setEngageCard(null) : setEngageCard("starter")}
          selected={engageCard === "starter"}
        >
          <Bubble 
            selected={engageCard === "starter"}          
          >
            <BubbleText>Recommended</BubbleText>
          </Bubble> 
          <TitleContainer>
            <CardCost>$49/month</CardCost>      
            <EngageCardHeader>Starter</EngageCardHeader>
            <EngageCardSubHeader>Ideal for up to 4 lines</EngageCardSubHeader>
          </TitleContainer>
          <PackageDetailsContainer>
            <EngageCardPackageDetailsHeader>Features</EngageCardPackageDetailsHeader>
            <EngageCardPackageDetails>200 credits included per month</EngageCardPackageDetails>
            <EngageCardPackageDetails>$0.10/additional credit</EngageCardPackageDetails>
          </PackageDetailsContainer>
        </EngageCard>
        <EngageCard
          onClick={() => engageCard === "premium" ? setEngageCard(null) : setEngageCard("premium")}
          selected={engageCard === "premium"}
        >
          <Bubble 
            selected={engageCard === "premium"}          
          >
            <BubbleText>Recommended</BubbleText>
          </Bubble>
          <TitleContainer>
            <CardCost>$99/month</CardCost>
            <EngageCardHeader>Premium</EngageCardHeader>
            <EngageCardSubHeader>Ideal for 5-10 lines</EngageCardSubHeader>
          </TitleContainer>
          <PackageDetailsContainer>
            <EngageCardPackageDetailsHeader>Features</EngageCardPackageDetailsHeader>
            <EngageCardPackageDetails>2000 credits included per month</EngageCardPackageDetails>
            <EngageCardPackageDetails>$0.035/additional credit</EngageCardPackageDetails>
          </PackageDetailsContainer>
        </EngageCard>
        <EngageCard
          onClick={() => engageCard === "enterprise" ? setEngageCard(null) : setEngageCard("enterprise")}
          selected={engageCard === "enterprise"}
        >
          <Bubble 
            selected={engageCard === "enterprise"}          
          >
            <BubbleText>Recommended</BubbleText>
          </Bubble>
          <TitleContainer>
            <CardCost>$249/month</CardCost>
            <EngageCardHeader>Enterprise</EngageCardHeader>
            <EngageCardSubHeader>Ideal for 11+ lines</EngageCardSubHeader>
          </TitleContainer>
          <PackageDetailsContainer>
            <EngageCardPackageDetailsHeader>Features</EngageCardPackageDetailsHeader>
            <EngageCardPackageDetails>10,000 credits included per month</EngageCardPackageDetails>
            <EngageCardPackageDetails>$0.025/additional credit</EngageCardPackageDetails>
          </PackageDetailsContainer>
        </EngageCard>
      </RowContainer>
      <UserTypeSelectionContainer>
        <RowTitle>User Selection</RowTitle>
        <UserTypeCard
          selected={adminCount > 0}
        >
          <UserTitleContainer>
            <UserTypeCardHeader>Admin</UserTypeCardHeader>
            <UserTypeCardSubHeader>All Access</UserTypeCardSubHeader>
          </UserTitleContainer>
          <UserTypeRightContainer> 
          <CardCost>$75/month</CardCost>
          <UserTypeCounterContainer>
            <UserTypeCounter 
              value={adminCount} 
              type="number"
              onChange={(e) => setAdminCount(parseInt(e.target.value))}
            />
            <UserTypeCardButtonContainer>
              <UserTypeCardButton
                onClick={() => setAdminCount(adminCount + 1)}
              >
                +
              </UserTypeCardButton>
              <UserTypeCardButton
                onClick={() => adminCount > 0 && setAdminCount(adminCount - 1)}
              >
                -
              </UserTypeCardButton>
            </UserTypeCardButtonContainer>
          </UserTypeCounterContainer>
          </UserTypeRightContainer> 
        </UserTypeCard>
        <UserTypeCard
          selected={salesCount > 0}
        >
          <UserTitleContainer>
            <UserTypeCardHeader>Sales</UserTypeCardHeader>
            <UserTypeCardSubHeader>Excludes Subscription<br></br>and Settings Access</UserTypeCardSubHeader>
          </UserTitleContainer>
          <UserTypeRightContainer> 
          <CardCost>$55/month</CardCost>
          <UserTypeCounterContainer>
          <UserTypeCounter 
              value={salesCount} 
              type="number"
              onChange={(e) => setSalesCount(parseInt(e.target.value))}
            />            
            <UserTypeCardButtonContainer>
              <UserTypeCardButton
                onClick={() => setSalesCount(salesCount + 1)}
              >
                +
              </UserTypeCardButton>
              <UserTypeCardButton
                onClick={() => salesCount > 0 && setSalesCount(salesCount - 1)}
              >
                -
              </UserTypeCardButton>
            </UserTypeCardButtonContainer>
          </UserTypeCounterContainer>
          </UserTypeRightContainer> 
        </UserTypeCard>
        <UserTypeCard
          selected={fieldCount > 0}
        >
          <UserTitleContainer>
            <UserTypeCardHeader>Field</UserTypeCardHeader>
            <UserTypeCardSubHeader>Mobile App Access Only<br></br>No Reporting Access</UserTypeCardSubHeader>
          </UserTitleContainer>
          <UserTypeRightContainer> 
          <CardCost>$30/month</CardCost>
          <UserTypeCounterContainer>
          <UserTypeCounter 
              value={fieldCount} 
              type="number"
              onChange={(e) => setFieldCount(parseInt(e.target.value))}
            />            
            <UserTypeCardButtonContainer>
              <UserTypeCardButton
                onClick={() => setFieldCount(fieldCount + 1)}
              >
                +
              </UserTypeCardButton>
              <UserTypeCardButton
                onClick={() => fieldCount > 0 && setFieldCount(fieldCount - 1)}
              >
                -
              </UserTypeCardButton>
            </UserTypeCardButtonContainer>
          </UserTypeCounterContainer>
          </UserTypeRightContainer> 
        </UserTypeCard>
      </UserTypeSelectionContainer>
    </PackageSelectionContainer>
  );
};
