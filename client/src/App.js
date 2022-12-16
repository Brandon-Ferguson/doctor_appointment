import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Doctors from './components/doctors/Doctors';
import Users from './components/users/Users';
import Nomatch from './components/shared/Home';
import MainNavbar from './components/shared/MainNavbar';
import Doctor from './components/doctors/Doctor';
import User from './components/users/User';

const App = () => (
  <>
    <MainNavbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/doctors' element={<Doctors />} />
      <Route path='/doctors/:doctorID' element={<Doctor />} />
      <Route path='/users' element={<Users />} />
      <Route path='/users/:userId' element={<User />} />
      <Route path='*' element={<Nomatch />} />
    </Routes> 
  </>
)

export default App;