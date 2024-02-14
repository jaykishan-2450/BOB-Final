import React from 'react';
import {Image} from 'semantic-ui-react';
import './loading.css';
function Loading() {
  return (
    <div className="loader-container">
      <div className="loader"><h1>Cooking something special for you!</h1></div>
      <div className='loadimg'><Image src={process.env.PUBLIC_URL + '/spinner-light-bg.webp'} /></div>
    </div>
  );
}

export default Loading;