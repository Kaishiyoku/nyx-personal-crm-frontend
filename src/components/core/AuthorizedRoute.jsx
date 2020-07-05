import isAuthorized from '../../authorization/isAuthorized';
import LoginPage from '../pages/LoginPage';

const AuthorizedRoute = (props) => {
    return isAuthorized() ? props.component : <LoginPage/>;
};

export default AuthorizedRoute;
