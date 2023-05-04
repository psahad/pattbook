import React from 'react';
import { Link, NavLink } from "react-router-dom";
import "./Header.css"
import useTranslation from '../../hooks/useTranslation';

const Header = () => {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation()
  return (
    <header className='c-header'>
      {/* <nav className="c-header__nav"> */}
        <ul className="c-header__nav">
          <li className="c-header__item-wpr">
            {/* <Link to={"/list"}> */}
            <NavLink
              to="/list"
              // className={({ isActive }) => isActive ? "c-header__item-link c-header__item-link--active" : "c-header__item-link" }
              className="c-header__item-link"
            >
              <svg className='' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 12H15" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 16H15" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <circle cx="9" cy="12" r="1" fill="#000000"></circle> <circle cx="9" cy="16" r="1" fill="#000000"></circle> </g></svg>
              <span className='c-header__item-wpr__title'>{t('header.list')}</span>
            </NavLink>
            {/* </Link> */}
          </li>
          <li className="c-header__item-wpr">
            <NavLink className='c-header__item-link' to={"/add"}>
              <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 12H12M12 12H9M12 12V9M12 12V15M17 21H7C4.79086 21 3 19.2091 3 17V7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> </g></svg>
              <span className='c-header__item-wpr__title'>{t('header.add')}</span>
            </NavLink>
          </li>
          <li className="c-header__item-wpr">
            <NavLink className='c-header__item-link' to={"/overview"}>
              <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0" d="M19 12C20.1046 12 21.023 12.9068 20.7805 13.9844C19.8768 18.0002 16.2887 21 12 21C7.02944 21 3 16.9706 3 12C3 7.71127 5.99979 4.12318 10.0156 3.21949C11.0932 2.97699 12 3.89543 12 5V10C12 11.1046 12.8954 12 14 12H19Z" fill="#323232"></path> <path opacity="0.1" d="M20.6713 7.03621C20.0709 5.30223 18.6978 3.92908 16.9638 3.32874C15.92 2.96737 15 3.89543 15 5L15 7C15 8.10457 15.8954 9 17 9L19 9C20.1046 9 21.0326 8.07999 20.6713 7.03621Z" fill="#323232"></path> <path d="M19 12C20.1046 12 21.023 12.9068 20.7805 13.9844C19.8768 18.0002 16.2887 21 12 21C7.02944 21 3 16.9706 3 12C3 7.71127 5.99979 4.12318 10.0156 3.21949C11.0932 2.97699 12 3.89543 12 5V10C12 11.1046 12.8954 12 14 12H19Z" stroke="#323232" stroke-width="2"></path> <path d="M20.6713 7.03621C20.0709 5.30223 18.6978 3.92908 16.9638 3.32874C15.92 2.96737 15 3.89543 15 5L15 7C15 8.10457 15.8954 9 17 9L19 9C20.1046 9 21.0326 8.07999 20.6713 7.03621Z" stroke="#323232" stroke-width="2"></path> </g></svg>
              <span className='c-header__item-wpr__title'>{t('header.statistics')}</span>
            </NavLink>
          </li>
          <li className="c-header__item-wpr">
            <NavLink className='c-header__item-link' to={"/profile"}>
              <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="User / User_03"><path id="Vector" d="M18 19C18 16.7909 15.3137 15 12 15C8.68629 15 6 16.7909 6 19M12 12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8C16 10.2091 14.2091 12 12 12Z" stroke="#434343" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
              <span className='c-header__item-wpr__title'>{t('header.profile')}</span>
            </NavLink>
          </li>
        </ul>
      {/* </nav> */}
    </header>
  );
}

export default Header;
