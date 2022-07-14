import { Link, routes } from '@redwoodjs/router'

import UserProfiles from 'src/components/UserProfile/UserProfiles'

export const QUERY = gql`
  query FindUserProfiles {
    userProfiles {
      id
      city
      gender
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No userProfiles yet. '}
      <Link to={routes.newUserProfile()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ userProfiles }) => {
  return <UserProfiles userProfiles={userProfiles} />
}
