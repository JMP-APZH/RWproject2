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
    usercountbyGender {
      gender
      numbofUserG
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

export const Success = ({ userProfiles, userprofileCount, usercountbyCity, usercountbyGender }) => {
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
      <p className='p-2'>
        Here will be displayed the list of Users by City:
      {usercountbyCity.map((item) => (
        <div key={item.city} className='flex flex-row py-2'>
          <h2 className='pr-2'>The city {item.city} has </h2>
          <p>{item.numberOfUser} users registered </p>
          <p className='pl-2'> or {item.numberOfUser/userprofileCount*100} % of the total users registered</p>
        </div>
      ))}
      </p>

      <p className='p-2'>
        <p className='pb-2 underline underline-offset-2 text-3xl'>Registered Users by City and in % of the total ({userprofileCount} users):</p>
      {usercountbyCity.map((item) => (
        <div key={item.city} className='flex flex-row justify-between p-2 w-72 border border-spacing-1 bg-gray-300'>
              <h2 className='pt-3 font-bold text-xl'>{item.city}</h2>
              <h2 className='p-3 ml-4 bg-green-500 rounded-3xl font-semibold text-white'> {item.numberOfUser}</h2>
              <p className='p-2 ml-4 bg-blue-400 rounded-3xl font-semibold text-white'>{item.numberOfUser/userprofileCount*100} %</p>
            </div>
      ))}
      </p>

      <p className='p-2'>
        Here will be displayed the list of Users by Gender:
        {usercountbyGender.map((item) => (
            <div key={item.gender}>
              <h2>{item.gender}</h2>
              <p>{item.numbofUserG}</p>
            </div>
        ))}
      </p>

      <p className='p-2'>
      <p className='pb-2 underline underline-offset-2 text-3xl'>Registered Users by Gender and in % of the total ({userprofileCount} users):</p>
        {usercountbyGender.map((item) => (
            <div key={item.gender} className='flex flex-row justify-between p-2 w-72 border border-spacing-1 bg-gray-300'>
              <h2 className='pt-3 font-bold text-xl'>{item.gender}</h2>
              <h2 className='p-3 ml-4 bg-green-500 rounded-3xl font-semibold text-white'> {item.numbofUserG}</h2>
              <p className='p-2 ml-4 bg-blue-400 rounded-3xl font-semibold text-white'>{item.numbofUserG/userprofileCount*100} %</p>
            </div>
        ))}
      </p>
    </>
  )

}
