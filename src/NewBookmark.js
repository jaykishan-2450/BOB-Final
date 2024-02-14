import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBookmark as solidBookmark} from '@fortawesome/free-solid-svg-icons';
import {faBookmark as regularBookmark} from '@fortawesome/free-regular-svg-icons';
import './DishCard.css';
const Bookmark = () => {
  // State to track the bookmark status
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Function to handle bookmark click
  const handleBookmarkClick = () => {
    // Toggle the bookmark status
    setIsBookmarked((prev) => !prev);
  };

  return (
    <div>
      <div onClick={handleBookmarkClick} style={{cursor:'pointer'}}>
        {isBookmarked ? (
          <FontAwesomeIcon icon={solidBookmark} />
        ) : (
            <FontAwesomeIcon icon={regularBookmark} />
        )}
      </div>
    </div>
  );
};

export default Bookmark;
