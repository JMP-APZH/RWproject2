import { Link, routes } from '@redwoodjs/router'

import UserProfiles from 'src/components/UserProfile/UserProfiles'

export const QUERY = gql`
  query FindUserProfiles {
    userProfiles {
      id
      city
      gender
      bio
      userId
      createdAt
      # cityCounts3
    }
    userprofileCount
    usercountbyCity {
      city
      numberOfUser
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

export const Success = ({ userProfiles, userprofileCount, usercountbyCity }) => {
  console.log({usercountbyCity})
  return (
    <>
      <p className='p-2'>
      {userprofileCount} userprofiles have been created (count from the userprofilesCells)
      </p>
      <UserProfiles userProfiles={userProfiles} />

      <p>
       Something will happen here: {JSON.stringify(usercountbyCity)} (--where the usercountbycity--)
      </p>
      {usercountbyCity.map((item) => (
      <div key={item.city}>
        <h2>{item.city}</h2>
        <p>{item.numberOfUser}</p>
      </div> 
))}
    </>
  )

}
