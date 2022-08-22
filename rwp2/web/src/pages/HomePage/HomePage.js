import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import UsersCell from 'src/components/User/UsersCell'
import UserProfilesCell from 'src/components/UserProfile/UserProfilesCell'
import { PrismaClient } from '@prisma/client';




const HomePage = ({ users, userCount }) => {

  // const prisma = new PrismaClient();

  // async function main() {
  //   const data = await prisma.user.aggregate({
  //     _count: {
  //       email: true,
  //     }
  //   })

  //   console.log('The number of created user is:' + data);
  //   console.log('The number of created user is:' + aggregate._count.email);



  // }

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1 className="font-bold text-2xl p-2">Overview</h1>

      <div>
        <p className="bg-gray-500 text-white p-2">
          1 - List of created Users
        </p>
        <UsersCell />

        <p className="bg-gray-500 text-white p-2">
          2 - List of created Userprofiles
        </p>
        <UserProfilesCell />
      </div>

      <div
        className="p-4"
        userCount={userCount}
      >
        <p>
          Where the first data analysis will come here...
        </p>
        <div userCount={userCount}>
        {/* <UsersCell
          userCount={userCount}
        /> */}
          <p userCount={userCount}>
            Number of users created (from the HomePage): {userCount}
          </p>
          <p>
            Number of Userprofiles created:
          </p>
        </div>
      </div>

    </>
  )
}

export default HomePage
