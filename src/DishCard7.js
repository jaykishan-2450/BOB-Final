import React from 'react'
import { useState } from "react";
import { Card, Icon, Image } from 'semantic-ui-react'
import './DishCard.css'
import ShortDesc from './ShortDesc';
import DishRating from './DishRating'
import Bookmark from './NewBookmark';
import {Label,Progress} from 'semantic-ui-react'
var imglink = process.env.PUBLIC_URL + '/cheesespaghetti.webp';
const DishCard7= () => (
  <Card className='dishcard img_wrap'>
    <Image src={imglink}/>
    <p className='img_description'>spaghetti, freshly grated parmesan, olives, etc.</p>
    <Card.Content>
      <Card.Header>
      <div>
        <span>Cheesy Spaghetti</span>
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
      <label className='difficulty-medium'>Difficulty level: medium<br/></label>
      <br/>
    <Label>
    <Icon name='user' /> 52 people made this dish in the past month
  </Label>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <ShortDesc/>
    </Card.Content>
  </Card>
)

export default DishCard7;