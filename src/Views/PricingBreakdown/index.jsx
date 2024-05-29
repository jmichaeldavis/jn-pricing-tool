import pricingData from "../pricingData";
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

export const PricingSelection = ({
  crmPackage,
  engageCard,
  adminCount,
  salesCount,
  fieldCount,
}) => {
  const options = [
    {
      label: "12-month",
      value: "annual",
      discount: 0.5,
      discountText: "50% CRM Discount",
      priceMultiplier: 12
    },
    {
      label: "6-month",
      value: "sixMonth",
      discount: 0.2,
      discountText: "20% CRM Discount",
      priceMultiplier: 6
    },
    {
      label: "Monthly",
      value: "monthly",
      discount: 0,
      priceMultiplier: 1
    },
  ]

  const getBubbleText = (option) => {
    switch (option.value) {
      case "annual":
        return "Best";
      case "sixMonth":
        return "Better";
      case "monthly":
        return "Good";
      default:
        return "";
    }
  }

  const getBillingFrequency = (option) => {
    switch (option.value) {
      case "annual":
        return "billed once yearly";
      case "sixMonth":
        return "billed every 6 months";
      case "monthly":
      default:
        return "";
    }
  }

  const calculateAdjustedTotal = (option) => {
    const crmPackagePrice = getCrmPackagePrice(12);
    const engagePlanPrice = getEngagePlanPrice(12);
    const userLicensesPrice = getUserLicensesPrice(12);
    const annualTotal = crmPackagePrice + engagePlanPrice + userLicensesPrice;
    const discount = crmPackagePrice * option.discount;
    return Math.round(annualTotal - discount);
  }

  const calculateTotal = (option) => {
    const crmPackagePrice = getCrmPackagePrice(12);
    const engagePlanPrice = getEngagePlanPrice(12);
    const userLicensesPrice = getUserLicensesPrice(12);
    const annualTotal = crmPackagePrice + engagePlanPrice + userLicensesPrice;
    return Math.round(annualTotal);
  }

  const calculateDiscount = (option) => {
    const crmPackagePrice = getCrmPackagePrice(12);
    return Math.round(crmPackagePrice * option.discount);
  }

  const getCrmPackagePrice = (priceMultiplier) => {
    if (!crmPackage) {
      return 0;
    }
    return Math.round(pricingData[crmPackage] * priceMultiplier);
  }

  const getEngagePlanPrice = (priceMultiplier) => {
    if (!engageCard) {
      return 0;
    }
    return Math.round(pricingData[engageCard] * priceMultiplier);
  }

  const getUserLicensesPrice = (priceMultiplier) => {
    return Math.round((adminCount * pricingData.admin * priceMultiplier) +
      (salesCount * pricingData.sales * priceMultiplier) +
      (fieldCount * pricingData.field * priceMultiplier));
  }

  const getAmountDueToday = (option, total) => {
    if (option.value === "monthly") {
      return total / 12;
    }
    if (option.value === "sixMonth") {
      return total / 2;
    }
    return Math.round(total);
  }

  return (
    <PricingBreakdownContainer>
      {options.map((option) => (
        <PricingBreakdownCard>
          <PricingValueBubble>
            <PricingValueBubbleText>{getBubbleText(option)}</PricingValueBubbleText>
          </PricingValueBubble>
          <TitleContainer>
            <PricingBreakdownCardHeader>{option.label}</PricingBreakdownCardHeader>
            <PricingBreakdownCardSubHeader>Payment</PricingBreakdownCardSubHeader>
            <SubTitleContainer>
              <div>
                <MonthlyCost>${Math.round(calculateAdjustedTotal(option) / 12)}</MonthlyCost>
                <CurrencyType>USD<br></br>/month</CurrencyType>
              </div>
              <BillingPeriod>{getBillingFrequency(option)}</BillingPeriod>
            </SubTitleContainer>
          </TitleContainer>
          <PackageDetailsContainer>
            <PricingLineItemContainer>
              <PricingLineItem>CRM Base Package</PricingLineItem>
              <PricingLineItem>${getCrmPackagePrice(option.priceMultiplier)}</PricingLineItem>
            </PricingLineItemContainer>
            <PricingLineItemContainer>
              <PricingLineItem>Engage Plan</PricingLineItem>
              <PricingLineItem>${getEngagePlanPrice(option.priceMultiplier)}</PricingLineItem>
            </PricingLineItemContainer>
            <PricingLineItemContainer>
              <PricingLineItem>User Licenses</PricingLineItem>
              <PricingLineItem>${getUserLicensesPrice(option.priceMultiplier)}</PricingLineItem>
            </PricingLineItemContainer>
          </PackageDetailsContainer>
          <PackageTotalsContainer>
            {option.value === "monthly" ? (
              <>
                <PricingLineItemContainer>
                  <AnnualTotal>Monthly Total</AnnualTotal>
                  <AnnualTotal>${Math.round(calculateAdjustedTotal(option) / 12)}</AnnualTotal>
                </PricingLineItemContainer>
                <PricingLineItemContainer>
                  <AnnualTotal>Annual Total</AnnualTotal>
                  <AnnualTotal>${calculateTotal(option)}</AnnualTotal>
                </PricingLineItemContainer>
              </>
            ) : (
              <>
                <PricingLineItemContainer>
                  <AnnualTotal>Annual Total</AnnualTotal>
                  <AnnualTotal>${calculateTotal(option)}</AnnualTotal>
                </PricingLineItemContainer>
                <PricingLineItemContainer>
                  <PricingSubtotal>{option.discountText}</PricingSubtotal>
                  <PricingDiscount>+${calculateDiscount(option)}</PricingDiscount>
                </PricingLineItemContainer>
              </>
            )}
          </PackageTotalsContainer>
          {option.value !== "monthly" && (
            <PricingLineItemContainer>
              <PricingTotal>Adjusted Total</PricingTotal>
              <PricingTotal>${calculateAdjustedTotal(option)}</PricingTotal>
            </PricingLineItemContainer>
          )}
          <PricingLineItemContainer>
            <PricingBreakdownCardFooter>Amount Due Today</PricingBreakdownCardFooter>
            <PricingDueToday>
              ${getAmountDueToday(option, calculateAdjustedTotal(option))}
            </PricingDueToday>
          </PricingLineItemContainer>
        </PricingBreakdownCard >
      ))}
    </PricingBreakdownContainer >
  );
};
