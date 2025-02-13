import React from 'react'
import '../css/Header.css'
import { TiHomeOutline } from "react-icons/ti";
import { GoProjectSymlink } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { MdOutlineContactSupport } from "react-icons/md";

const Header = () => {
  return (
    <div className='header'>
      <div className='social-icons'>
          <i><TiHomeOutline /></i>
          <i><GoProjectSymlink /></i>
          <i><FaLinkedinIn /></i>
          <i><FiGithub /></i>
      </div>

      <div><i className='connect'><MdOutlineContactSupport /></i></div>

    </div>
  )
}

export default Header
