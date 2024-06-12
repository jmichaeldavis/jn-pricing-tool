import styled from 'styled-components';

export const PackageSelectionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    height: 100vh;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;


export const JobNimbusLogo = styled.img`
    width: auto;
    height: 3rem;
    alt: "JobNimbus Logo";
    top: 5px;
    position: absolute;
    left: 5px;
`;  

export const PageTitle = styled.div`
    color: #000;
    font-family: "DM Sans";
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: Center;
    position: absolute;
    top: 5px;
    opacity: 0.2;
`;

export const Bubble = styled.div`
background: ${props => props.selected ? "#3B5EAB" : "#FFF"};
border-radius: 1.25rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    height: 2rem;
    width: 15rem;
    position: relative;
    margin: auto;
    top: -1.25rem;
    opacity: ${props => props.selected ? "100%" : "0"};
    align-items: center;
    justify-content: center;
    color: ${props => props.selected ? "#FFF" : "#A9A9A9"}
    `;

export const BubbleText = styled.div`
text-align: center;
font-family: "DM Sans";
font-size: 1.5rem;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const RowContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    gap: 2rem;
`;
// BASE CRM PACKAGE
export const BaseCrmCard = styled.button`
    width: 38.5rem;
    height: 20rem;
    display: flex;
    position: relative;
    align-items: left;
    justify-content: flex-start;
    flex-direction: column;
    text-align: left;
    flex-shrink: 0;
    border-radius: 1.25rem;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    outline: ${props => props.selected ? "4px solid #3B5EAB" : "none"};

    &:hover {
        cursor: pointer;
        outline: 4px solid ${props => props.selected ? "#3B5EAB" : "#A9A9A9"};
    }
`;

export const TitleContainer = styled.div`
    height: 2rem;
    width: 100%;
    display: flex;
    align-items: left;
    flex-direction: column;
    justify-content: flex-end;
    border-bottom: 2px solid #A9A9A9;
    margin-top: 2.5rem;
`;

export const BaseCrmCardHeader = styled.div`
    color: #000;
    font-family: "DM Sans";
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: left;
    padding-left: 1rem;
    padding-bottom: 0.5rem;

`;

export const BaseCrmCardSubHeader = styled.div`
    color: #6A6A6A;
    font-family: "DM Sans";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: left;
    padding-left: 1rem;
    padding-bottom: 0.5rem;
`;

export const BaseCrmCardFooter = styled.div`
    color: #000;
    text-align: center;
    font-family: "DM Sans";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 100%;
    padding-bottom: 1rem;
`;

// Base CRM Card Package Details Header
export const PackageDetailsContainer = styled.div`
    display: flex;
    align-items: left;
    text-align: left;
    justify-content: left;
    flex-direction: column;
    flex-grow: 1;
    padding-left: 1rem;
`;

export const BaseCrmCardPackageDetailsHeader = styled.div`
    color: #000;
    font-family: "DM Sans";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;

`;

// Base CRM Card Package Details
export const BaseCrmCardPackageDetails = styled.div`
    color: #000;
    font-family: "DM Sans";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding-left: 2rem;
`;

// ENGAGE PACKAGE

export const EngageCard = styled.button`
    display: flex;
    align-items: left;
    justify-content: space-between;
    flex-direction: column;
    width: 25rem;
    height:20rem;
    flex-shrink: 0; 
    border-radius: 1.25rem;
    background: #FFF;
    outline: none;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    outline: ${props => props.selected ? "4px solid #3B5EAB" : "none"};

    &:hover {
        cursor: pointer;
        outline: 4px solid ${props => props.selected ? "#3B5EAB" : "#A9A9A9"};
    }
`;

export const EngageCardHeader = styled.div`
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-left: 1rem;
    padding-bottom: 0.5rem;
    text-align: left;
`;

export const EngageCardSubHeader = styled.div`
    color: #6A6A6A;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: left;
    padding-left: 1rem;
    padding-bottom: 0.5rem;
`;

export const EngageCardPackageDetailsHeader = styled.div`
    color: #000;
    font-family: "DM Sans";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
`;

export const EngageCardPackageDetails = styled.div`
    color: #000;
    font-family: "DM Sans";
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding-left: 2rem;
    padding-bottom: 0.5rem;
`;

// USER TYPE CARD 
export const UserTypeSelectionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
`;

export const UserTypeCard = styled.div`
    width: 25rem;
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    border-radius: 1.25rem;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    outline: ${props => props.selected ? "4px solid #3B5EAB" : "none"};

    &:hover {
        cursor: pointer;
        outline: 4px solid ${props => props.selected ? "#3B5EAB" : "#A9A9A9"};
    }
`;

export const UserTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: flex-start;  
    padding-left: 2rem;
    width: 100%;
    height: 100%;
    padding-top: 4rem;
`;

export const UserTypeCardHeader = styled.div`
    color: #000;
    font-family: "DM Sans";
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-bottom: 0.5rem;
`;

export const UserTypeCardSubHeader = styled.div`
    color: #6A6A6A;
    font-family: "DM Sans";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

export const UserTypeCounterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 1rem;
`;

export const UserTypeCounter = styled.div`
    color: #000;
    font-family: "DM Sans";
    font-size: 4rem;
`;

export const UserTypeCardButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 0.5rem;
`;
export const UserTypeCardButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    color: #A9A9A9;
    font-size: 2rem;
    background: #FFF;
    outline: none;
    border-color: none;
    border: none;
    
    &:hover {
        cursor: pointer;
    }
`;



