/* eslint-disable default-case */
/* eslint-disable no-fallthrough */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import './Template.css';
import ReactStars from "react-rating-stars-component";
import Reviews from "../components/Reviews";
import Heart from "react-animated-heart";

//Pictures
//Template
import p0himg from "../images/testimg3.jpg"
import p0gimg1 from "../images/testimg.jpg"
import p0gimg2 from "../images/testimg.jpg"
import p0gimg3 from "../images/testimg.jpg"

//Page 1
import p1himg from "../images/Seaside/SeasideHeader.jpg"
import p1gimg1 from "../images/Seaside/SeasideGallery1.jpeg"
import p1gimg2 from "../images/Seaside/SeasideGallery2.jpeg"
import p1gimg3 from "../images/Seaside/SeasideGallery3.jpeg"

//Page 2
import p2himg from "../images/Six/SixHeader.jpg"
import p2gimg1 from "../images/Six/SixGallery1.jpg"
import p2gimg2 from "../images/Six/SixGallery2.jpeg"
import p2gimg3 from "../images/Six/SixGallery3.jpeg"

//Page 3
import p3himg from "../images/Atlantic/AtlanticHeader.jpg"
import p3gimg1 from "../images/Atlantic/AtlanticGallery1.jpg"
import p3gimg2 from "../images/Atlantic/AtlanticGallery2.jpg"
import p3gimg3 from "../images/Atlantic/AtlanticGallery3.jfif"

//Page 4
import p4himg from "../images/PNC/PncHeader.jpeg"
import p4gimg1 from "../images/PNC/PncGallery1.jpeg"
import p4gimg2 from "../images/PNC/PncGallery2.jpeg"
import p4gimg3 from "../images/PNC/PncGallery3.jpeg"

//Page 5
import p5himg from "../images/Prudential/PrudentialHeader.jpg"
import p5gimg1 from "../images/Prudential/PrudentialGallery1.jpeg"
import p5gimg2 from "../images/Prudential/PrudentialGallery2.jpeg"
import p5gimg3 from "../images/Prudential/PrudentialGallery3.jpeg"

//Page 6
import p6himg from "../images/Park/ParkHeader.jpg"
import p6gimg1 from "../images/Park/ParkGallery1.jpg"
import p6gimg2 from "../images/Park/ParkGallery2.jpg"
import p6gimg3 from "../images/Park/ParkGallery3.jpg"


//Page 7
import p7himg from "../images/Liberty/LibertyHeader.jpg"
import p7gimg1 from "../images/Liberty/LibertyGallery1.jpg"
import p7gimg2 from "../images/Liberty/LibertyGallery2.jpg"
import p7gimg3 from "../images/Liberty/LibertyGallery3.jpg"

//Page 8
import p8himg from "../images/Gardens/GardensHeader.jpg"
import p8gimg1 from "../images/Gardens/GardensGallery1.png"
import p8gimg2 from "../images/Gardens/GardensGallery2.jpg"
import p8gimg3 from "../images/Gardens/GardensGallery3.jpg"

//Page 9
import p9himg from "../images/Mall/MallHeader.jpg"
import p9gimg1 from "../images/Mall/MallGallery1.jpg"
import p9gimg2 from "../images/Mall/MallGallery2.png"
import p9gimg3 from "../images/Mall/MallGallery3.jpg"

//Page 10
import p10himg from "../images/Princeton/PrincetonHeader.jpeg"
import p10gimg1 from "../images/Princeton/PrincetonGallery1.jpeg"
import p10gimg2 from "../images/Princeton/PrincetonGallery2.jpeg"
import p10gimg3 from "../images/Princeton/PrincetonGallery3.jpg"


