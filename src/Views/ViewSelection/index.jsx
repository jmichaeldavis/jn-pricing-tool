import {
    ViewSelectionContainer,
    RowContainer,
    ViewOptionCard,
    NextPageButton,
    JobNimbusLogo,
    PageTitle,
} from "./styles";

export const ViewSelection = ({ 
    goToNextPage,
    annualView,
    setAnnualView,
    sixMonthView,
    setSixMonthView,
    monthlyView,
    setMonthlyView,
 }) => {
    return (
        <ViewSelectionContainer>
        <JobNimbusLogo src={require('../../Assets/JNLogo.png')} />
            <PageTitle>Payment Selection</PageTitle>
            <RowContainer>
                <ViewOptionCard onClick={() => setAnnualView(!annualView)}
          selected={annualView === true}>
                    <h2>Annual Payment</h2>
                </ViewOptionCard>
                <ViewOptionCard onClick={() => setSixMonthView(!sixMonthView)}
          selected={sixMonthView === true}>
                    <h2>6-month Payment</h2>
                </ViewOptionCard>
                <ViewOptionCard onClick={() => setMonthlyView(!monthlyView)}
          selected={monthlyView === true}>
                    <h2>Monthly Payment</h2>
                </ViewOptionCard>
            </RowContainer>
            <NextPageButton  onClick={goToNextPage}>
                <h2>Next</h2>
            </NextPageButton>
        </ViewSelectionContainer>

    )
}