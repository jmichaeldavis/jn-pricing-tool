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

export const PackageSelection = () => {
  return (
    <PackageSelectionContainer>
    <RowContainer>
      <BaseCrmCard>
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
      <BaseCrmCard>
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
      <EngageCard>
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
      <EngageCard>
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
      <EngageCard>
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
        <UserTypeCard>
            <UserTitleContainer>
                <UserTypeCardHeader>Admin</UserTypeCardHeader>
                <UserTypeCardSubHeader>All Access</UserTypeCardSubHeader>
            </UserTitleContainer>
            <UserTypeCounterContainer>
                <UserTypeCounter>0</UserTypeCounter>
                <UserTypeCardButtonContainer>
                    <UserTypeCardButton>+</UserTypeCardButton>
                    <UserTypeCardButton>-</UserTypeCardButton>
                </UserTypeCardButtonContainer>
            </UserTypeCounterContainer>
        </UserTypeCard>
        <UserTypeCard>
            <UserTitleContainer>
                <UserTypeCardHeader>Sales</UserTypeCardHeader>
                <UserTypeCardSubHeader>Excludes Subscription<br></br>and Settings Access</UserTypeCardSubHeader>
            </UserTitleContainer>
            <UserTypeCounterContainer>
                <UserTypeCounter>0</UserTypeCounter>
                <UserTypeCardButtonContainer>
                    <UserTypeCardButton>+</UserTypeCardButton>
                    <UserTypeCardButton>-</UserTypeCardButton>
                </UserTypeCardButtonContainer>
            </UserTypeCounterContainer>
        </UserTypeCard>
        <UserTypeCard>
            <UserTitleContainer>
                <UserTypeCardHeader>Field</UserTypeCardHeader>
                <UserTypeCardSubHeader>Mobile App Access Only<br></br>No Reporting Access</UserTypeCardSubHeader>
            </UserTitleContainer>
            <UserTypeCounterContainer>
                <UserTypeCounter>0</UserTypeCounter>
                <UserTypeCardButtonContainer>
                    <UserTypeCardButton>+</UserTypeCardButton>
                    <UserTypeCardButton>-</UserTypeCardButton>
                </UserTypeCardButtonContainer>
            </UserTypeCounterContainer>
        </UserTypeCard>
      </UserTypeSelectionContainer>    
    </PackageSelectionContainer>
  );
};
