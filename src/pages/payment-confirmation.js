/* eslint no-undef: 0 */
import React from 'react'

import { BOOTCAMP } from '../../images/imageNames'
import Layout from '../components/layout'
import { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P } from '../components/text'
import { RootHeader as Header } from '../components/layout/Header'
import Link from '../components/navigation/Link'
import { Card } from '../components/elements'
import trackUserBehaviour, {
  CHECKOUT_PAYMENT_SUCCESS,
} from '../components/utils/trackUserBehaviour'

class PaymentConfirmation extends React.Component {
  componentDidMount() {
    const { trackUserBehaviour } = this.props
    const { makePayment = {}, trainingInstanceId = '' } =
      this.props.location.state || {}
    const { amount = 100, id } = makePayment
    try {
      window.dataLayer = window.dataLayer || []
      function gtag() {
        dataLayer.push(arguments)
      }
      //conversion
      gtag('event', 'conversion', {
        send_to: 'AW-877316317/KPHjCIHC7ocBEN2Rq6ID',
        currency: 'GBP',
        value: amount * 0.01,
        transaction_id: id ? `${trainingInstanceId}_${id}` : '',
      })

      const payload = {
        makePayment,
        trainingInstanceId,
        metadata: JSON.parse(makePayment.metadata || '{}'),
      }

      if (id) {
        trackUserBehaviour({
          event: CHECKOUT_PAYMENT_SUCCESS,
          payload,
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <Layout>
        <Header
          titleLines={['Thanks!']}
          subtitle="We can’t wait to help you on your React journey."
          bgImageName={BOOTCAMP}
        />
        <TopSection marginTop="-250">
          <Grid>
            <Card>
              <Row>
                <Col md={5} mdOffset={1}>
                  <H2>What happens now?</H2>
                  <P>
                    You should shortly receive an order confirmation and receipt
                    in your email. Your ticket along with further details about
                    the training you’ve signed up to will be sent within 24
                    hours. Just check your inbox soon (be sure to check your
                    spam folder if you can’t see it).
                  </P>
                  <P>
                    If you have any questions, please don’t hesitate to contact
                    us. You can email us:{' '}
                    <Link to="mailto:hello@reactgraphql.academy">
                      hello@reactgraphql.academy
                    </Link>{' '}
                    or you can contact us on social media.
                  </P>
                </Col>
                <Col md={4} mdOffset={1} />
              </Row>
            </Card>
          </Grid>
        </TopSection>
      </Layout>
    )
  }
}

PaymentConfirmation.defaultProps = {
  trackUserBehaviour,
}

export default PaymentConfirmation
