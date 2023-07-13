import React, {useEffect} from 'react'
import './Main.css'
import { GoLocation } from 'react-icons/go'
import { FaClipboardList } from 'react-icons/fa'

import img1 from "../../media/image1.jpg"
import img2 from "../../media/image1.jpg"
import img3 from "../../media/image1.jpg"
import img4 from "../../media/image1.jpg"
import img5 from "../../media/image1.jpg"
import img6 from "../../media/image1.jpg"
import img7 from "../../media/image1.jpg"
import img8 from "../../media/image1.jpg"
import img9 from "../../media/image1.jpg"

import Aos from "aos"
import "aos/dist/aos.css"

const Main = () => {

  const Data = [
    {
      id: 1,
      imgSrc: img1,
      desTitle: "Mbao",
      location: 'Sénégal',
      grade: 'CULTURAL RELAX',
      fess: "$700",
      description: 'Lorem ipsum dolor sit amet, coo velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est.'
    },
    {
      id: 2,
      imgSrc: img2,
      desTitle: "dakar",
      location: 'Sénégal',
      grade: 'CULTURAL RELAX',
      fess: "$800",
      description: 'Lorem ipsum dolor sit amet, coo velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est.'

    },
    {
      id: 3,
      imgSrc: img3,
      desTitle: "dakar",
      location: 'Sénégal',
      grade: 'CULTURAL RELAX',
      fess: "$700",
      description: 'Lorem ipsum dolor sit amet, coo velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est.'
    },
    {
      id: 4,
      imgSrc: img4,
      desTitle: "dakar",
      location: 'Sénégal',
      grade: 'CULTURAL RELAX',
      fess: "$700",
      description: 'Lorem ipsum dolor sit amet, coo velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est.'
    },
    {
      id: 5,
      imgSrc: img5,
      desTitle: "dakar",
      location: 'Sénégal',
      grade: 'CULTURAL RELAX',
      fess: "$700",
      description: 'Lorem ipsum dolor sit amet, coo velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est.'
    },
    {
      id: 6,
      imgSrc: img6,
      desTitle: "dakar",
      location: 'Sénégal',
      grade: 'CULTURAL RELAX',
      fess: "$700",
      description: 'Lorem ipsum dolor sit amet, coo velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est.'
    },
    {
      id: 7,
      imgSrc: img7,
      desTitle: "dakar",
      location: 'Sénégal',
      grade: 'CULTURAL RELAX',
      fess: "$700",
      description: 'Lorem ipsum dolor sit amet, coo velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est.'
    },
    {
      id: 8,
      imgSrc: img8,
      desTitle: "dakar",
      location: 'Sénégal',
      grade: 'CULTURAL RELAX',
      fess: "$700",
      description: 'Lorem ipsum dolor sit amet, coo velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est.'
    },
    {
      id: 9,
      imgSrc: img9,
      desTitle: "dakar",
      location: 'Sénégal',
      grade: 'CULTURAL RELAX',
      fess: "$700",
      description: 'Lorem ipsum dolor sit amet, coo velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est.'
    },
  ]

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destination
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({ id, imgSrc, desTitle, location, grade, fess, description }) => {
            return (
              <div data-aos="fade-up" key={id} className="singleDestination">

                <div className="imageDiv">
                  <img src={imgSrc} alt={desTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className='desTitle'>
                    {desTitle}
                  </h4>

                  <span className="continent flex">
                    <GoLocation className="icon" />
                    <span className='name'>{location}</span>
                  </span>

                  <div className="fess flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fess}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETAILS<FaClipboardList className='icon' />
                  </button>

                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main