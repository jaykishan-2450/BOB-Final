import React, { useEffect, useState } from "react";

import { Icon, Card, Image, Button, Modal, ItemMeta } from 'semantic-ui-react'
import './DishCard.css';
import './MyRecipes.css'
import DishRating from './DishRating';
import DishGrid from "./DishGrid";
import Bookmark from './NewBookmark';
import { Label, Progress } from 'semantic-ui-react';
import './ShortDesc.css'
import Video from './video';
import logo from './my-recipes-logo.png'


var imglink = process.env.PUBLIC_URL + '/General.jpg';
var logolink = process.env.PUBLIC_URL + '/my-recipes-logo.png';


const MyRecipes = () => {

    const [open, setOpen] = React.useState(false);

    let auth = localStorage.getItem('user');
    auth = JSON.parse(auth);
    let user = auth.email;
    let [recipes, setRecipes] = useState([]);
    useEffect(() => {
        const fun = async () => {
            let result = await fetch(`http://localhost:5000/myrecipes/${user}`);
            result = await result.json();
            setRecipes(result);
            // console.log(recipes);
        }
        fun();
    }, []);


    return (
        <div className="main" >
            

            {
                recipes.length>0?
                
                    <>
                    <div className="logo"><img src={logo}/></div>
                    {recipes.map((item, index) =>
                        <ul style={{ display: 'inline-block', listStyle: 'none', margin: '10px 10px' }}>
                            <li>
                                <Card className='dishcard img_wrap' style={{ width: '27vw' }}>
                                    <Image src={imglink} />
    
                                    <Card.Content>
                                        <Card.Header>
                                            <div>
                                                <span>{item.name}</span>
                                            </div>
                                        </Card.Header>
                                        <Card.Meta>
                                            <div>{item.name}
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
                                            trigger={<Button>Recipe</Button>}
                                        >
                                            <Modal.Header>Recipe</Modal.Header>
                                            <Modal.Content image scrolling>
                                                <Image size='medium' src='/General.jpg' wrapped />
    
                                                <Modal.Description>
                                                    <Video />
                                                    <br />
                                                    <h3>Recipe: </h3>
                                                    <p>
                                                        {
    
                                                            item.method.map((step, ind) =>
                                                                <ul style={{ listStyle: 'none' }}>
                                                                    <li>{ind + 1}.){step}</li>
                                                                </ul>
                                                            )
                                                        }
    
    
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
                </>
                                                    
    :<h1>No recipes added yet!</h1>
            }

            



        </div>

    )

}
export default MyRecipes;