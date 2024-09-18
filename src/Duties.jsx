import { FaAngleDoubleRight } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const Duties = ({ duties }) => {
  return (
    <ul>
      {duties.map(duty => {
        const id = uuidv4();
        return (
          <li key={id} className="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default Duties;
