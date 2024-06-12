import styled from 'styled-components';

export const SubscriptionBreakdownContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    width: 100%;
    padding-left: 2rem;
    color: #A9A9A9;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    margin-bottom: 2rem;
`;

export const SubscriptionBreakdownHeader = styled.div`
    font-size: 2rem;
    text-align: left;
    padding-bottom: 0.5rem;
`;

export const LineItemContainer = styled.div`
    width: 30rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const LineItem = styled.div`
    font-size: 1.5rem;
    padding: 0.5rem;
    text-align: left;
`;

export const LineItemValue = styled.div`
    font-size: 1.5rem;
    padding: 0.5rem;
    text-align: right;
`;

export const SecondaryLineItem = styled.div`
    font-size: 1.5rem;
    padding-left: 3rem;
    text-align: left;
`;
