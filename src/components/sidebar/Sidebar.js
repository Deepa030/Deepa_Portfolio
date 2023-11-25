import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../images/Deepa.jpeg';

class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <div style={{ color: 'black', fontWeight: 'bold' }} className='tagtop'>
          # programmer_life
        </div>
        <div style={{ color: 'black', fontWeight: 'bold' }} className=''>
          # hello_world
        </div>
        <div style={{ color: 'black', fontWeight: 'bold' }} className=''>
          # coding
        </div>
        <h1>
          <Link smooth to='/#start' className='h1_links'>
            Deepa B Madagudi
          </Link>
        </h1>

        <img src={logo} />
        <p style={{ color: 'black', fontWeight: 'bold' }} className='gmail'>
          deepa.madagudi@gmail.com
        </p>

        <ul className='sidebar-nav'>
          <li className='sidebar-nav-items'>
            <Link smooth to='/#projects' className='links'>
              Projects
            </Link>
          </li>
          <li className='sidebar-nav-items'>
            <Link smooth to='/#about' className='links'>
              About
            </Link>
          </li>
          <li className='sidebar-nav-items'>
            <Link smooth to='/#interest' className='links'>
              Interest
            </Link>
          </li>
          <li className='sidebar-nav-items'>
            <Link smooth to='/#education' className='links'>
              Education
            </Link>
          </li>
          
        </ul>

        <div className='flip-card-back'>
          <ul className='sidebar-nav'>
            <li className='sidebar-nav-icons'>
              <a
                href='https://github.com/Deepa030'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-github fa-lg'
              ></a>
            </li>
          <li className='sidebar-nav-icons'>
              <a
                href='https://www.linkedin.com/in/deepa-madagudi-a852811b7/'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-linkedin fa-lg'
              ></a>
            </li>
          
            <li className='sidebar-nav-icons'>
              <a
                href='https://www.instagram.com/__d_i_i_p_s__/?next=%2F'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-instagram fa-lg'
              ></a>
             </li>
             <li className='sidebar-nav-icons'>
              <a
                href='https://twitter.com/Deepa46445793'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-twitter fa-lg'
              ></a>
            </li>
            <li className='sidebar-nav-icons'>
              <a
                href='deepa.madagudi@gmail.com'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-envelope fa-lg'
              ></a>
            </li>
            <li className='sidebar-nav-icons'>
              <a
                href='https://www.facebook.com/deepa.madagudi'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-facebook fa-lg'
              ></a>
            </li>
          </ul>
        </div>
        <div
          style={{
            color: 'black',
            fontWeight: 'bold',
            paddingTop: '30%'
          }}
          className='tagtop'
        >
          Made with{' '}
          <a href='#' style={{ textDecoration: 'none' }} className='fa fas fa-heart fa-lg'></a> by
          me.
        </div>
      </div>
    );
  }
}

export default Sidebar;
