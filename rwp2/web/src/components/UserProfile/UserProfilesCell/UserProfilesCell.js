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
const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

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

      <div className='p-2'>
      <table className="p-2 bg-white text-center table-auto border-separate border-spacing-2 border border-slate-500">
      <thead className='bg-gray-300 text-center border-solid'>
          <tr className='text-center border border-solid'>
            <th className='text-center border border-solid'>City</th>
            <th className='px-2'>Number of Users</th>
            <th className='px-2'>% of Total Users</th>
            {/* <th>&nbsp;</th> */}
          </tr>
        </thead>

        <tbody className='bg-green-200'>
        {usercountbyCity.map((item) => (
          <tr key={item.city}>
          <td className='font-bold text-left'>{truncate(item.city)}</td>
          <td>{truncate(item.numberOfUser)}</td>
          <td>{truncate(item.numberOfUser/userprofileCount*100)} %</td>
          </tr>
        ))}
        </tbody>

      </table>
      </div>

      {/* <p className='p-2'>
        Here will be displayed the list of Users by Gender:
        {usercountbyGender.map((item) => (
            <div key={item.gender}>
              <h2>{item.gender}</h2>
              <p>{item.numbofUserG}</p>
            </div>
        ))}
      </p> */}

      <p className='p-2'>
      <p className='pb-2 underline underline-offset-2 text-3xl'>Registered Users by Gender and in % of the total ({userprofileCount} users):</p>
        {usercountbyGender.map((item) => (
            <div key={item.gender} className='flex flex-row justify-between p-2 w-72 border border-spacing-1 bg-black'>
              <h2 className='text-white pt-3 font-bold text-xl'>{item.gender}</h2>
              <h2 className='p-3 ml-4 bg-green-500 shadow-white shadow-3xl rounded-3xl font-semibold text-white'> {item.numbofUserG}</h2>
              <p className='p-2 ml-4 bg-blue-400 shadow-2xl shadow-blue-400/50 rounded-3xl font-semibold text-white'>{item.numbofUserG/userprofileCount*100} %</p>
            </div>
        ))}
      </p>

      <div className='p-2'>
      <table className="p-2 bg-white text-center table-auto border-separate border-spacing-2 border border-slate-500">
      <thead className='bg-gray-300 text-center border-solid'>
          <tr className='text-center border border-solid'>
            <th className='text-center border border-solid'>Gender</th>
            <th className='px-2'>Number of Users</th>
            <th className='px-2'>% of Total Users</th>
            {/* <th>&nbsp;</th> */}
          </tr>
        </thead>

        <tbody className='bg-green-200'>
        {usercountbyGender.map((item) => (
          <tr key={item.gender}>
          <td className='font-bold text-left px-2'>{truncate(item.gender)}</td>
          <td>{truncate(item.numbofUserG)}</td>
          <td>{truncate(item.numbofUserG/userprofileCount*100)} %</td>
          </tr>
        ))}
        </tbody>

      </table>
      </div>

    </>
  )

}
