import styled from 'styled-components';

export const PricingBreakdownContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    height: 60vh;
    width: 100vw;
    margin-top: 20rem;
`;
 
export const RowContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 70%;
`;

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: left;
    justify-content: flex-start;
    flex-direction: column;
    border-bottom: 2px solid #A9A9A9;
    height: 10rem;
    `;

export const SubTitleContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    `;

export const PricingBreakdownCard = styled.button`
    width: 32.5rem;
    height: 35rem;
    border-radius: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    text-align: left;
    box-shadow: 0 0 1rem rgba(0, 0, 0, .1);
    border: none;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding-left: 1rem;
    padding-right: 1rem;

    outline: ${props => props.selected ? "4px solid #3B5EAB" : "none"};

    &:hover {
        cursor: pointer;
        outline: 4px solid ${props => props.selected ? "#3B5EAB" : "#A9A9A9"};
    }
`;

export const PricingValueBubble = styled.div`
background: ${props => props.selected ? "#3B5EAB" : "#FFF"};
border-radius: 1.25rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    height: 3.8rem;
    width: 23rem;
    position: relative;
    top: -2rem;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.selected ? "#FFF" : "#A9A9A9"}
    `;

export const PricingValueBubbleText = styled.div`
text-align: center;
font-family: "DM Sans";
font-size: 2rem;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const PricingBreakdownCardHeader = styled.div`
    color: #000;
    font-family: "DM Sans";
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: left;
`;

export const PricingBreakdownCardSubHeader = styled.div`
color: #6A6A6A;
font-family: "DM Sans";
font-size: 1.5rem;
font-style: normal;
font-weight: 500;
line-height: normal;
text-align: left;
padding-bottom: 0.5rem;
`;
// amount due today

export const MonthlyCost = styled.div`
color: #000;
font-family: "DM Sans";
font-size: 4rem;
font-style: normal;
font-weight: 700;
line-height: normal;
display: inline-block;
`;

export const CurrencyType = styled.div`
color: #000;
font-family: "DM Sans";
font-size: 1rem;
font-style: normal;
font-weight: 500;
line-height: normal;
display: inline-block;
padding-left: 0.5rem;
`;

export const BillingPeriod = styled.div`
color: #000;
text-align: right;
font-family: "DM Sans";
font-size: 1.25rem;
font-style: normal;
font-weight: 500;
line-height: normal;
padding-top: 2rem;
`;

export const PricingLineItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    `;  

export const AdjustedLineItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-top: 1px solid #000;
    margin-bottom: 5rem;
    height: 2rem;
    `;      

export const PricingLineItem = styled.div`
color: #000;
font-family: "DM Sans";
font-size: 0.9375rem;
font-style: normal;
font-weight: 500;
line-height: normal;
padding-top: 0.75rem;
`;

export const PackageDetailsContainer = styled.div`
    width: 100%;
    border-bottom: 1px solid #000;
`;

export const PackageTotalsContainer = styled.div`
    width: 100%;
    height: 20rem;
    padding-left: 1rem;
    padding-right: 1rem;
`;

export const PricingSubtotal = styled.div`
color: #000;
font-family: "DM Sans";
font-size: 1.25rem;
font-style: normal;
font-weight: 700;
line-height: normal;
padding-top: 0.5rem;
padding-bottom: 0.25rem;
`;

export const AnnualTotal = styled.div`
color: #000;
font-family: "DM Sans";
font-size: 1.25rem;
font-style: normal;
font-weight: 700;
line-height: normal;
padding-bottom: 0.215rem;
`;

export const PricingDiscount = styled.div`
color: #00B21C;
font-family: "DM Sans";
font-size: 1.25rem;
font-style: normal;
font-weight: 700;
line-height: normal;
padding-top: 0.5rem;
padding-bottom: 0.25rem;
`;

export const PricingTotal = styled.div`
color: #000;
font-family: "DM Sans";
font-size: 1.5rem;
font-style: normal;
font-weight: 700;
line-height: normal;
padding-bottom: 0.5rem;
margin-bottom: 4rem;
`;

export const PricingBreakdownCardFooter = styled.div`
color: #000;
text-align: left;
font-family: "DM Sans";
font-size: 1.25rem;
font-style: normal;
font-weight: 500;
line-height: normal;
width: 100%;
padding-top: 1rem;
`;

export const PricingDueToday = styled.div`
color: #000;
text-align: right;
font-family: "DM Sans";
font-size: 2.25rem;
font-style: normal;
font-weight: 700;
line-height: normal;
padding-bottom: 2rem;
`;