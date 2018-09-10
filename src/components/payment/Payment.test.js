import React from 'react'
import { mount } from 'enzyme'
import waitForExpect from 'wait-for-expect'
import { Route } from 'react-router-dom'

import Root from '../../../test/utils/Root'
import VALIDATE_VOUCHER from './checkout/ValidateVoucher.graphql'
import VALIDATE_VIES from './checkout/ValidateVies.graphql'
import PAY from './checkout/Pay.graphql'
import PaymentSection from './PaymentSection'
import { BuyButton } from './checkout'
import {
    AddCompanyDetailsButton,
    EUVATNumberField,
    ValidateViesButton,
    ShowVoucherButton,
    ValidateVoucherButton,
    TotalPayablePrice,
    VoucherInput,
    NameInput,
    EmailInput,
    CCNameInput,
    CCNumberInput,
    CCExpiryInput,
    CCCVCInput,
    SubmitPaymentFormButton
} from './checkout/CheckoutForm'
import { CheckoutContainer } from './checkout/CheckoutContainer'
import { Alert } from '../elements'



const dummyGraphQLRequestData = {
    pay: {
        query: PAY,
        variables: {
            voucherCode: "",
            quantity:1,
            trainingInstanceId: "5aa2acda7dcc782348ea1234",
            email: "test@example.com",
            name: "Joe Bloggs",
            token: 2,
            vatRate: 1.2,
            companyName: undefined,
            companyVat: undefined
        }
    },
    validateVoucher: {
        query: VALIDATE_VOUCHER,
        variables: {
            voucherCode: "asd",
            trainingInstanceId: "5aa2acda7dcc782348ea1234",
            quantity: 1,
        }
    },
    validateVies: {
        query: VALIDATE_VIES,
        variables: {
            countryCode: "GB",
            vatNumber: "999 9999 73",
        }        
    }
}

const dummyGraphQLResultData = {
    "pay": {
        id: "123",
        currency: "gbp",
        amount: 1194,
        metadata: {}
    },
    "invalidVoucher": {
        voucherGetNetPriceWithDiscount: null
    },
    "validVoucher": {
        voucherGetNetPriceWithDiscount: {
            amount: 1,
        }
    },
    "invalidVies": {
        isVatNumberValid: false
    },
    "validVies": {
        isVatNumberValid: true
    },
    "testError": {
        errors: [
            {message: "Test error"}
        ]
    }
}


const getWrapper = (requestType, resultType ) => {

    const graphQlMocks = [{
        request: dummyGraphQLRequestData[requestType],
        result: { data: dummyGraphQLResultData[resultType] }
    }]

    const paymentApi = {
        setPublishableKey: () => { },
        card: {
            createToken: (data, callback) => callback("test-status", { id: 2})
        }    
    }

    const wrapper = mount(
        <Root graphQlMocks={graphQlMocks}>
            <Route render={(props => (
                <PaymentSection
                    {...props}
                    data={{
                        trainingInstanceId: "5aa2acda7dcc782348ea1234",
                        price: 995,
                        ticketName: "Regular Ticket",
                        currency: "gbp",
                        paymentApi: paymentApi  
                    }}
                />
            ))}>

            </Route>
        </Root>
    )

    return wrapper
}


describe('<PaymentSection /> - Making payments', () => {

    const preparePayment = wrapper => {
        wrapper.find(BuyButton).simulate('click')
        wrapper.update()

        const change = (Component, newValue) => wrapper.find(Component).find('input').simulate('change', { target: { value: newValue } })
        change(NameInput, 'Joe Bloggs')
        change(EmailInput, 'test@example.com')
        change(CCNameInput, 'Mr J Bloggs')
        change(CCNumberInput, '4242424242424242')
        change(CCExpiryInput, '12/99')
        change(CCCVCInput, '123')        
    }

    const makePayment = async (wrapper, checkExpectations) => {

        // NB if you simulate 'click' it does not reliably trigger a 'submit' event in the parent form
        // So select the form and explicitly simulate a 'submit'.  For some reason simulating a 'submit'
        // on the button works as well, but that seems hackish so this method was used instead.
        wrapper.find(SubmitPaymentFormButton).closest('form').simulate('submit')

        return waitForExpect(() => {
            wrapper.update()
            checkExpectations(wrapper)
        });
    }

    it('should make a payment', async () => {
        const wrapper = getWrapper("pay", "pay")
        preparePayment(wrapper)
        await makePayment(wrapper, wrapper => {
            expect(wrapper.find(PaymentSection).props().history.location.pathname).toBe("/payment-confirmation")
        })
    })

    it('should reflect payment errors in the UI', async () => {
        const wrapper = getWrapper("pay", "testError")
        preparePayment(wrapper)
        const getNumWarnings = () => wrapper.find(Alert).filterWhere(element => element.props().danger).length
        expect(getNumWarnings()).toBe(0)
        await makePayment(wrapper, wrapper => {
            expect(getNumWarnings()).toBe(1)
        })
    })
})

