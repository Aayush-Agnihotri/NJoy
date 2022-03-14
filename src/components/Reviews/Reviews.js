import React, { useState } from 'react';
import CommentsBlock from 'simple-react-comments';

//Page 0
import { commentsData } from './Data.ts';
//Page 1
import { SeasideData } from './SeasideData.ts';
//Page 2
import { SixData } from './SixData.ts';
//page 3
import { AtlanticData } from './AtlanticData.ts';
//Page 4
import { PncData } from './PncData.ts';
//Page 5
import { PrudentialData } from './PrudentialData.ts'
//Page 6
import { ParkData } from './ParkData.ts';
//Page 7
import { LibertyData } from './LibertyData.ts';
//Page 8
import { GardensData } from './GardensData.ts';
//Page 9
import { MallData } from './MallData.ts';
//Page 10
import { PrincetonData } from './PrincetonData.ts';
 

const Reviews = (props) => {

  const [count, setCount] = useState(0);

  function handleUpdate() {
    setCount(count + 1);
  }

  let reviewfile;

  switch (props.review_num) {
    default:
      reviewfile = commentsData;
      break;
    case 1:
      reviewfile = SeasideData;
      break;
    case 2:
      reviewfile = SixData;
      break;
    case 3:
      reviewfile = AtlanticData;
      break;
    case 4:
      reviewfile = PncData;
      break;
    case 5:
      reviewfile = PrudentialData;
      break;
    case 6:
      reviewfile = ParkData;
      break;
    case 7:
      reviewfile = LibertyData;
      break;
    case 8:
      reviewfile = GardensData;
      break;
    case 9:
      reviewfile = MallData;
      break;
    case 10:
      reviewfile = PrincetonData;
      break;
    }

    return (
        <>
        <div>
          <CommentsBlock
            comments={reviewfile}
            isLoggedIn={true}
            onSubmit={text => {
              if (text.length > 0) {
                reviewfile.push({
                      authorUrl: '#',
                      avatarUrl: 'https://i.pinimg.com/236x/c9/0a/d7/c90ad748ff7e3287e52d138c6873d9c1.jpg',
                      createdAt: new Date(),
                      fullName: 'User',
                      text,
                    },
                  );
                handleUpdate();
              }
            }}
          />
        </div>
        </>
      );

}
 
export default Reviews;