const Template = (props) => {

  const [isClick, setClick] = useState(false);
  
  let himg;
  let gimg1;
  let gimg2;
  let gimg3;

  
  switch (props.place_num) {
    case 0:
      himg = p0himg;
      gimg1 = p0gimg1;
      gimg2 = p0gimg2;
      gimg3 = p0gimg3;
      break;
    case 1:
      himg = p1himg;
      gimg1 = p1gimg1;
      gimg2 = p1gimg2;
      gimg3 = p1gimg3;
      break;
    case 2:
      himg = p2himg;
      gimg1 = p2gimg1;
      gimg2 = p2gimg2;
      gimg3 = p2gimg3;
      break;
    case 3:
      himg = p3himg;
      gimg1 = p3gimg1;
      gimg2 = p3gimg2;
      gimg3 = p3gimg3;
      break;
    case 4:
      himg = p4himg;
      gimg1 = p4gimg1;
      gimg2 = p4gimg2;
      gimg3 = p4gimg3;
      break;
    case 5:
      himg = p5himg;
      gimg1 = p5gimg1;
      gimg2 = p5gimg2;
      gimg3 = p5gimg3;
      break;
    case 6:
      himg = p6himg;
      gimg1 = p6gimg1;
      gimg2 = p6gimg2;
      gimg3 = p6gimg3;
      break;
    case 7:
      himg = p7himg;
      gimg1 = p7gimg1;
      gimg2 = p7gimg2;
      gimg3 = p7gimg3;
      break;
    case 8:
      himg = p8himg;
      gimg1 = p8gimg1;
      gimg2 = p8gimg2;
      gimg3 = p8gimg3;
      break;
    case 9:
      himg = p9himg;
      gimg1 = p9gimg1;
      gimg2 = p9gimg2;
      gimg3 = p9gimg3;
      break;
    case 10:
      himg = p10himg;
      gimg1 = p10gimg1;
      gimg2 = p10gimg2;
      gimg3 = p10gimg3;
      break;
    }

  return (
    <div className="overall">
      <div className="container">
        <img src={himg} style={{width:"110%"}} />
        <div className="centered font-link">{props.name}</div>
      </div>

        <div className="row">
          <div className="column left">
          <div style={{backgroundColor: "rgb(244, 247, 249)", borderRadius: "20px", padding: "10px"}}>
            <iframe src={props.mapLink} width="100%" height="300px" style={{ border: 0 }}  allowFullScreen="" loading="lazy"></iframe>
          </div>
          <div style={{backgroundColor: "rgb(244, 247, 249)", borderRadius: "20px", padding: "10px", marginTop: "30px"}}>
            <h2>FAQs</h2>
            <div className="card">
              <div className="container">
                <h4 className='lmarg' ><b>{props.faq1q}</b></h4>
                <p className='lmarg'>{props.faq1a}</p>
              </div>
            </div>
            <div className="card">
              <div className="container">
                <h4 className='lmarg'><b>{props.faq2q}</b></h4>
                <p className='lmarg'>{props.faq2a}</p>
              </div>
            </div>
            <div className="card">
              <div className="container">
                <h4 className='lmarg'><b>{props.faq3q}</b></h4>
                <p className='lmarg'>{props.faq3a}</p>
              </div>
            </div>
        </div>
        </div>

        <div className="column middle">
          <h2 className="header-name">{props.name}</h2>
          <ReactStars
            count={5}
            value={props.stars}
            size={20}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
            edit={false}
          />
          
          <div className="heart">
            <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
          </div>
          <hr></hr>
          <h3>About</h3>
          <p>{props.about}</p>
          <h3>Highlights</h3>
          <li>{props.h1}</li>
          <li>{props.h2}</li>
          <li>{props.h3}</li>
          <h3>Things to Know</h3>
          <p>{props.thingstoknow}</p>
          <h3>COVID-19 Safety</h3>
          <p>{props.covid}</p>
          <h3>Additional Information</h3>
          <p>{props.addInfo}</p>
          <hr></hr>
          <div className='row'>
            <div>
              <p className='column left'><b>Phone number:</b><br></br>{props.pnumb}</p>
              <p className='column left'><b>Website:</b><br></br><a href={props.website} target="_blank" rel="noreferrer">{props.website}</a></p>
              <p className='column left'><b>Address:</b><br></br>{props.address}</p>
              <p className='column left'><b>Hours:</b><br></br>{props.hours}</p>
            </div>
          </div>
          <hr></hr>
          <h3>Reviews</h3>
          <Reviews />
        </div>

        <div className="column right">
          <h2>Gallery</h2>
          <div className="row2">
            <div className="column2">
            <div className="card">
              <div className="container">
                <img src={gimg1} />
              </div>
            </div>
            <div className="card">
              <div className="container">
                <img src={gimg2} />
              </div>
            </div>
            <div className="card">
              <div className="container">
                <img src={gimg3} />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  )
}

export default Template