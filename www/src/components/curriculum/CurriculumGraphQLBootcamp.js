import React from 'react'
import NodejsSession from './sessions/graphql/server/NodejsSession'
import SchemaDesignSession from './sessions/graphql/server/SchemaDesignSession'
import ThinkingInGraphQLSession from './sessions/graphql/server/ThinkingInGraphQLSession'
import ErrorAndSecuritySession from './sessions/graphql/server/ErrorAndSecuritySession'
import GraphQLServerRecapSession from './sessions/graphql/server/GraphQLServerRecapSession'
import GraphQLClientFundamentalsSession from './sessions/graphql/client/GraphQLClientFundamentalsSession'
import AdvancedApolloClientSession from './sessions/graphql/client/AdvancedApolloClientSession'
import GraphQLClientRecapSession from './sessions/graphql/client/GraphQLClientRecapSession'
import {
  LearningObjectivesList as LearningObjectivesListAPI,
  TargetAudienceList as TargetAudienceListAPI,
} from './CurriculumGraphQLAPI'
import { Li } from '../layout/Ul'
import Link from '../navigation/Link'

import {
  GRAPHQL_BOOTCAMP,
  GRAPHQL_BOOTCAMP_ID,
  TECH_GRAPHQL,
  FULL_TIME,
  TRAINING_TYPE_FULL_CURRICULUM,
} from '../../config/data'
import Curriculum, { renderSection } from './Curriculum'

export const sessionsFirstHalf = [
  {
    subTitle: 'Node.js and cloud, Thinking in GraphQL, and Schema design',
    comps: [NodejsSession, ThinkingInGraphQLSession, SchemaDesignSession],
  },
  {
    subTitle: 'Error handling, Security design, and Consolidation Project',
    comps: [ErrorAndSecuritySession, GraphQLServerRecapSession],
  },
]
export const sessionsSecondHalf = [
  {
    subTitle:
      'GraphQL client fundamentals, Advanced queries and mutations, and Consolidation Project',
    comps: [
      GraphQLClientFundamentalsSession,
      AdvancedApolloClientSession,
      GraphQLClientRecapSession,
    ],
  },
]

const trainingInstanceTypeName = FULL_TIME
const tech = TECH_GRAPHQL
const trainingType = TRAINING_TYPE_FULL_CURRICULUM
const trainingId = GRAPHQL_BOOTCAMP_ID

const CurriculumGraphQLBootcamp = ({
  toggleNavigateTo = `/graphql/curriculum?tab=${GRAPHQL_BOOTCAMP}`,
  training,
  section = {},
  ...rest
}) => {
  const sectionProps = {
    ...section,
    toggleNavigateTo,
    trainingInstanceTypeName,
    tech,
    trainingType,
  }
  const renderSectionArgs = {
    training,
    initialDayOffset: 0,
    sectionProps,
  }

  return (
    <Curriculum
      title="GraphQL Bootcamp Outline"
      trainingId={trainingId}
      tech={tech}
      training={training}
      trainingType={trainingType}
      trainingInstanceTypeName={trainingInstanceTypeName}
      curriculumTo={toggleNavigateTo}
      {...rest}
      firstHalf={sessionsFirstHalf.map(renderSection(renderSectionArgs))}
      secondHalf={sessionsSecondHalf.map(
        renderSection({
          ...renderSectionArgs,
          initialDayOffset: sessionsFirstHalf.length,
        })
      )}
    />
  )
}

export const TargetAudienceList = () => (
  <React.Fragment>
    <TargetAudienceListAPI />
    <Li>
      A developer with some experience developing React apps interested in
      building modern data-driven apps?
    </Li>
    <Li>
      You don't have enough React experience to attend this training? No
      worries, join our <Link to="/react/training/">React training</Link> if you
      need to upskill in React to attend this training.
    </Li>
  </React.Fragment>
)

export const LearningObjectivesList = () => (
  <React.Fragment>
    <LearningObjectivesListAPI />
    <Li>
      Learn how to build data-driven React apps efficiently and rapidly using
      GraphQL
    </Li>
  </React.Fragment>
)

CurriculumGraphQLBootcamp.LearningObjectivesList = LearningObjectivesList
CurriculumGraphQLBootcamp.TargetAudienceList = TargetAudienceList

export default CurriculumGraphQLBootcamp
