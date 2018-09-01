import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { MemoryRouter as Router } from 'react-router-dom'
import { MockedProvider } from 'react-apollo/test-utils'

Enzyme.configure({ adapter: new Adapter() })

import VALIDATE_VOUCHER from './ValidateVoucher.graphql'
import Checkout from './'

const createDefaultProps = () => {
    const payment = {
        id: '123'
    }
    const trainingInstanceId = 'zxcvb'
    const trackUserBehaviour = () => { }
    const history = {
        push: () => { }
    }
    const paymentApi = {
        setPublishableKey: () => { },
        card: {
            createToken: data => Promise.resolve({ id: 2 })
        }
    }
    const pay = () => Promise.resolve({ data: { payment } })

    return {
        trainingInstanceId,
        trackUserBehaviour,
        paymentApi,
        history,
        pay,
    }
}

const Root = ({ children, graphQlMocks }) => (
    <Router>
        <MockedProvider addTypename={false} mocks={graphQlMocks}>
            {children}
        </MockedProvider>
    </Router>
)

describe('<CheckoutContainer />', () => {
    it('should make a payment', async () => {
        // input values
        const values = {
            CCnumber: '',
            CCexpiry: '',
            CCcvc: '',
            email: '',
            name: '',
            companyName: null,
            companyVat: null,
        }

        const graphQlMocks = [{
            request: {
                query: VALIDATE_VOUCHER
            },
            result: {
                data: {
                    amount: 0,
                },
            },
        }]
        const wrapper = mount(
            <Root graphQlMocks={graphQlMocks}>
                <Checkout isOpen={true} />
            </Root>
        )

        // // executing the code to be tested
        // const result = await wrapper.instance().pay(values)

        // // assertion
        // expect(result.payment.id).not.toBeFalsy()
    })

    it('should make redirect to /payment-confirmation if the payment was successful', () => {

    })
})