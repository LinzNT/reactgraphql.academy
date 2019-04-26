import trackUserBehaviour from '../components/utils/trackUserBehaviour'

export const triggerSessionSubscribe = ({
  name,
  email,
  fundamentals,
  styling,
  hooks,
  perf,
  gqlclient,
  testing,
}) =>
  fetch(
    `https://us-central1-reactjsacademy-react.cloudfunctions.net/sessionSubscribe`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        fundamentals,
        styling,
        hooks,
        perf,
        gqlclient,
        testing,
      }),
    }
  ).then(() => {
    console.log('web hook called')
    // trackUserBehaviour({
    //   event: 'NEWSLETTER_UNSUBSCRIBE',
  })

export const triggerUnsubscribe = ({ email }) =>
  fetch(
    `https://us-central1-reactjsacademy-react.cloudfunctions.net/unsubscribe`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    }
  ).then(() => {
    trackUserBehaviour({
      event: 'NEWSLETTER_UNSUBSCRIBE',
    })
  })

export const triggerSubscribe = ({ email, pathname }) => {
  window &&
    window.Autopilot &&
    window.Autopilot.run('associate', {
      _simpleAssociate: true,
      Email: email,
      custom: {
        'string--From--Path': pathname,
      },
    })
  trackUserBehaviour({
    event: 'NEWSLETTER_SIGNUP',
  })
}
