import React from 'react'
import { useState } from "react";
import { Card, Icon, Image } from 'semantic-ui-react'
import './DishCard.css'
import ShortDesc from './ShortDesc';
import DishRating from './DishRating'
import Bookmark from './NewBookmark';
import {Label,Progress} from 'semantic-ui-react'
var imglink = process.env.PUBLIC_URL + '/midnightspaghetti.webp';
const DishCard6= () => (
  <Card className='dishcard img_wrap'>
    <Image src={imglink}/>
    <p className='img_description'>spaghetti, parsley, tomatoes, pepper, etc.</p>
    <Card.Content>
      <Card.Header>
      <div>
        <span>Midnight Spaghetti</span>
      </div>
      </Card.Header>
      <Card.Meta>
        <div>Italian Cuisine
        </div>
      </Card.Meta>
      <Card.Description>
        <span className='bookmark' style={{fontSize:'27px'}}><Bookmark/></span>
    <DishRating/>
    <br/>
      <label className='difficulty-hard'>Difficulty level: hard<br/></label>
      <br/>
    <Label>
    <Icon name='user' /> 59 people made this dish in the past month
  </Label>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <ShortDesc/>
    </Card.Content>
  </Card>
)

export default DishCard6;