import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import UsersCell from 'src/components/User/UsersCell'
import UserProfilesCell from 'src/components/UserProfile/UserProfilesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1 className="font-bold text-2xl p-2">Home</h1>

      <div>
        <p className="bg-gray-500 text-white p-2">
          1 - Here you find a list of created users
        </p>
        <UsersCell />

        <p className="bg-gray-500 text-white p-2">
          2 - Here you find a list of created userprofiles
        </p>
        <UserProfilesCell />
      </div>

    </>
  )
}

export default HomePage
