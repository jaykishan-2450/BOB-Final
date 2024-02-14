import React, { useState } from "react";
import { Icon, Card, Image, Button, Modal, ItemMeta } from 'semantic-ui-react'
import './DishCard.css'
import DishRating from './DishRating';
import DishGrid from "./DishGrid";
import './DishGrid.css'

import Bookmark from './NewBookmark';
import { Label, Progress } from 'semantic-ui-react';
import './ShortDesc.css'
import Video from './video';


var imglink = process.env.PUBLIC_URL + '/General.jpg';







let key;
const SearchBar = () => {

    const [products, setProrducts] = useState([]);
    const [open, setOpen] = React.useState(false);


    const ChangeHandle = (event) => {
        key = event.target.value;
        if (!key) setProrducts([])
    }
    const searchHandle = async () => {
        if (key) {
            let result = await fetch(`http://localhost:5000/search/${key}`);
            result = await result.json();
            setProrducts(result);
        } else {
            setProrducts([])
        }
    }

    return (
        <div>
            <input type="text" onChange={ChangeHandle} placeholder="Search Recipe" style={{ width: '400px', height: '60px', padding: '5px',fontSize:'large', margin: '5px 0px 20px 300px', borderRadius: '7px 0px 0px 7px' ,border:'3px solid '}} />
            <input type="button" onClick={searchHandle}  value="Search" style={{ height: '60px', borderRadius: '0px  7px 7px 0px', fontSize:'large',backgroundColor: '#a6f1a6',border:'3px solid ' }}></input>
            <div style={{ margin: '10px 10px 40px 140px' }}>

                {
                    products.map((item, index) =>
                        <ul style={{ display: 'inline-block', listStyle: 'none', margin: '10px 10px' }}>
                            <li>
                                <Card className='dishcard img_wrap' style={{ width: '27vw' }}>
                                    <Image src={imglink} />

                                    <Card.Content>
                                        <Card.Header>
                                            <div>
                                                <span>{item.Name}</span>
                                            </div>
                                        </Card.Header>
                                        <Card.Meta>
                                            <div>{item.Name}
                                            </div>
                                        </Card.Meta>
                                        <Card.Description>
                                            <span className='bookmark' style={{ fontSize: '27px' }}><Bookmark /></span>
                                            <DishRating />
                                            <br />
                                            <label className='difficulty-easy'>Difficulty level: easy<br /></label>
                                            <br />
                                            <Label>
                                                <Icon name='user' /> 43 people made this dish in the past month
                                            </Label>
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <Modal
                                            open={open}
                                            onClose={() => setOpen(false)}
                                            onOpen={() => setOpen(true)}
                                            trigger={<Button>Recipe & Ingredients</Button>}
                                        >
                                            <Modal.Header>Recipe & Ingredients</Modal.Header>
                                            <Modal.Content image scrolling>
                                                <Image size='medium' src='/General.jpg' wrapped />

                                                <Modal.Description>
                                                    <Video />
                                                    <br />
                                                    <h3>Recipe: </h3>
                                                    <p>
                                                        {

                                                            item.Method.map((step, ind) =>
                                                                <ul style={{ listStyle: 'none' }}>
                                                                    <li>{ind + 1}.){step}</li>
                                                                </ul>
                                                            )
                                                        }
                                                        <h3>Ingredients:-</h3>
                                                        <p>
                                                            {

                                                                item.Ingredients.map((step, ind) =>
                                                                    <ul style={{ listStyle: 'none' }}>
                                                                        <li>{ind + 1}.){step}</li>
                                                                    </ul>
                                                                )
                                                            }
                                                        </p>

                                                    </p>


                                                </Modal.Description>
                                            </Modal.Content>
                                            <Modal.Actions>
                                                <Button onClick={() => setOpen(false)} primary>
                                                    Done<Icon name='checkmark' className='check right' />
                                                </Button>
                                            </Modal.Actions>
                                        </Modal>
                                    </Card.Content>
                                </Card>
                            </li>
                        </ul>
                    )
                }
            </div>
            <hr></hr>
            <center><h2 style={{marginBottom:'30px'}}>Dishes You Might Like!</h2></center>
            <DishGrid/>
            
        </div>
    )
}
export { SearchBar };