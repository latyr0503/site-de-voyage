import React, {useEffect} from 'react'
import './Home.css'
import video from "../../media/nature.mp4"
import { GrLocation } from "react-icons/gr"
import { FaFilter, FaTripadvisor } from "react-icons/fa"
import {BsFacebook, BsInstagram, BsListUl} from "react-icons/bs"
import {TbApps} from "react-icons/tb"

import Aos from "aos"
import "aos/dist/aos.css"

const Home = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    }, [])

    return (
        <section className="home">
            <div className="overlay"></div>
            <video src={video} type='video/mp4' muted autoPlay loop></video>

            <div className="homeContent container">
                <div className="textDiv">

                    <span data-aos="fade-right" className="smallText">
                        Our Packages
                    </span>

                    <h1 data-aos="fade-up" className="homeTitle">
                        Seach your holiday
                    </h1>

                </div>

                <div data-aos="fade-up" className="cardDiv grid">

                    <div className="destinationInput">
                        <label htmlFor="city">
                            Recherchez votre destination:
                        </label>
                        <div className="input flex">
                            <input type="text" placeholder='Entrez la destination...' />
                            <GrLocation className="icon" />
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="date">
                            Selectionnez votre date:
                        </label>
                        <div className="input flex">
                            <input type="date" />
                        </div>
                    </div>

                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">
                                Max prix:
                            </label>
                            <h3 className="total">
                                $5000
                            </h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max='5000' min="1000" />
                        </div>
                    </div>

                    <div className="searchOptions flex">
                        <FaFilter className='icon' />
                        <h4>MORE FILTERS</h4>
                    </div>


                </div>

                <div data-aos="fade-up" className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <BsFacebook className='icon'/>
                        <BsInstagram className='icon'/>
                        <FaTripadvisor className='icon'/>
                    </div>
                    <div className="LeftIcons">
                        <BsListUl className='icon'/>
                        <TbApps className='icon'/>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Home