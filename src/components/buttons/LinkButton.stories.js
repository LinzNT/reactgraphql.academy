import React from 'react'
import { storiesOf } from '@storybook/react'
import LinkButton from './LinkButton'

storiesOf('LinkButton', module).add('Mailto', () => (
  <LinkButton to="mailto:asdfa@sadfs.com">Click me</LinkButton>
))
