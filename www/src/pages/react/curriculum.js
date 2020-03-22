import React from 'react'
import { Element, scroller } from 'react-scroll'

import { BOOTCAMP } from 'src/../images/imageNames'
import { Table, Thead, Tbody, Tr, Th, Td } from 'src/components/table'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import Ul, { Li } from 'src/components/layout/Ul'
import { H2Ref, H2, P, H4, H5 } from 'src/components/text'
import LinkButton from 'src/components/buttons/LinkButton'
import {
  Link,
  DEFAULT_SCROLL_OFFSET,
  DEFAULT_SCROLL_DURATION,
} from 'src/components/navigation'
import { Tabs, TabList, TabItem, ContentItem } from 'src/components/layout/Tabs'
import CurriculumReactFundamentals from 'src/components/curriculum/CurriculumReactFundamentals'
import ReactFundamentalsLearningObjectivesList from 'src/components/curriculum/CurriculumReactFundamentals/LearningObjectivesList'
import CurriculumReactBootcamp from 'src/components/curriculum/CurriculumReactBootcamp'
import ReactBootcampLearningObjectivesList from 'src/components/curriculum/CurriculumReactBootcamp/LearningObjectivesList'
import CurriculumReactPartTime from 'src/components/curriculum/CurriculumReactPartTime'
import ReactPartTimeLearningObjectivesList from 'src/components/curriculum/CurriculumReactPartTime/LearningObjectivesList'
import CurriculumAdvancedReact from 'src/components/curriculum/CurriculumAdvancedReact'
import AdvLearningObjectivesList from 'src/components/curriculum/CurriculumAdvancedReact/LearningObjectivesList'
import MarketingCard from 'src/components/curriculum/MarketingCard'
import Header from 'src/components/layout/Header'
import {
  UpcomingTrainingSection,
  selectNthTraining,
  REACT_BOOTCAMP_ID,
  REACT_FUNDAMENTALS_ID,
  ADVANCED_REACT_ID,
  PART_TIME_REACT_ID,
  FULL_TIME_REACT_ID,
} from 'src/components/training'
import { Segment } from 'src/components/elements'
import { Tick } from 'src/components/icons'
import { getURLParameter } from 'src/components/utils/url'
import { formatUTC } from 'src/components/utils'
import {
  REACT_BOOTCAMP,
  ADVANCED_REACT,
  REACT_PART_TIME,
  REACT_FUNDAMENTALS,
  TECH_REACT,
} from 'src/config/data'
import { LIST_LAYOUT } from 'src/components/curriculum/selectCurriculumLayout'
import { BLUE } from '../../config/styles'
import Card from 'src/components/elements/Card'

const TdLearningExprience = ({ strong, children }) => (
  <Td verticalAlign="top">
    <strong style={{ marginTop: '8px', display: 'inline-block' }}>
      {strong}
    </strong>
    <br />
    {children}
  </Td>
)

const UlLearningExperience = ({ children }) => (
  <Ul sx={{ textAlign: 'left', mt: 3 }}>{children}</Ul>
)
class ReactCurriculum extends React.Component {
  state = {
    active: REACT_BOOTCAMP,
  }

  componentDidMount() {
    const defaultTab = getURLParameter('tab')
    const defaultSection = getURLParameter('section')
    if (defaultTab || defaultSection) {
      this.setActive(defaultTab)
      setTimeout(
        () =>
          scroller.scrollTo(defaultSection || 'curriculum', {
            smooth: true,
            duration: DEFAULT_SCROLL_DURATION,
            offset: DEFAULT_SCROLL_OFFSET,
          }),
        200
      )
    }
  }

  setActive = active => {
    this.setState({ active })
  }

