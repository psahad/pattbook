import React from 'react';
import { NavLink } from "react-router-dom";
import "./Header.css"
import useTranslation from '../../hooks/useTranslation';

const Header = () => {
  const { t } = useTranslation()
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
              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="" d="M704 192h160v736H160V192h160v64h384v-64zM288 512h448v-64H288v64zm0 256h448v-64H288v64zm96-576V96h256v96H384z"></path></g></svg>
              {/* <svg className='' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"  strokeWidth="2"></g><g id="SVGRepo_iconCarrier"> <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 12H15"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 16H15"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <circle cx="9" cy="12" r="0.5"></circle> <circle cx="9" cy="16" r="0.5" ></circle> </g></svg> */}
              <span className='c-header__item-wpr__title'>{t('header.list')}</span>
            </NavLink>
            {/* </Link> */}
          </li>
          <li className="c-header__item-wpr">
            <NavLink className='c-header__item-link' to={"/add"}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="0"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill=""></path> </g></svg>
              {/* <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 12H12M12 12H9M12 12V9M12 12V15M17 21H7C4.79086 21 3 19.2091 3 17V7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21Z"  strokeWidth="2" strokeLinecap="round"></path> </g></svg> */}
              <span className='c-header__item-wpr__title'>{t('header.add')}</span>
            </NavLink>
          </li>
          <li className="c-header__item-wpr">
            <NavLink className='c-header__item-link' to={"/overview"}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="chart-colum" class="icon glyph" fill=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7,12v9a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H6A1,1,0,0,1,7,12ZM21,6H18a1,1,0,0,0-1,1V21a1,1,0,0,0,1,1h3a1,1,0,0,0,1-1V7A1,1,0,0,0,21,6ZM13.5,2h-3a1,1,0,0,0-1,1V21a1,1,0,0,0,1,1h3a1,1,0,0,0,1-1V3A1,1,0,0,0,13.5,2Z"></path></g></svg>
              {/* <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0"></g><g id="SVGRepo_iconCarrier"> <path opacity="0" d="M19 12C20.1046 12 21.023 12.9068 20.7805 13.9844C19.8768 18.0002 16.2887 21 12 21C7.02944 21 3 16.9706 3 12C3 7.71127 5.99979 4.12318 10.0156 3.21949C11.0932 2.97699 12 3.89543 12 5V10C12 11.1046 12.8954 12 14 12H19Z" fill="#323232"></path> <path opacity="0.1" d="M20.6713 7.03621C20.0709 5.30223 18.6978 3.92908 16.9638 3.32874C15.92 2.96737 15 3.89543 15 5L15 7C15 8.10457 15.8954 9 17 9L19 9C20.1046 9 21.0326 8.07999 20.6713 7.03621Z" fill="#323232"></path> <path d="M19 12C20.1046 12 21.023 12.9068 20.7805 13.9844C19.8768 18.0002 16.2887 21 12 21C7.02944 21 3 16.9706 3 12C3 7.71127 5.99979 4.12318 10.0156 3.21949C11.0932 2.97699 12 3.89543 12 5V10C12 11.1046 12.8954 12 14 12H19Z"  strokeWidth="2"></path> <path d="M20.6713 7.03621C20.0709 5.30223 18.6978 3.92908 16.9638 3.32874C15.92 2.96737 15 3.89543 15 5L15 7C15 8.10457 15.8954 9 17 9L19 9C20.1046 9 21.0326 8.07999 20.6713 7.03621Z"  strokeWidth="2"></path> </g></svg> */}
              <span className='c-header__item-wpr__title'>{t('header.statistics')}</span>
            </NavLink>
          </li>
          <li className="c-header__item-wpr">
            <NavLink className='c-header__item-link' to={"/profile"}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="transparent"></rect> <path fill-rule="evenodd" clip-rule="evenodd" d="M6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8Z" fill=""></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.43094 16.9025C7.05587 16.2213 9.2233 16 12 16C14.771 16 16.9351 16.2204 18.5586 16.8981C20.3012 17.6255 21.3708 18.8613 21.941 20.6587C22.1528 21.3267 21.6518 22 20.9592 22H3.03459C2.34482 22 1.84679 21.3297 2.0569 20.6654C2.62537 18.8681 3.69119 17.6318 5.43094 16.9025Z" fill=""></path> </g></svg>
              {/* <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="User / User_03"><path id="Vector" d="M18 19C18 16.7909 15.3137 15 12 15C8.68629 15 6 16.7909 6 19M12 12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8C16 10.2091 14.2091 12 12 12Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g></svg> */}
              <span className='c-header__item-wpr__title'>{t('header.profile')}</span>
            </NavLink>
          </li>
        </ul>
      {/* </nav> */}
    </header>
  );
}

export default Header;
