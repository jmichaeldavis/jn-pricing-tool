import {
  PricingBreakdownContainer,
  PricingValueBubble,
  PricingValueBubbleText,
  PricingBreakdownCard,
  PricingBreakdownCardHeader,
  PricingBreakdownCardSubHeader,
  MonthlyCost,
  CurrencyType,
  BillingPeriod,
  PricingLineItemContainer,
  PricingLineItem,
  PricingSubtotal,
  AnnualTotal,
  PricingDiscount,
  PricingTotal,
  PricingDueToday,
  PricingBreakdownCardFooter,
  RowContainer,
  TitleContainer,
  SubTitleContainer,
  PackageDetailsContainer,
  PackageTotalsContainer,
} from "./styles";

export const PricingSelection = ( ) => {
  return (
    <PricingBreakdownContainer>
      <PricingBreakdownCard>
        <PricingValueBubble>
          <PricingValueBubbleText>Better</PricingValueBubbleText>
        </PricingValueBubble>
        <TitleContainer>
          <PricingBreakdownCardHeader>6-month</PricingBreakdownCardHeader>
          <PricingBreakdownCardSubHeader>Payment</PricingBreakdownCardSubHeader>
          <SubTitleContainer>
            <div>
              <MonthlyCost>$100</MonthlyCost>
              <CurrencyType>USD<br></br>/month</CurrencyType>
            </div>
            <BillingPeriod>billed every 6 months</BillingPeriod>
          </SubTitleContainer>
        </TitleContainer>
        <PackageDetailsContainer>
          <PricingLineItemContainer>
            <PricingLineItem>CRM Base Package</PricingLineItem>
            <PricingLineItem>$1,200</PricingLineItem>
          </PricingLineItemContainer>
          <PricingLineItemContainer>
            <PricingLineItem>Engage Plan</PricingLineItem>
            <PricingLineItem>$1,200</PricingLineItem>
          </PricingLineItemContainer>
          <PricingLineItemContainer>
            <PricingLineItem>User Licenses</PricingLineItem>
            <PricingLineItem>$1,200</PricingLineItem>
          </PricingLineItemContainer>
        </PackageDetailsContainer>  
        <PackageTotalsContainer>
          <PricingLineItemContainer>
            <AnnualTotal>Annual Total</AnnualTotal>
            <AnnualTotal>$3,600</AnnualTotal>
          </PricingLineItemContainer>
          <PricingLineItemContainer>
            <PricingSubtotal>50% CRM Discount</PricingSubtotal>
            <PricingDiscount>+$3,600</PricingDiscount>
          </PricingLineItemContainer>
        </PackageTotalsContainer>
        <PricingLineItemContainer>
          <PricingTotal>Adjusted Total</PricingTotal>
          <PricingTotal>$3,600</PricingTotal>
        </PricingLineItemContainer>

        <PricingLineItemContainer>
          <PricingBreakdownCardFooter>Amount Due Today</PricingBreakdownCardFooter>
          <PricingDueToday>$3,600</PricingDueToday>
        </PricingLineItemContainer>
      </PricingBreakdownCard>
    </PricingBreakdownContainer>
  );
};
