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

    return (
        <SubscriptionBreakdownContainer>
            <SubscriptionBreakdownHeader>Subscription Breakdown</SubscriptionBreakdownHeader>
            <LineItemContainer>
                <LineItem>CRM Package:</LineItem>
                <LineItemValue>{crmPackage}</LineItemValue>
            </LineItemContainer>
            <LineItemContainer>
                <LineItem>Engage Card:</LineItem>
                <LineItemValue>{engageCard}</LineItemValue>
            </LineItemContainer>
            <LineItemContainer>
                <LineItem>Total Users:</LineItem>
                <LineItemValue>{adminCount + salesCount + fieldCount}</LineItemValue>
            </LineItemContainer>
            <LineItemContainer>
                <SecondaryLineItem>Admin Users:</SecondaryLineItem>
                <LineItemValue>{adminCount}</LineItemValue>
            </LineItemContainer>
            <LineItemContainer>
                <SecondaryLineItem>Sales Users:</SecondaryLineItem>
                <LineItemValue>{salesCount}</LineItemValue>
            </LineItemContainer>
            <LineItemContainer>
                <SecondaryLineItem>Field Users:</SecondaryLineItem>
                <LineItemValue>{fieldCount}</LineItemValue>
            </LineItemContainer>
        </SubscriptionBreakdownContainer>
    );
};
