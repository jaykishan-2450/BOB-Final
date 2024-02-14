import React from 'react'
import { Icon, Card, Image } from 'semantic-ui-react'
import './DishCard.css'
import ShortDesc from './ShortDesc';
import DishRating from './DishRating'
import Bookmark from './NewBookmark';
import {Label,Progress} from 'semantic-ui-react'
var imglink = process.env.PUBLIC_URL + '/lemoncake.webp';
const DishCard1= () => (
  <Card className='dishcard img_wrap'>
    <Image src={imglink}/>
    <p className='img_description'>salted butter, vanilla extract, buttermilk, baking powder, etc.</p>
    <Card.Content>
      <Card.Header>
      <div>
        <span>Lemon Cake</span>
      </div>
      </Card.Header>
      <Card.Meta>
        <div>Dessert
        </div>
      </Card.Meta>
      <Card.Description>
        <span className='bookmark' style={{fontSize:'27px'}}><Bookmark/></span>
    <DishRating/>
    <br/>
      <label className='difficulty-easy'>Difficulty level: easy<br/></label>
      <br/>
    <Label>
    <Icon name='user' /> 43 people made this dish in the past month
  </Label>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <ShortDesc/>
    </Card.Content>
  </Card>
)

export default DishCard1;