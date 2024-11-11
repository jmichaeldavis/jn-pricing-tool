import styled from 'styled-components';

export const PricingBreakdownContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 4rem;
    width: 100vw;
    margin-bottom: 4rem;
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
    flex-direction: row;
    border-bottom: 2px solid #A9A9A9;
    height: 6rem;
    `;

export const SubTitleContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: right;
    flex-direction: column;
    justify-content: center;
    height: 5rem;
    `;

export const MonthlyPriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 1rem;
    width: 100%;
    `;

export const MonthlyAmountContainer = styled.div`
    text-align: right;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    `;

export const PricingBreakdownCard = styled.button`
    width: 25rem;
    height: 23rem;
    border-radius: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    text-align: left;
    box-shadow: 0 0 1rem rgba(0, 0, 0, .1);
    border: none;
    background: #c1f7ce;
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
background: ${props => props.selected ? "#3B5EAB" : "#3B5EAB"};
border-radius: 1.25rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    height: 2rem;
    width: 18rem;
    position: relative;
    top: -1rem;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.selected ? "#FFF" : "#FFF"}
    `;

export const PricingValueBubbleText = styled.div`
text-align: center;
font-family: "DM Sans";
font-size: 1rem;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const PricingBreakdownCardHeader = styled.div`
    color: #000;
    font-family: "DM Sans";
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: left;
`;

export const PricingBreakdownCardSubHeader = styled.div`
color: #6A6A6A;
font-family: "DM Sans";
font-size: 1rem;
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
font-size: 2.5rem;
font-style: normal;
font-weight: 700;
line-height: normal;
display: inline-block;
`;

export const CurrencyType = styled.div`
color: #000;
font-family: "DM Sans";
font-size: .8rem;
font-style: normal;
font-weight: 500;
line-height: normal;
padding-left: 0.5rem;
`;

export const BillingPeriod = styled.div`
color: #000;
text-align: right;
font-family: "DM Sans";
font-size: 1rem;
font-style: normal;
font-weight: 500;
line-height: normal;
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
    margin-bottom: 3rem;
    height: 1rem;
    `;      

export const PricingLineItem = styled.div`
color: #000;
font-family: "DM Sans";
font-size: 0.8rem;
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
    height: 15rem;
    padding-left: 1rem;
    padding-right: 1rem;
`;

export const PricingSubtotal = styled.div`
color: #0050ff;
font-family: "DM Sans";
font-size: 1rem;
font-style: normal;
font-weight: 700;
line-height: normal;
padding-top: 0.5rem;
padding-bottom: 0.25rem;
`;

export const AnnualTotal = styled.div`
color: #000;
font-family: "DM Sans";
font-size: 1rem;
font-style: normal;
font-weight: 700;
line-height: normal;
padding-bottom: 0.215rem;
`;

export const PricingDiscount = styled.div`
color: #0050ff;
font-family: "DM Sans";
font-size: 1rem;
font-style: normal;
font-weight: 700;
line-height: normal;
padding-top: 0.5rem;
padding-bottom: 0.25rem;
`;

export const PricingTotal = styled.div`
color: #000;
font-family: "DM Sans";
font-size: 1rem;
font-style: normal;
font-weight: 700;
line-height: normal;
padding-bottom: 0.5rem;
margin-bottom: 2rem;
`;

export const PricingBreakdownCardFooter = styled.div`
color: #000;
text-align: left;
font-family: "DM Sans";
font-size: 1rem;
font-style: normal;
font-weight: 500;
line-height: normal;
width: 100%;
padding-top: .8rem;
`;

export const PricingDueToday = styled.div`
color: #000;
text-align: right;
font-family: "DM Sans";
font-size: 1.5rem;
font-style: normal;
font-weight: 700;
line-height: normal;
padding-bottom: 1.5rem;
`;