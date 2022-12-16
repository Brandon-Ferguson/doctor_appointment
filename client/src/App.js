import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Doctors from './components/courses/Doctors';
import Users from './components/users/Users';
import Nomatch from './components/shared/Home';
import MainNavbar from './components/shared/MainNavbar';

const App = () => (
  <>
    <MainNavbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/doctors' element={<Doctors />} />
      <Route path='/users' element={<Users />} />
      <Route path='*' element={<Nomatch />} />
    </Routes> 
  </>
)

export default App;