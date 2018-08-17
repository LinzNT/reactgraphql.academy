import React from 'react'
import styled from 'styled-components'
import BuyButton from './BuyButton'
import { Span } from '../text'
import { GREY2, FONT_FAMILY } from '../../config/styles'
import getCurrencySymbol from '../utils/currency'

const PurchaseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 12px 0;
`

// const QuantityActions = styled.div`
//   justify-content: space-between;
//   text-align: center;
//   margin: 8px 0;
// `
// const QuantityButton = styled.button`
//   border: 0;
//   font-size: 40px;
//   margin: 0;
//   border: none;
//   padding: 0 25px;
//   background-color: transparent;
// `

const Quantity = styled.span`
  align-self: center;
  height: 1.5rem;
  font-size: 25px;
  text-align: center;
`

const Price = styled.span`
  ${FONT_FAMILY} font-size: 36px;
  font-weight: 800;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.1;
  letter-spacing: normal;
  color: ${GREY2};
  display: block;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  float: left;
`

const PriceAndDiscount = styled.div`
    display: flex;
    align-items: flex-end;
    margin-bottom:5px;
`

class PurchaseQuantityContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: 1,
            maxSeats: 30,
        }
    }

    addCourse = () => {
        this.setState({
            quantity: this.state.quantity + 1 > 30 ? 30 : this.state.quantity + 1,
        })
    }

    remCourse = () => {
        this.setState({
            quantity: this.state.quantity - 1 <= 0 ? 1 : this.state.quantity - 1,
        })
    }

    inputCourse = event => {
        let value = event.target.value

        if (!isNaN(value)) {
            value = parseInt(value, 10)

            if (value > 0 && value <= 30) {
                this.setState({ quantity: value })
            } else {
                this.setState({
                    quantity: value < 1 ? 1 : 30,
                })
            }
        }
    }

    render() {
        const { course } = this.props
        const { quantity } = this.state
        const totalPrice = course.price * quantity * 1.2
        const totalDiscountPrice = course.discountPrice * quantity * 1.2
        // The class `gtm-purchase-box` is needed for Tracking purposes,
        // please DON'T DELETE IT!!
        return (
            <PurchaseWrapper className="gtm-purchase-box">
                {totalDiscountPrice ? (
                    <PriceAndDiscount>
                        <Span lineThrough>{totalPrice}</Span>
                        <Price>&nbsp;{getCurrencySymbol(course.currency, totalDiscountPrice)}</Price>
                    </PriceAndDiscount>
                ) : (
                        <Price>{getCurrencySymbol(course.currency, totalPrice)}</Price>
                    )}
                <BuyButton right />
                <ButtonWrapper>
                    {/* <CheckoutButton course={course} quantity={quantity}>
                        Buy now
          </CheckoutButton> */}
                    {/* <QuantityActions>
                        <QuantityButton onClick={this.remCourse} children="-" />
                        <Quantity>{this.state.quantity}</Quantity>
                        <QuantityButton onClick={this.addCourse} children="+" />
                    </QuantityActions> */}
                </ButtonWrapper>
            </PurchaseWrapper>
        )
    }
}

// PurchaseQuantityContainer.contextTypes = {
//   trackOnMixpanel: PropTypes.func.isRequired
// }

PurchaseQuantityContainer.defaultProps = {
    quantity: 1,
}

export default PurchaseQuantityContainer
