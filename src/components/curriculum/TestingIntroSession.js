import React from 'react'
import Ul, { Li } from '../layout/Ul'
import Session from './Session'

const TestingIntroSession = ({ title }) => (
  <Session title={title}>
    <Ul>
      <Li>Build your own test framework in JavaScript</Li>
      <Li>Testing Redux using Jest</Li>
      <Li>Mocking and testing API calls</Li>
      <Li>White-box testing Vs. Black-box testing</Li>
    </Ul>
  </Session>
)

export default TestingIntroSession
