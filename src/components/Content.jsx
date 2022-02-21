import ProfilePage from './ProfilePage';
import FunStuffPage from './FunStuffPage';
import { Route, Routes } from 'react-router-dom';

const Content = ({profilePage}) => {
    return (
        <div>
            {profilePage &&
                <ProfilePage />
            }
            {!profilePage &&
                <FunStuffPage />
            }
        </div>
    )
}

export default Content;