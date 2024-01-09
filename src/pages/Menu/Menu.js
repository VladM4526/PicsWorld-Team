import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  HeaderContainer,
  HeaderSection,
  LogoApp,
  LogoContainer,
  UserData,
} from 'Components/WelcomePage/Header/Header.styled';
import WaterTracker from '../../img/set-icons.svg';
import { selectUser, selectIsLoggedIn } from '../../redux-files/auth/selectors';
import { UserLogoModal } from 'Components/UserModal/UserModal';

export const Menu = () => {
  // const dispatch = useDispatch();
  const users = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  //   const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [isActive, setIsActive] = useState(false);

  const toggleModal = e => {
    setIsActive(isActive => !isActive);
  };

  return (
    <HeaderContainer>
      <HeaderSection>
        <LogoContainer>
          <NavLink to={isLoggedIn ? '/HomePage' : '/'}>
            {isLoggedIn && (
              <>
                <LogoApp>
                  <use href={`${WaterTracker}#icon-logo-app`}></use>
                </LogoApp>
              </>
            )}
          </NavLink>
        </LogoContainer>
        <UserData onClick={e => setIsActive(!isActive)}>
          {user.name ? user.name.split('')[0].toUpperCase() : 'V'}
          {users.avatarURL && (
            <img src={users.avatarURL} alt="avatar" width="50px" />
          )}
        </UserData>
      </HeaderSection>
      {isActive && <UserLogoModal onClose={toggleModal} />}
    </HeaderContainer>
  );
};
