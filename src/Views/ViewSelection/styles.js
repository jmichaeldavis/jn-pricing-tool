import styled from 'styled-components';

export const ViewSelectionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    height: 100vh;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 4rem 0;
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

export const RowContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    gap: 2rem;
`;
// BASE CRM PACKAGE
export const ViewOptionCard = styled.button`
    width: 15rem;
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
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

export const NextPageButton = styled.button`
    width: 10rem;
    height: 5rem;
    border-radius: 1.25rem;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    outline: none;
    outline: ${props => props.selected ? "4px solid #3B5EAB" : "none"};

    &:hover {
        cursor: pointer;
        outline: 4px solid ${props => props.selected ? "#3B5EAB" : "#A9A9A9"};
    }
`;