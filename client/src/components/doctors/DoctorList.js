import { Link } from 'react-router-dom';

const DoctorList = ({ doctors }) => (
  <>
    <h1>Doctors</h1>
    <h2>{ doctors.length <= 0 ? "No Doctors" : "" }</h2> 
    { doctors.map( c => 
      <Link to={`/doctors/${c.id}`}>{c.title}</Link>
    )}
  </>
)


export default DoctorList;
