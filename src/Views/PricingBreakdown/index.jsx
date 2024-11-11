import pricingData from "../pricingData";
import React, { useState } from "react";
import {
  PricingBreakdownContainer,
  PricingValueBubble,
  PricingValueBubbleText,
  PricingBreakdownCard,
  PricingBreakdownCardHeader,
  PricingBreakdownCardSubHeader,
  MonthlyCost,
  MonthlyPriceContainer,
  MonthlyAmountContainer,
  CurrencyType,
  BillingPeriod,
  PricingLineItemContainer,
  AdjustedLineItemContainer,
  PricingLineItem,
  PricingSubtotal,
  AnnualTotal,
  PricingDiscount,
  PricingTotal,
  PricingDueToday,
  PricingBreakdownCardFooter,
  TitleContainer,
  SubTitleContainer,
  PackageDetailsContainer,
  PackageTotalsContainer,
} from "./styles";
import { isVisible } from "@testing-library/user-event/dist/utils";

export const PricingSelection = ({
  
  crmPackage,
  engageCard,
  adminCount,
  salesCount,
  fieldCount,
  annualView,
  sixMonthView,
  monthlyView,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [

    {
      label: "Monthly",
      value: "monthly",
      discount: 0,
      priceMultiplier: 1,
      visible: monthlyView,
    },
    {
      label: "6-month",
      value: "sixMonth",
      discount: 0.2,
      discountText: "20% CRM Discount",
      priceMultiplier: 6,
      visible: sixMonthView,
    },
    {
      label: "12-month",
      value: "annual",
      discount: 0.5,
      discountText: "50% CRM Discount",
      priceMultiplier: 12,
      visible: annualView,
    }
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

  const handleSelect = (option) => {
    if (selectedOption && selectedOption.value === option.value) {
      setSelectedOption(null);
    } else {
      setSelectedOption(option);
    }
    }
  return (
    <PricingBreakdownContainer>
      {options.map((option) => (
        option.visible && (
          <PricingBreakdownCard     
        onClick={() => handleSelect(option)}
        selected={selectedOption && selectedOption.value === option.value}>
          <PricingValueBubble 
          selected={selectedOption && selectedOption.value === option.value}
          >
            <PricingValueBubbleText>{getBubbleText(option)}</PricingValueBubbleText>
          </PricingValueBubble>
          <TitleContainer>
            <MonthlyPriceContainer>
              <PricingBreakdownCardHeader>{option.label}</PricingBreakdownCardHeader>
              <PricingBreakdownCardSubHeader>Payment</PricingBreakdownCardSubHeader>
            </MonthlyPriceContainer>
            <SubTitleContainer>
              <MonthlyAmountContainer>
                <MonthlyCost>${Math.round(calculateAdjustedTotal(option) / 12)}</MonthlyCost>
                <CurrencyType>USD<br></br>/month</CurrencyType>
              </MonthlyAmountContainer>
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
              ) : option.value === "sixMonth" ? (
              <>
              <PricingLineItemContainer>
                <AnnualTotal>Semi-annual Total</AnnualTotal>
                <AnnualTotal>${calculateTotal(option)/2}</AnnualTotal>
              </PricingLineItemContainer>
              <PricingLineItemContainer>
                <PricingSubtotal>{option.discountText}</PricingSubtotal>
                <PricingDiscount>+${calculateDiscount(option)/2}</PricingDiscount>
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
          {option.value === "annual" ? (
            <AdjustedLineItemContainer>
              <PricingTotal>Adjusted Total</PricingTotal>
              <PricingTotal>${calculateAdjustedTotal(option)}</PricingTotal>
            </AdjustedLineItemContainer>
          ) : option.value === "sixMonth" ? (
            <AdjustedLineItemContainer>
            <PricingTotal>Adjusted Total</PricingTotal>
            <PricingTotal>${calculateAdjustedTotal(option)/2}</PricingTotal>
          </AdjustedLineItemContainer>
          ) : <></>}
          <PricingLineItemContainer>
            <PricingBreakdownCardFooter>Amount Due Today</PricingBreakdownCardFooter>
            <PricingDueToday>
              ${getAmountDueToday(option, calculateAdjustedTotal(option))}
            </PricingDueToday>
          </PricingLineItemContainer>
        
        </PricingBreakdownCard >
        )
      ))}
    </PricingBreakdownContainer >
  );
};
