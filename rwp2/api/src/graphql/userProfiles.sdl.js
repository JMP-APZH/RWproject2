export const schema = gql`
  type UserProfile {
    id: Int!
    city: [String]!
    gender: [String]!
    createdAt: DateTime!
  }

  type Query {
    userProfiles: [UserProfile!]! @requireAuth
    userProfile(id: Int!): UserProfile @requireAuth
  }

  input CreateUserProfileInput {
    city: [String]!
    gender: [String]!
  }

  input UpdateUserProfileInput {
    city: [String]!
    gender: [String]!
  }

  type Mutation {
    createUserProfile(input: CreateUserProfileInput!): UserProfile! @requireAuth
    updateUserProfile(id: Int!, input: UpdateUserProfileInput!): UserProfile!
      @requireAuth
    deleteUserProfile(id: Int!): UserProfile! @requireAuth
  }
`
