import React, {useEffect} from 'react'
import './Footer.css'
import video from "../../media/nature.mp4"
import { FiSend } from "react-icons/fi"
import { MdOutlineTravelExplore } from 'react-icons/md'
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs"
import { FaTripadvisor } from "react-icons/fa"
import { FiChevronRight} from "react-icons/fi"

import Aos from "aos"
import "aos/dist/aos.css"

const Footer = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>
              KEEP IN TOUCH
            </small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Entrez votre adresse email' />
            <button data-aos="fade-up" className='btn flex' type='submit'>
              SEND<FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#c" className='logo flex'>
                <MdOutlineTravelExplore className='icon' />
                Travel.
              </a>
            </div>
            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div data-aos="fade-up" className="footerSocials flex">
              <BsYoutube className='icon' />
              <BsFacebook className='icon' />
              <BsInstagram className='icon' />
              <FaTripadvisor className='icon' />
            </div>
          </div>
          <div className="footerLinks flex">

            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>
              <ul>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Service
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Insurance
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Agency
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Tourism
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Payment
                </li>
              </ul>
            </div>

            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>
              <ul>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Bookings
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Rentcars
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  HostelWorld
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Trivago
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  TripAdvisor
                </li>
              </ul>
            </div>

            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>
              <ul>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  London
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  California
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Indonesia
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Europe
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Oceania
                </li>
              </ul>
            </div>

          </div>
          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED A.LATYR 2023</small>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Footer