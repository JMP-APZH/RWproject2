export const schema = gql`

enum City {
  SAINTELUCE
  RIVIERESALEE
  FORTDEFRANCE
}

# enum City {
#   SAINTELUCE: 'Sainte-Luce',
#   RIVIERESALEE: 'Rivière-Salée',
#   FORTDEFRANCE: 'Fort-de-France',
# }

# enum City {
#   Sainte-Luce
#   Rivière-Salée
#   Fort-de-France
# }

enum Gender {
  MALE
  FEMALE
  OTHER
}
  type UserProfile {
    id: Int!
    city: City!
    gender: Gender!
    bio: String!
    userId: Int
    createdAt: DateTime!
  }

  # type usercountbyCity {
  #   _count: Int!
  #   # city: City!
  #   city: String!
  # }


  type Query {
    userProfiles: [UserProfile!]! @requireAuth
    userProfile(id: Int!): UserProfile @requireAuth
    # cityCounts3: cityCounts3
    userprofileCount: Int! @skipAuth
    # usercountbyCity: usercountbyCity._count @skipAuth
    # usercountbyCity: [String] @skipAuth
    # usercountbyCity: [_count] @skipAuth
    # usercountbyCity: [Int String] @skipAuth
    # usercountbyCity: usercountbyCity {_count city} @skipAuth
    # usercountbyCity: [usercountbyCity] @skipAuth^
    # usercountbyCity {
    #   _count: Int
    #   city: String
    # }
    usercountbyCity {
      _count,
      city
    }
  }

  input CreateUserProfileInput {
    city: City!
    gender: Gender!
    bio: String!
    userId: Int
  }

  input UpdateUserProfileInput {
    city: City!
    gender: Gender!
    bio: String!
    userId: Int
  }

  type Mutation {
    createUserProfile(input: CreateUserProfileInput!): UserProfile! @requireAuth
    updateUserProfile(id: Int!, input: UpdateUserProfileInput!): UserProfile!
      @requireAuth
    deleteUserProfile(id: Int!): UserProfile! @requireAuth
  }
`
