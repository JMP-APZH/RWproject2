import UserProfile from 'src/components/UserProfile/UserProfile'

export const QUERY = gql`
  query FindUserProfileById($id: Int!) {
    userProfile: userProfile(id: $id) {
      id
      city
      gender
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>UserProfile not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ userProfile }) => {
  return <UserProfile userProfile={userProfile} />
}
