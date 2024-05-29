import {
  PackageSelectionContainer,
  RowContainer,
  BaseCrmCard,
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
      <RowContainer>
        <BaseCrmCard
          onClick={() => setCrmPackage("growing")}
          selected={crmPackage === "growing"}
        >
          <TitleContainer>
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
          onClick={() => setCrmPackage("established")}
          selected={crmPackage === "established"}
        >
          <TitleContainer>
            <BaseCrmCardHeader>Established</BaseCrmCardHeader>
            <BaseCrmCardSubHeader>Run Multi-locations or Businesses</BaseCrmCardSubHeader>
          </TitleContainer>
          <PackageDetailsContainer>
            <BaseCrmCardPackageDetailsHeader>Features</BaseCrmCardPackageDetailsHeader>
            <BaseCrmCardPackageDetails>Unlimited integrations</BaseCrmCardPackageDetails>
            <BaseCrmCardPackageDetails>Access to Open API Documentation</BaseCrmCardPackageDetails>
          </PackageDetailsContainer>
          <BaseCrmCardFooter>Eligible for Account Manager $1000+</BaseCrmCardFooter>
        </BaseCrmCard>
      </RowContainer>
      <RowContainer>
        <EngageCard
          onClick={() => setEngageCard("starter")}
          selected={engageCard === "starter"}
        >
          <TitleContainer>
            <EngageCardHeader>Starter</EngageCardHeader>
            <EngageCardSubHeader>Ideal for up to 4 lines</EngageCardSubHeader>
          </TitleContainer>
          <PackageDetailsContainer>
            <EngageCardPackageDetailsHeader>Features</EngageCardPackageDetailsHeader>
            <EngageCardPackageDetails>2 phone lines included (up to 4)</EngageCardPackageDetails>
            <EngageCardPackageDetails>Additional lines $4/month</EngageCardPackageDetails>
            <EngageCardPackageDetails>200 credits included per month</EngageCardPackageDetails>
            <EngageCardPackageDetails>$0.10/additional credit</EngageCardPackageDetails>
          </PackageDetailsContainer>
        </EngageCard>
        <EngageCard
          onClick={() => setEngageCard("premium")}
          selected={engageCard === "premium"}
        >
          <TitleContainer>
            <EngageCardHeader>Premium</EngageCardHeader>
            <EngageCardSubHeader>Ideal for 5-10 lines</EngageCardSubHeader>
          </TitleContainer>
          <PackageDetailsContainer>
            <EngageCardPackageDetailsHeader>Features</EngageCardPackageDetailsHeader>
            <EngageCardPackageDetails>10 phone lines included</EngageCardPackageDetails>
            <EngageCardPackageDetails>Additional lines $4/month</EngageCardPackageDetails>
            <EngageCardPackageDetails>2000 credits included per month</EngageCardPackageDetails>
            <EngageCardPackageDetails>$0.035/additional credit</EngageCardPackageDetails>
          </PackageDetailsContainer>
        </EngageCard>
        <EngageCard
          onClick={() => setEngageCard("enterprise")}
          selected={engageCard === "enterprise"}
        >
          <TitleContainer>
            <EngageCardHeader>Enterprise</EngageCardHeader>
            <EngageCardSubHeader>Ideal for up to 4 lines</EngageCardSubHeader>
          </TitleContainer>
          <PackageDetailsContainer>
            <EngageCardPackageDetailsHeader>Features</EngageCardPackageDetailsHeader>
            <EngageCardPackageDetails>25 phone lines included</EngageCardPackageDetails>
            <EngageCardPackageDetails>Additional lines $4/month</EngageCardPackageDetails>
            <EngageCardPackageDetails>10,000 credits included per month</EngageCardPackageDetails>
            <EngageCardPackageDetails>$0.025/additional credit</EngageCardPackageDetails>
          </PackageDetailsContainer>
        </EngageCard>
      </RowContainer>
      <UserTypeSelectionContainer>
        <UserTypeCard
          selected={adminCount > 0}
        >
          <UserTitleContainer>
            <UserTypeCardHeader>Admin</UserTypeCardHeader>
            <UserTypeCardSubHeader>All Access</UserTypeCardSubHeader>
          </UserTitleContainer>
          <UserTypeCounterContainer>
            <UserTypeCounter>{adminCount}</UserTypeCounter>
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
        </UserTypeCard>
        <UserTypeCard
          selected={salesCount > 0}
        >
          <UserTitleContainer>
            <UserTypeCardHeader>Sales</UserTypeCardHeader>
            <UserTypeCardSubHeader>Excludes Subscription<br></br>and Settings Access</UserTypeCardSubHeader>
          </UserTitleContainer>
          <UserTypeCounterContainer>
            <UserTypeCounter>{salesCount}</UserTypeCounter>
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
        </UserTypeCard>
        <UserTypeCard
          selected={fieldCount > 0}
        >
          <UserTitleContainer>
            <UserTypeCardHeader>Field</UserTypeCardHeader>
            <UserTypeCardSubHeader>Mobile App Access Only<br></br>No Reporting Access</UserTypeCardSubHeader>
          </UserTitleContainer>
          <UserTypeCounterContainer>
            <UserTypeCounter>{fieldCount}</UserTypeCounter>
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
        </UserTypeCard>
      </UserTypeSelectionContainer>
    </PackageSelectionContainer>
  );
};
