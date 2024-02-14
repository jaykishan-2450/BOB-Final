import React from 'react'
import { Button, Icon, Image, Modal } from 'semantic-ui-react'
import './ShortDesc.css'
import Video from './video'
const ShortDesc = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button>Recipe</Button>}
    >
      <Modal.Header>Recipe</Modal.Header>
      <Modal.Content image scrolling>
        <Image size='medium' src='/lemoncake.webp' wrapped />

        <Modal.Description>
          <Video/>
          <br/>
          <h3>Recipe: </h3>
          <p>
          1. Preheat oven to 350°F (177°C). Grease a 9x5-inch (or 8x4-inch) loaf pan.<br/>
2. In a medium bowl combine the flour, baking powder, lemon zest, and salt. Set aside.<br/>
3. In the bowl of a stand mixer fitted with the paddle attachment (or using an electric mixer), cream the butter and sugar together at medium-high speed until pale and fluffy, about 4-6 minutes. Scrape the sides of the bowl as needed.<br/>
4. With the mixer running on low-speed, add the eggs one at a time, then beat in the vanilla extract and lemon juice. Beat on medium-high speed until combined.<br/>
5. With the mixer on low, add about one-third of the flour mixture and mix until almost combined, then add half the buttermilk and mix until just combined. Repeat with another third of flour mixture and then the last half of the buttermilk, ending with the last third of the flour. Beat until just incorporated.<br/>
6. Scrape the batter into the prepared loaf pan and bake for 45-55 minutes until the cake is golden brown and a toothpick comes out mostly clean with only a couple moist crumbs. Baking times vary, so keep an eye on yours.<br/>
7.Let the cake cool for about 15 minutes in the pan. Stir together the lemon juice and confectioners sugar for the lemon syrup. Carefully invert the loaf pan, and transfer the cake to a cooling rack, then brush the syrup on the cake while its still warm. Allow cake to cool completely.<br/>
8.When the cake is cooled, combine all the icing ingredients, start with 1 tbsp lemon juice and milk and add the remaining lemon juice as needed. The icing should be thick and not runny. Pour icing over cake and let dry before serving.<br/>
        </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} primary>
          Done<Icon name='checkmark' className='check right'/>
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ShortDesc;