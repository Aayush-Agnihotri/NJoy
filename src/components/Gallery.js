/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./Gallery.css";
import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <>
        <div className='header'>Attractions</div>
        <br></br>

        <div className="gallery">
          <Link to='/seaside'>
            <img style={{ height: "200px" }} src={require('../images/Seaside/SeasideGallery1.jpeg')} />
            <div className='title'>Seaside Heights Boardwalk</div>
            <div className="desc">Add a description of the image here</div>
          </Link>
        </div>

        <div className="gallery">
          <Link to='/six'>
            <img style={{ height: "200px" }} src={require('../images/Six/SixGallery1.jpg')} />
            <div className='title'>Six Flags</div>
            <div className="desc">Add a description of the image here</div>
          </Link>
        </div>

        <div className="gallery">
          <Link to='/atlantic'>
          <img style={{ height: "200px" }} src={require('../images/Atlantic/AtlanticGallery1.jpg')} />
            <div className='title'>Atlantic City</div>
            <div className="desc">Add a description of the image here</div>
          </Link>
        </div>

        <div className="gallery">
          <Link to='/Pnc'>
          <img style={{ height: "200px" }} src={require('../images/PNC/PncGallery3.jpeg')} />
            <div className='title'>PNC Bank Art Center</div>
            <div className="desc">Add a description of the image here</div>
          </Link>
        </div>

        <div className="gallery">
          <Link to='/Prudential'>
            <img style={{ height: "200px" }} src={require('../images/Prudential/PrudentialGallery3.jpeg')} />
            <div className='title'>Prudential Center</div>
            <div className="desc">Add a description of the image here</div>
          </Link>
        </div>

        <div className="gallery">
          <Link to='/park'>
            <img style={{ height: "200px" }} src={require('../images/Park/ParkGallery1.jpg')} />
            <div className='title'>Liberty State Park</div>
            <div className="desc">Add a description of the image here</div>
          </Link>
        </div>

        <div className="gallery">
          <Link to='/liberty'>
            <img style={{ height: "200px" }} src={require('../images/Liberty/LibertyGallery3.jpg')} />
            <div className='title'>Liberty Science Center</div>
            <div className="desc">Add a description of the image here</div>
          </Link>
        </div>

        <div className="gallery">
          <Link to='/gardens'>
            <img style={{ height: "200px" }} src={require('../images/Gardens/GardensGallery3.jpg')} />
            <div className='title'>Botanical Gardens</div>
            <div className="desc">Add a description of the image here</div>
          </Link>
        </div>

        <div className="gallery">
          <Link to='/mall'>
            <img style={{ height: "200px" }} src={require('../images/Mall/MallGallery3.jpg')} />
            <div className='title'>American Dream Mall</div>
            <div className="desc">Add a description of the image here</div>
          </Link>
        </div>

        <div className="gallery">
          <Link to='/princeton'>
            <img style={{ height: "200px" }} src={require('../images/Princeton/PrincetonGallery1.jpeg')} />
            <div className='title'>Princeton</div>
            <div className="desc">Add a description of the image here</div>
          </Link>
        </div>

    </>
  )
}

export default Gallery