  render() {
    const { path, trainings } = this.props
    const commonCurriculumProps = {
      section: { enableToggle: true },
      showTitle: false,
      layout: LIST_LAYOUT,
      showLinkToCurriculum: false,
    }

    const trainingBootcamp = selectNthTraining({
      trainings,
      trainingId: REACT_BOOTCAMP_ID,
      trainingTypeId: FULL_TIME_REACT_ID,
    })
    const trainingCompletePartTime = selectNthTraining({
      trainings,
      trainingId: REACT_BOOTCAMP_ID,
      trainingTypeId: PART_TIME_REACT_ID,
    })
    const trainingFundamentals = selectNthTraining({
      trainings,
      trainingId: REACT_FUNDAMENTALS_ID,
      trainingTypeId: FULL_TIME_REACT_ID,
    })
    const trainingFundamentalsPartTime = selectNthTraining({
      trainings,
      trainingId: REACT_FUNDAMENTALS_ID,
      trainingTypeId: PART_TIME_REACT_ID,
    })
    const trainingAdvanced = selectNthTraining({
      trainings,
      trainingId: ADVANCED_REACT_ID,
      trainingTypeId: FULL_TIME_REACT_ID,
    })
    const trainingAdvancedPartTime = selectNthTraining({
      trainings,
      trainingId: ADVANCED_REACT_ID,
      trainingTypeId: PART_TIME_REACT_ID,
    })
    return (
      <React.Fragment>
        <Header
          titleLines={['React curriculum']}
          subtitle="We're proud to say that our curriculum is the most<br />complete and up-to-date on the market - there really is<br />nowhere better to learn React."
          links={[
            {
              text: 'Differences in our React training ',
              to: '#differences',
            },
            { text: 'All curriculums', to: '#curriculum' },
          ]}
          bgColor={BLUE}
          bgImageName={BOOTCAMP}
          tech={TECH_REACT}
          breadcrumbPath={[
            { to: '/', label: 'Home' },
            {
              to: '/react',
              label: 'React',
            },
            {
              to: path,
              label: 'Curriculum',
            },
          ]}
        />
        <TopSection>
          <Segment>
            <Row>
              <Col lg={10} lgOffset={1}>
                <H2Ref>
                  Our React training - what are the differences?{' '}
                  <Link to="#differences" name="differences">
                    #
                  </Link>
                </H2Ref>
              </Col>
            </Row>
            <Row>
              <Col lg={10} lgOffset={1}>
                <Table>
                  <Thead>
                    <Tr>
                      <Th />
                      <Th type={REACT_BOOTCAMP}>Complete</Th>
                      {/* <Th type={REACT_PART_TIME}>Part Time </Th> */}
                      <Th type={ADVANCED_REACT}>Advanced</Th>
                      <Th type={REACT_FUNDAMENTALS}>Fundamentals</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>ES6 & ESNEXT</Td>
                      <Td>
                        <Tick type={REACT_BOOTCAMP} />
                      </Td>
                      {/* <Td>
                        <Tick type={REACT_PART_TIME} />
                      </Td> */}
                      <Td />
                      <Td>
                        <Tick type={REACT_FUNDAMENTALS} />
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Routing and Forms</Td>
                      <Td>
                        <Tick type={REACT_BOOTCAMP} />
                      </Td>
                      {/* <Td>
                        <Tick type={REACT_PART_TIME} />
                      </Td> */}
                      <Td />
                      <Td>
                        <Tick type={REACT_FUNDAMENTALS} />
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Redux</Td>
                      <Td>
                        <Tick type={REACT_BOOTCAMP} />
                      </Td>
                      {/* <Td>
                        <Tick type={REACT_PART_TIME} />
                      </Td> */}
                      <Td />
                      <Td>
                        <Tick type={REACT_FUNDAMENTALS} />
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Basic Hooks</Td>
                      <Td>
                        <Tick type={REACT_BOOTCAMP} />
                      </Td>
                      {/* <Td>
                        <Tick type={REACT_PART_TIME} />
                      </Td> */}
                      <Td />
                      <Td>
                        <Tick type={REACT_FUNDAMENTALS} />
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Advanced Hooks</Td>
                      <Td>
                        <Tick type={REACT_BOOTCAMP} />
                      </Td>
                      {/* <Td>
                        <Tick type={REACT_PART_TIME} />
                      </Td> */}
                      <Td>
                        <Tick type={ADVANCED_REACT} />
                      </Td>
                      <Td />
                      {/* <Td>
                        <Tick type={REACT_FUNDAMENTALS} />
                      </Td> */}
                    </Tr>
                    <Tr>
                      <Td>Testing</Td>
                      <Td>
                        <Tick type={REACT_BOOTCAMP} />
                      </Td>
                      {/* <Td /> */}
                      <Td>
                        <Tick type={ADVANCED_REACT} />
                      </Td>
                      <Td />
                    </Tr>
                    <Tr>
                      <Td>React Patterns and Perf</Td>
                      <Td>
                        <Tick type={REACT_BOOTCAMP} />
                      </Td>
                      {/* <Td /> */}
                      <Td>
                        <Tick type={ADVANCED_REACT} />
                      </Td>
                      <Td />
                    </Tr>
                    <Tr>
                      <Td>Design Systems</Td>
                      <Td>
                        <Tick type={REACT_BOOTCAMP} />
                      </Td>
                      {/* <Td /> */}
                      <Td>
                        <Tick type={ADVANCED_REACT} />
                      </Td>
                      <Td />
                    </Tr>
                    <Tr>
                      <TdLearningExprience strong="Immersive">
                        For accelerated <br />
                        learning
                      </TdLearningExprience>
                      <Td>
                        <LinkButton
                          variant="secondary"
                          to="/react/training/bootcamp"
                          className="training-curriculum-clicks"
                        >
                          Bootcamp
                        </LinkButton>
                        <UlLearningExperience>
                          <Li>6 days</Li>
                          {/* <Li>Full time</Li> */}
                          <Li>9 am to 6 pm</Li>
                          <Li>In-person and remote</Li>
                          <Li>Starting at £1630</Li>
                        </UlLearningExperience>
                      </Td>
                      {/* <Td>
                        <Ul sx={{ textAlign: 'left' }}>
                          <Li>1 month</Li>
                          <Li>Part time</Li>
                          <Li>Evenings or weekends</Li>
                          <Li>Starting at £980</Li>
                        </Ul>
                        <LinkButton
                          variant="secondary"
                          to="/react/training/part-time/"
                          className="training-curriculum-clicks"
                        >
                          Part Time
                        </LinkButton>
                      </Td> */}
                      <Td>
                        <LinkButton
                          variant="secondary"
                          to="/react/training/advanced"
                          className="training-curriculum-clicks"
                        >
                          Advanced
                        </LinkButton>
                        <UlLearningExperience>
                          <Li>3 days</Li>
                          {/* <Li>Full time</Li> */}
                          <Li>9 am to 6 pm</Li>
                          <Li>In-person and remote</Li>
                          <Li>Starting at £1100</Li>
                        </UlLearningExperience>
                      </Td>
                      <Td>
                        <LinkButton
                          variant="secondary"
                          to="/react/training/fundamentals/"
                          className="training-curriculum-clicks"
                        >
                          Fundamentals
                        </LinkButton>
                        <UlLearningExperience>
                          <Li>3 days</Li>
                          {/* <Li>Full time</Li> */}
                          <Li>9 am to 6 pm</Li>
                          <Li>In-person and remote</Li>
                          <Li>Starting at £990</Li>
                        </UlLearningExperience>
                      </Td>
                    </Tr>
                    <Tr>
                      <TdLearningExprience strong="Part-time (PT)">
                        For minimum <br />
                        work disruption
                      </TdLearningExprience>
                      <Td>
                        <LinkButton
                          variant="secondary"
                          to="/react/training/complete-part-time"
                          className="training-curriculum-clicks"
                        >
                          Complete Part-time
                        </LinkButton>
                        <UlLearningExperience>
                          <Li>Between 5 and 7 weeks</Li>
                          <Li>Max 9 hours a week</Li>
                          <Li>In-person and remote</Li>
                          <Li>Starting at £1630</Li>
                        </UlLearningExperience>
                      </Td>
                      {/* <Td>
                        <Ul sx={{ textAlign: 'left' }}>
                          <Li>1 month</Li>
                          <Li>Part time</Li>
                          <Li>Evenings or weekends</Li>
                          <Li>Starting at £980</Li>
                        </Ul>
                        <LinkButton
                          variant="secondary"
                          to="/react/training/part-time/"
                          className="training-curriculum-clicks"
                        >
                          Part Time
                        </LinkButton>
                      </Td> */}
                      <Td>
                        <LinkButton
                          variant="secondary"
                          to="/react/training/advanced-part-time/"
                          className="training-curriculum-clicks"
                        >
                          Advanced PT
                        </LinkButton>
                        <UlLearningExperience>
                          <Li>Between 2 and 3 weeks</Li>
                          <Li>Max 9 hours a week</Li>
                          <Li>In-person and remote</Li>
                          <Li>Starting at £1100</Li>
                        </UlLearningExperience>
                      </Td>
                      <Td>
                        <LinkButton
                          variant="secondary"
                          to="/react/training/fundamentals-part-time/"
                          className="training-curriculum-clicks"
                        >
                          Fundamentals PT
                        </LinkButton>
                        <UlLearningExperience>
                          <Li>Between 2 and 4 weeks</Li>
                          <Li>Max 9 hours a week</Li>
                          <Li>In-person and remote</Li>
                          <Li>Starting at £990</Li>
                        </UlLearningExperience>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>

                <H5>Also available...</H5>
                <Row>
                  {[
                    {
                      to: '/react/training/corporate/',
                      txt: 'Corporate team training',
                    },
                    {
                      to: '/react/training/workshops/',
                      txt: '1-day React workshops',
                    },
                    { to: '/graphql/training/', txt: 'GraphQL training' },
                  ].map(({ to, txt }) => (
                    <Col md={4}>
                      <LinkButton
                        sx={{
                          mt: [2, 0],
                          display: 'block',
                        }}
                        className="training-curriculum-clicks"
                        to={to}
                      >
                        {txt}
                      </LinkButton>
                    </Col>
                  ))}
                  <Card variant="primary" sx={{ mt: 5 }}>
                    All our training, both in-person and remote, is assisted by
                    experienced coaches & practitioners who follow our{' '}
                    <Link to="/blog/react-graphql-academy-teaching-method/">
                      teaching method
                    </Link>
                    .
                  </Card>
                </Row>
              </Col>
            </Row>
          </Segment>
        </TopSection>
        <Section>
          <Element name="curriculum" />
          <H2>Choose a curriculum:</H2>
          <Tabs onChange={this.setActive} value={this.state.active}>
            <TabList includeRowCol={false}>
              <TabItem name={REACT_BOOTCAMP}>Bootcamp</TabItem>
              <TabItem name={ADVANCED_REACT}>Advanced Immersive</TabItem>
              <TabItem name={REACT_FUNDAMENTALS}>
                Fundamentals Immersive
              </TabItem>
              <TabItem name={REACT_PART_TIME}>Complete Part-Time (PT)</TabItem>
              <TabItem name={REACT_PART_TIME}>Advanced PT</TabItem>
              <TabItem name={REACT_PART_TIME}>Fundamentals PT</TabItem>
            </TabList>
            <Row>
              <Col lg={10} lgOffset={1}>
                {/* <Tabs onChange={this.setActive} active={this.state.active}>
                <TabList>
                  <TabItem name={REACT_BOOTCAMP}>Immersive</TabItem>
                  <TabItem name={REACT_PART_TIME}>Part-Time</TabItem>
                </TabList>
              </Tabs> */}
                {/* <Tabs onChange={this.setActive} active={this.state.active}> */}
                {/* <TabList>
                  <TabItem name={REACT_BOOTCAMP}>Bootcamp</TabItem>
                  <TabItem name={ADVANCED_REACT}>Advanced Immersive</TabItem>
                  <TabItem name={REACT_FUNDAMENTALS}>
                    Fundamentals Immersive
                  </TabItem>
                  <TabItem name={REACT_PART_TIME}>Full Part-Time (PT)</TabItem>
                  <TabItem name={REACT_PART_TIME}>Advanced PT</TabItem>
                  <TabItem name={REACT_PART_TIME}>Fundamentals PT</TabItem>
                </TabList> */}

                <ContentItem name={REACT_BOOTCAMP}>
                  <P>
                    <strong>
                      On completion of the React Bootcamp each student will:
                    </strong>
                  </P>
                  <Ul>
                    <ReactBootcampLearningObjectivesList />
                    <Li>
                      Not sure if our trainings are right for you? Read our blog{' '}
                      <Link
                        className="perfect-course-student"
                        to="/blog/are-you-the-perfect-react-graphql-student/"
                      >
                        <strong>
                          Are YOU the Perfect React GraphQL Student?
                        </strong>
                      </Link>
                    </Li>
                  </Ul>

                  <H4>Training curriculum:</H4>
                  <Row>
                    <Col lg={1} lgOffset={1} />
                    <Col lg={9}>
                      {trainingBootcamp && (
                        <CurriculumReactBootcamp
                          {...commonCurriculumProps}
                          marketingCard={
                            <MarketingCard
                              heading="Next React Bootcamp"
                              text={`Learn the React ecosystem in 1 week!`}
                              className="training-curriculum-next-training-cta"
                              to={trainingBootcamp.toPath}
                              buttonText={`${
                                trainingBootcamp.city
                              } React Bootcamp, ${formatUTC(
                                trainingBootcamp.startDate,
                                trainingBootcamp.utcOffset,
                                'D MMM'
                              )}  `}
                            />
                          }
                        />
                      )}
                    </Col>
                  </Row>
                </ContentItem>

                <ContentItem name={REACT_PART_TIME}>
                  <P>
                    <strong>
                      On completion of the React Part-time training each student
                      will:
                    </strong>
                  </P>
                  <Ul>
                    <ReactPartTimeLearningObjectivesList />
                    <Li>
                      Not sure if our trainings are right for you? Read our blog{' '}
                      <Link
                        className="perfect-course-student"
                        to="/blog/are-you-the-perfect-react-graphql-student/"
                      >
                        <strong>
                          Are YOU the Perfect React GraphQL Student?
                        </strong>
                      </Link>
                    </Li>
                  </Ul>
                  <H4>Training curriculum:</H4>

                  <Row>
                    <Col lg={1} lgOffset={1} />
                    <Col lg={9}>
                      <CurriculumReactPartTime
                        {...commonCurriculumProps}
                        marketingCard={
                          trainingPartTime && (
                            <MarketingCard
                              heading="Next React Part time Training"
                              text={`Don't cut into valuable work-days!`}
                              className="training-curriculum-next-training-cta"
                              to={trainingPartTime.toPath}
                              buttonText={`${
                                trainingPartTime.isOnline
                                  ? 'Remote'
                                  : trainingPartTime.city
                              } React part-time ${formatUTC(
                                trainingPartTime.startDate,
                                trainingPartTime.utcOffset,
                                'D MMM'
                              )}  `}
                            />
                          )
                        }
                      />
                    </Col>
                  </Row>
                </ContentItem>
                <ContentItem name={REACT_FUNDAMENTALS}>
                  <P>
                    <strong>
                      On completion of the React Fundamentals each student will:
                    </strong>
                  </P>
                  <Ul>
                    <ReactFundamentalsLearningObjectivesList />
                    <Li>
                      Not sure if our trainings are right for you? Read our blog{' '}
                      <Link
                        className="perfect-course-student"
                        to="/blog/are-you-the-perfect-react-graphql-student/"
                      >
                        <strong>
                          Are YOU the Perfect React GraphQL Student?
                        </strong>
                      </Link>
                    </Li>
                  </Ul>

                  <H4>Training curriculum:</H4>
                  <Row>
                    <Col lg={1} lgOffset={1} />
                    <Col lg={9}>
                      {trainingFundamentals && (
                        <CurriculumReactFundamentals
                          {...commonCurriculumProps}
                          marketingCard={
                            <MarketingCard
                              heading="Next React Fundamentals"
                              text={`Build a solid React foundation in just 3 days!`}
                              className="training-curriculum-next-training-cta"
                              to={trainingFundamentals.toPath}
                              buttonText={`${
                                trainingFundamentals.city
                              } React Fundamentals, ${formatUTC(
                                trainingFundamentals.startDate,
                                trainingFundamentals.utcOffset,
                                'D MMM'
                              )}  `}
                            />
                          }
                        />
                      )}
                    </Col>
                  </Row>
                </ContentItem>
                <ContentItem name={ADVANCED_REACT}>
                  <P>
                    <strong>
                      On completion of the Advanced React Training each student
                      will:
                    </strong>
                  </P>
                  <Ul>
                    <AdvLearningObjectivesList />
                    <Li>
                      Not sure if our trainings are right for you? Read our blog{' '}
                      <Link
                        className="perfect-course-student"
                        to="/blog/are-you-the-perfect-react-graphql-student/"
                      >
                        <strong>
                          Are YOU the Perfect React GraphQL Student?
                        </strong>
                      </Link>
                    </Li>
                  </Ul>
                  <H4>Training curriculum:</H4>
                  <Row>
                    <Col lg={1} lgOffset={1} />
                    <Col lg={9}>
                      {trainingAdvanced && (
                        <CurriculumAdvancedReact
                          {...commonCurriculumProps}
                          marketingCard={
                            <MarketingCard
                              heading="Next React Advanced Training"
                              text={`Master Advanced React in just 3 days!`}
                              className="training-curriculum-next-training-cta"
                              to={trainingAdvanced.toPath}
                              buttonText={`${
                                trainingAdvanced.city
                              } React Advanced, ${formatUTC(
                                trainingAdvanced.startDate,
                                trainingAdvanced.utcOffset,
                                'D MMM'
                              )}  `}
                            />
                          }
                        />
                      )}
                    </Col>
                  </Row>
                </ContentItem>
              </Col>
            </Row>
          </Tabs>
        </Section>
        <UpcomingTrainingSection trainings={trainings} />
      </React.Fragment>
    )
  }
}

export default ReactCurriculum
