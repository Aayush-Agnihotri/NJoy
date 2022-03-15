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
            <div className="desc">The Seaside Heights Boardwalk is home to Casino Pier and Breakwater Beach. Hours upon hours of fun can be had on this Ocean County boardwalk!</div>
          </Link>
        </div>

        <div className="gallery">
          <Link to='/six'>
            <img style={{ height: "200px" }} src={require('../images/Six/SixGallery1.jpg')} />
            <div className='title'>Six Flags</div>
            <div className="desc">Today, Six Flags is the gold standard of regional theme park entertainment. The parks are bigger and bolder than ever, offering cutting-edge, one-of-kind rides and so much more.</div>
          </Link>
        </div>

        <div className="gallery">
          <Link to='/atlantic'>
          <img style={{ height: "200px" }} src={require('../images/Atlantic/AtlanticGallery1.jpg')} />
            <div className='title'>Atlantic City</div>
            <div className="desc">Atlantic City, often known by its initials A.C., is a coastal resort city in Atlantic County, New Jersey, United States, known for its casinos, boardwalk, and beaches.</div>
          </Link>
        </div>

        <div className="gallery">
          <Link to='/pnc'>
          <img style={{ height: "200px" }} src={require('../images/PNC/PncGallery3.jpeg')} />
            <div className='title'>PNC Bank Art Center</div>
            <div className="desc">The PNC Bank Arts Center is one of Americas premier amphitheaters located in Holmdel Township, NJ. From May to September you can catch the biggest and best events live.</div>
          </Link>
        </div>

        <div className="gallery">
          <Link to='/prudential'>
            <img style={{ height: "200px" }} src={require('../images/Prudential/PrudentialGallery3.jpeg')} />
            <div className='title'>Prudential Center</div>
            <div className="desc">Prudential Center is a multi-purpose indoor arena in the central business district of Newark, New Jersey, United States. It was designed by Populous and Morris Adjmi Architects.</div>
          </Link>
        </div>

        <div className="gallery">
          <Link to='/park'>
            <img style={{ height: "200px" }} src={require('../images/Park/ParkGallery1.jpg')} />
            <div className='title'>Liberty State Park</div>
            <div className="desc">A two-mile promenade, Liberty Walk links two picnic and playground areas, the Nature Center and the CRRNJ Terminal while presenting visitors with a sweeping view of the Hudson River.</div>
          </Link>
        </div>

        <div className="gallery">
          <Link to='/liberty'>
            <img style={{ height: "200px" }} src={require('../images/Liberty/LibertyGallery3.jpg')} />
            <div className='title'>Liberty Science Center</div>
            <div className="desc">Liberty Science Center's mission is to inspire the next generation of scientists and excite learners of all ages about the power, promise, and pure fun of science and technology.</div>
          </Link>
        </div>

        <div className="gallery">
          <Link to='/gardens'>
            <img style={{ height: "200px" }} src={require('../images/Gardens/GardensGallery3.jpg')} />
            <div className='title'>Botanical Gardens</div>
            <div className="desc">The NJ Botanical Gardens includes 96 acres of specialty gardens surrounded by 1,000 acres of woodlands with extensive views of the Ramapo Mountains and the Skylands Manor.</div>
          </Link>
        </div>

        <div className="gallery">
          <Link to='/mall'>
            <img style={{ height: "200px" }} src={require('../images/Mall/MallGallery3.jpg')} />
            <div className='title'>American Dream Mall</div>
            <div className="desc">American Dream is located in New Jersey, just a heartbeat away from New York City. Feel the excitement of making memories again at the newest place for indoor family entertainment.</div>
          </Link>
        </div>

        <div className="gallery">
          <Link to='/princeton'>
            <img style={{ height: "200px" }} src={require('../images/Princeton/PrincetonGallery1.jpeg')} />
            <div className='title'>Princeton</div>
            <div className="desc">Princeton offers a community of 30,000 residents who live in tree-lined neighborhoods, enjoying a central NJ location and transit network that puts it a quick train ride away from NYC.</div>
          </Link>
        </div>

    </>
  )
}

export default Gallery