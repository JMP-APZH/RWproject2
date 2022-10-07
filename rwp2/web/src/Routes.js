// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import UserProfilesLayout from 'src/layouts/UserProfilesLayout'

import UsersLayout from 'src/layouts/UsersLayout'
import Rwp2Layout from './layouts/Rwp2Layout/Rwp2Layout'

const Routes = () => {
  return (
    <Router>

      {/* <Route path="/" page={HomePage} name="home" /> */}
      <Set wrap={UserProfilesLayout}>
        {/* <Route path="/user-profiles/new" page={UserProfileNewUserProfilePage} name="newUserProfile" /> */}
        <Route path="/user-profiles/{id:Int}/edit" page={UserProfileEditUserProfilePage} name="editUserProfile" />
        <Route path="/user-profiles/{id:Int}" page={UserProfileUserProfilePage} name="userProfile" />
        <Route path="/user-profiles" page={UserProfileUserProfilesPage} name="userProfiles" />
      </Set>
      <Set wrap={UsersLayout}>
        {/* <Route path="/users/new" page={UserNewUserPage} name="newUser" /> */}
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        {/* <Route path="/users" page={UserUsersPage} name="users" /> */}
      </Set>

      <Set wrap={Rwp2Layout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users" page={UserUsersPage} name="users" />
        <Route path="/user-profiles/new" page={UserProfileNewUserProfilePage} name="newUserProfile" />
        <Route path="/chart" page={ChartPage} name="chart" />
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
