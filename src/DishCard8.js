import React from 'react'
import { useState } from "react";
import { Card, Icon, Image } from 'semantic-ui-react'
import './DishCard.css'
import ShortDesc from './ShortDesc';
import DishRating from './DishRating'
import Bookmark from './NewBookmark';
import {Label,Progress} from 'semantic-ui-react'
var imglink = process.env.PUBLIC_URL + '/Dosa.webp';
const DishCard8= () => (
  <Card className='dishcard img_wrap'>
    <Image src={imglink}/>
    <p className='img_description'>suji, refined oil, curd, water, salt to taste, etc.</p>
    <Card.Content>
      <Card.Header>
      <div>
        <span>HomeMade Dosa</span>
      </div>
      </Card.Header>
      <Card.Meta>
        <div>Indian Cuisine
        </div>
      </Card.Meta>
      <Card.Description>
        <span className='bookmark' style={{fontSize:'27px'}}><Bookmark/></span>
    <DishRating/>
    <br/>
      <label className='difficulty-medium'>Difficulty level: medium<br/></label>
      <br/>
    <Label>
    <Icon name='user' /> 75 people made this dish in the past month
  </Label>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <ShortDesc/>
    </Card.Content>
  </Card>
)

export default DishCard8;