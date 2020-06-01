import { gql } from 'apollo-server-core'

export const OpportunitySchema = gql`
  
  extend type Query {
    opportunities: [Opportunity!]!
  }

  extend type Mutation {
    createOpportunity(opportunity: OpportunityInput!): Opportunity
    updateOpportunity(id: ID!, opportunity: OpportunityInput!): Opportunity
    deleteOpportunity(id: ID!): Opportunity
  }

  type Opportunity {
    id: ID!
    employerName: String!
    source: String!
    sourceContact: Contact
    employerURL: String
    tags: [String],
    links: [String],
    files: [String],
    created: Date
    lastUpdated: Date
    user: User
  }

  input OpportunityInput {
    employerName: String!
    source: String!
    sourceContact: String
    employerURL: String
    tags: [String],
    links: [String],
    files: [String],
  }
`