describe('<PaymentSection /> - Company details', () => {

    const INVALID_EU_VAT_NUMBER = "XYZ123"
    const VALID_EU_VAT_NUMBER = "GB999 9999 73"

    const prepareToTestVATNumbers = (graphQLResponseValid=true) => {
        const wrapper = getWrapper("validateVies", graphQLResponseValid?"validVies":"invalidVies")

        wrapper.find(BuyButton).simulate('click')
        wrapper.find(AddCompanyDetailsButton).simulate('click')

        wrapper.update()
        const change = (Component, newValue) => wrapper.find(Component).find('input').simulate('change', { target: { value: newValue } })

        const getNumErrorNodes = () => wrapper.find(EUVATNumberField).findWhere(node => (node.children().length === 0 && node.text() === "EU VAT number is not correct")).length

        return { wrapper, change, getNumErrorNodes }
    }

    it("should flag-up invalid-format EU vat numbers", () => {
        const { wrapper, change, getNumErrorNodes } = prepareToTestVATNumbers()
        
        expect(getNumErrorNodes()).toBe(0)
        change(EUVATNumberField, INVALID_EU_VAT_NUMBER)
        wrapper.update()
        expect(getNumErrorNodes()).toBe(1)
    })

    it("should not flag-up valid-format EU vat numbers", () => {
        const { wrapper, change, getNumErrorNodes } = prepareToTestVATNumbers()

        expect(getNumErrorNodes()).toBe(0)
        change(EUVATNumberField, VALID_EU_VAT_NUMBER)
        wrapper.update()
        expect(getNumErrorNodes()).toBe(0)
    })


    const setUpVATButtonTextTest = (graphQLResponseValid=true) => {
        const { wrapper, change } = prepareToTestVATNumbers(graphQLResponseValid)
        change(EUVATNumberField, "GB999 9999 73")

        const getButtonText = () => wrapper.find(ValidateViesButton).text()
        const originalText = getButtonText()

        wrapper.find(ValidateViesButton).simulate('click')
        wrapper.update()
        expect(getButtonText()).toBe("...")

        return { wrapper, change, getButtonText, originalText }
    }

    it("should show an ellipsis while graphql is validating the vat number", () => {
        setUpVATButtonTextTest()
    })

    it("should show an appropriate message in the validate-VAT-number button if the provided VAT number was found to be valid", async () => {
        const { wrapper, getButtonText, originalText } = setUpVATButtonTextTest()

        await waitForExpect(() => {
            wrapper.update()
            expect(getButtonText()).toBe("Validated")
        })
    })

    it("should show the default message in the validate-VAT-number button if the provided VAT number was found to be invalid", async () => {
        const { wrapper, getButtonText, originalText } = setUpVATButtonTextTest(false)

        await waitForExpect(() => {
            wrapper.update()
            expect(getButtonText()).toBe(originalText)
        })
    })

    // TODO:WV:20180907:Test updating taxes
})

describe('<PaymentSection /> - Voucher functionality', () => {

    it('should display an error message, and not update the price, if the voucher is invalid', async () => {
        const wrapper = getWrapper("validateVoucher", "invalidVoucher")

        // steps
        wrapper.find(BuyButton).simulate('click')

        // initial expectation
        expect(wrapper.find(TotalPayablePrice).text()).toEqual("£1194")

        wrapper.find(ShowVoucherButton).simulate('click')
        wrapper.find('input[name="voucher"]').simulate('change', { target: { value: 'asd' } })
        wrapper.find(ValidateVoucherButton).simulate('click')

        // expectation
        await waitForExpect(() => {
            wrapper.update()
            expect(wrapper.find(TotalPayablePrice).text()).toEqual("£1194")
            expect(wrapper.find(VoucherInput).props().meta.error).toBeTruthy()
        });


    })

    it('should update total price if the voucher is correct', async () => {
        const wrapper = getWrapper("validateVoucher", "validVoucher")

        // steps
        wrapper.find(BuyButton).simulate('click')

        // initial expectation
        expect(wrapper.find(TotalPayablePrice).text()).toEqual("£1194")

        wrapper.find(ShowVoucherButton).simulate('click')
        wrapper.find('input[name="voucher"]').simulate('change', { target: { value: 'asd' } })
        wrapper.find(ValidateVoucherButton).simulate('click')

        // expectation
        await waitForExpect(() => {
            expect(wrapper.find(TotalPayablePrice).text()).toEqual("£1.2")
        });
    })
})
