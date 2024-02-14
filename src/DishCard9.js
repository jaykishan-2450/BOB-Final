import React from 'react'
import { useState } from "react";
import { Card, Icon, Image } from 'semantic-ui-react'
import './DishCard.css'
import ShortDesc from './ShortDesc';
import DishRating from './DishRating'
import Bookmark from './NewBookmark';
import {Label, Progress} from 'semantic-ui-react'
var imglink = process.env.PUBLIC_URL + '/Idli.webp';
const DishCard9= () => (
  <Card className='dishcard img_wrap'>
    <Image src={imglink}/>
    <p className='img_description'>urad dal, fenugrek seeds, water, salt, oil, etc.</p>
    <Card.Content>
      <Card.Header>
      <div>
        <span>Idli</span>
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
    <Icon name='user' /> 23 people made this dish in the past month
  </Label>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <ShortDesc/>
    </Card.Content>
  </Card>
)

export default DishCard9;