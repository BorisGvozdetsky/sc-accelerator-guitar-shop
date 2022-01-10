import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFound(): JSX.Element {
  return (
    <div style={{paddingTop: '200px'}}>
      <h1 style={{fontSize: '40px', color: '#131212', textAlign: 'center'}}>404 Not found</h1>
      <p  style={{textAlign: 'center'}}>
        <Link to={AppRoute.Main} style={{color: '#c90606', fontWeight: 'bold'}}>Back to main page</Link>
      </p>
    </div>
  );
}

export default NotFound;
