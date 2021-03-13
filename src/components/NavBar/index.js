import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

//Constants
import { ROUTES } from '../../constants';

export default function NavBar() {
  return (
    <header className='bg-red-600'>
      <div className='container mx-auto flex justify-between'>
        <nav className='flex'>
          <NavLink
            to={ROUTES.HOME}
            exact
            activeClassName={classes.activeMainNavLink}
            className={classes.mainNavLink}
          >
            Anubhav
          </NavLink>
          <NavLink
            to={ROUTES.POST}
            activeClassName={classes.activeNavLink}
            className={classes.navLink}
          >
            Blog Post
          </NavLink>
          <NavLink
            to={ROUTES.PROJECT}
            activeClassName={classes.activeNavLink}
            className={classes.navLink}
          >
            Projects
          </NavLink>
          <NavLink
            to={ROUTES.ABOUT}
            activeClassName={classes.activeNavLink}
            className={classes.navLink}
          >
            About Me!
          </NavLink>
        </nav>
        <div className={classes.socialIcon}>
          <SocialIcon
            url='https://github.com/Anubhavjain786'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{...styles.socialIcon}}
          />
          <SocialIcon
            url='https://twitter.com/anubhavjain660'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{...styles.socialIcon}}
          />
          <SocialIcon
            url='https://www.linkedin.com/in/Anubhav-jain-8a5699103/'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{...styles.socialIcon}}
          />
          <SocialIcon
            url='https://www.facebook.com/anubhavjain786/'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{...styles.socialIcon}}
          />
          <SocialIcon
            url='https://www.instagram.com/anubhav_jain_anu/'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{...styles.socialIcon}}
          />
        </div>
      </div>
    </header>
  );
}

const classes = {
  navLink:
    'inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 cursive',
  mainNavLink:
    'inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-wiest',
  activeMainNavLink: 'text-white',
  activeNavLink: 'text-red-100 bg-red-700',
  socialIcon: "inline-flex py-3 px-3 my-6"
};

const styles = {
  socialIcon: {
    height: 35,
    width: 35,
  },
};
