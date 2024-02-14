import { Button, Card, CardMeta, Popup } from "semantic-ui-react"

const Recipes = (props) => {
    const {RecipeName,dishtype,description} = props
    // console.log('URL: ',videoUrl.substring(32))
    // console.log('Time: ',hour,minute,seconds,timeInSeconds)
    return (
        <Card>
            <iframe
                width="290"
                height="150"
                src={''}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
    <Card.Content>
      <Card.Header>{RecipeName}</Card.Header>
        <CardMeta>
        {dishtype}

        </CardMeta>

      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <div className='ui two buttons'>
          <Popup content='View functionality will be added in future.' trigger={<Button basic color='blue'>
            View
          </Button>} />
          <Popup content='Edit functionality will be added in future.' trigger={<Button basic color='green'>
            Edit
          </Button>} />
        </div>
      </Card.Content>
        </Card>
    )
}

export default Recipes