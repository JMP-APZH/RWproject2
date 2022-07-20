import { Link, routes } from '@redwoodjs/router'

const Rwp2Layout = ({ children }) => {
  return (
    <>
      <div className="h-full bg-red-100">
      <header className="flex flex-col items-center">
      <div className="">
        <h1 className="text-4xl font-bold p-4 underline">
        <Link to={routes.home()}>Project RedwoodJS 2</Link>
        </h1>
      </div>
      <div className="p-4">
        <nav className="">
          <ul className="">
            <li className="text-center w-36 rounded-md font-bold bg-sky-500 hover:bg-sky-300">
              <Link
                className=""
                to={routes.home()}>Home</Link>
            </li>
            <li className="text-center w-36 rounded-md font-bold bg-sky-500 hover:bg-sky-300">
              <Link to={routes.newUser()}>New User</Link>
            </li>
            <li className="text-center w-36 rounded-md font-bold bg-sky-500 hover:bg-sky-300">
              <Link to={routes.newUserProfile()}>New User Profiles</Link>
            </li>
          </ul>
        </nav>
        </div>
      </header>
      <main className='bg-yellow-100'>{children}</main>
      </div>
    </>
  )
}


export default Rwp2Layout
