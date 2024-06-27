import {
    SubscriptionBreakdownContainer,
    SubscriptionBreakdownHeader,
    LineItemContainer,
    LineItem,
    LineItemValue,
    SecondaryLineItem,
} from './styles.js';

export const SubscriptionBreakdown = ({
    crmPackage,
    engageCard,
    adminCount,
    salesCount,
    fieldCount,
}) => {
const crmStatement = (crmPackage === 'growing') ? 'Growing: $199' : 'Established: $499';
const engageStatement = (engageCard === 'enterprise') ? 'Enterprise: $249' : (engageCard === 'premium') ? 'Premium: $99' : (engageCard === 'starter') ? 'Starter: $49' : 'No Engage Package Selected';
const adminStatement = `${adminCount} x $75: $${adminCount * 75}`;
const salesStatement = `${salesCount} x $55: $${salesCount * 55}`;
const fieldStatement = `${fieldCount} x $30: $${fieldCount * 30}`;



    return (
        <SubscriptionBreakdownContainer>
            <SubscriptionBreakdownHeader>Subscription Breakdown</SubscriptionBreakdownHeader>
            <LineItemContainer>
                <LineItem>CRM Package:</LineItem>
                <LineItemValue>{crmStatement}</LineItemValue>
            </LineItemContainer>
            <LineItemContainer>
                <LineItem>Engage Package:</LineItem>
                <LineItemValue>{engageStatement}</LineItemValue>
            </LineItemContainer>
            <LineItemContainer>
                <LineItem>Total Users:</LineItem>
                <LineItemValue>{adminCount + salesCount + fieldCount}</LineItemValue>
            </LineItemContainer>
            <LineItemContainer>
                <SecondaryLineItem>Admin Users:</SecondaryLineItem>
                <LineItemValue>{adminStatement}</LineItemValue>
            </LineItemContainer>
            <LineItemContainer>
                <SecondaryLineItem>Sales Users:</SecondaryLineItem>
                <LineItemValue>{salesStatement}</LineItemValue>
            </LineItemContainer>
            <LineItemContainer>
                <SecondaryLineItem>Field Users:</SecondaryLineItem>
                <LineItemValue>{fieldStatement}</LineItemValue>
            </LineItemContainer>
        </SubscriptionBreakdownContainer>
    );
};
