
    // Pricing data for annual, 6-month, and monthly for the Growing and Established packages
    // The pricing data is used to populate the pricing breakdown cards in the PricingSelection component
    // The pricing data is also used to calculate the total cost of the package based on the user input
    const pricingData = {
        annual: {
            growing: this.monthly.growing * 12,
            established: this.monthly.established * 12,
            starter: this.monthly.starter * 12,
            premium: this.monthly.premium * 12,
            enterprise: this.monthly.enterprise * 12,
            admin: this.monthly.admin * 12,
            sales: this.monthly.sales * 12,
            field: this.monthly.field * 12,
        },
        sixMonth: {
            growing: this.monthly.growing * 6,
            established: this.monthly.established * 6,
            starter: this.monthly.starter * 6,
            premium: this.monthly.premium * 6,
            enterprise: this.monthly.enterprise * 6,
            admin: this.monthly.admin * 6,
            sales: this.monthly.sales * 6,
            field: this.monthly.field * 6,
        },
        monthly: {
            growing: 199,
            established: 499,
            starter: 49,
            premium: 99,
            enterprise: 249,
            admin: 75,
            sales: 55,
            field: 30,
        },
        }

export default pricingData;