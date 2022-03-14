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
            <img src={require('../images/Seaside/SeasideGallery1.jpeg')} />
            <div className='title'>Seaside Heights Boardwalk</div>
            <div className="desc">Add a description of the image here</div>
          </Link>
        </div>

        <div className="gallery">
          <Link to='/six'>
            <img src={require('../images/home/forest.jpg')} />
            <div className='title'>Six Flags</div>
            <div className="desc">Add a description of the image here</div>
          </Link>
        </div>

        <div className="gallery">
          <Link to='/atlantic'>
            <img src={require('../images/home/forest.jpg')} />
            <div className='title'>Atlantic City</div>
            <div className="desc">Add a description of the image here</div>
          </Link>
        </div>

        <div className="gallery">
          <Link to='/Pnc'>
            <img src={require('../images/home/forest.jpg')} />
            <div className='title'>PNC Bank Art Center</div>
            <div className="desc">Add a description of the image here</div>
          </Link>
        </div>

        <div className="gallery">
          <Link to='/Prudential'>
            <img src={require('../images/home/forest.jpg')} />
            <div className='title'>Prudential Center</div>
            <div className="desc">Add a description of the image here</div>
          </Link>
        </div>

        <div className="gallery">
          <Link to='/park'>
            <img src={require('../images/home/forest.jpg')} />
            <div className='title'>Liberty State Park</div>
            <div className="desc">Add a description of the image here</div>
          </Link>
        </div>

        <div className="gallery">
          <Link to='/liberty'>
            <img src={require('../images/home/forest.jpg')} />
            <div className='title'>Liberty Science Center</div>
            <div className="desc">Add a description of the image here</div>
          </Link>
        </div>

        <div className="gallery">
          <Link to='/gardens'>
            <img src={require('../images/home/forest.jpg')} />
            <div className='title'>Botanical Gardens</div>
            <div className="desc">Add a description of the image here</div>
          </Link>
        </div>

        <div className="gallery">
          <Link to='/mall'>
            <img src={require('../images/home/forest.jpg')} />
            <div className='title'>American Dream Mall</div>
            <div className="desc">Add a description of the image here</div>
          </Link>
        </div>

        <div className="gallery">
          <Link to='/princeton'>
            <img src={require('../images/home/forest.jpg')} />
            <div className='title'>Princeton</div>
            <div className="desc">Add a description of the image here</div>
          </Link>
        </div>

    </>
  )
}

export default Gallery