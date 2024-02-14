import React from 'react'
import {Grid} from 'semantic-ui-react'
import './DishGrid.css'
import DishCard1 from './DishCard1';
import DishCard2 from './DishCard2';
import DishCard3 from './DishCard3';
import DishCard4 from './DishCard4';
import DishCard5 from './DishCard5';
import DishCard6 from './DishCard6';
import DishCard7 from './DishCard7';
import DishCard8 from './DishCard8';
import DishCard9 from './DishCard9';
const DishGrid = () => (
  <Grid columns={3}>
    <Grid.Row className='gridrow'>
      <Grid.Column>
        <DishCard1/>
      </Grid.Column>
      <Grid.Column>
        <DishCard2/>
      </Grid.Column>
      <Grid.Column>
        <DishCard3/>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row className='gridrow'>
      <Grid.Column>
        <DishCard4/>
      </Grid.Column>
      <Grid.Column>
        <DishCard5/>
      </Grid.Column>
      <Grid.Column>
        <DishCard6/>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row className='gridrow'>
      <Grid.Column>
        <DishCard7/>
      </Grid.Column>
      <Grid.Column>
        <DishCard8/>
      </Grid.Column>
      <Grid.Column>
        <DishCard9/>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default DishGrid