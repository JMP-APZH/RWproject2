export const schema = gql`

enum City {
  SAINTELUCE
  RIVIERESALEE
  FORTDEFRANCE
}

enum Gender {
  MALE
  FEMALE
  OTHER
}
  type UserProfile {
    id: Int!
    city: City!
    gender: Gender!
    createdAt: DateTime!
  }

  type Query {
    userProfiles: [UserProfile!]! @requireAuth
    userProfile(id: Int!): UserProfile @requireAuth
  }

  input CreateUserProfileInput {
    city: City!
    gender: Gender!
  }

  input UpdateUserProfileInput {
    city: City!
    gender: Gender!
  }

  type Mutation {
    createUserProfile(input: CreateUserProfileInput!): UserProfile! @requireAuth
    updateUserProfile(id: Int!, input: UpdateUserProfileInput!): UserProfile!
      @requireAuth
    deleteUserProfile(id: Int!): UserProfile! @requireAuth
  }
`
