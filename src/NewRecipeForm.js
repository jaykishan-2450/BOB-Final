import { Button, Form, Grid, GridRow, Icon, Menu, Modal, Popup } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NewRecipeForm.css";


const NewRecipeForm = ({ handleAddNote }) => {
  const navigate = useNavigate()

  // useEffect(()=>{
  //   let user=localStorage.getItem("user");
  //   if(!user){ navigate("/signup")}
  // })

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    RecipeName: '',
    dishtype: '',
    description: '',
  })

  const handleChange = (event) => {
    // console.log('handle change called',event)
    const { name, value } = event.target
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  const handleSubmitNote = async (event) => {
    // event.preventDefault()
    // handleAddNote(formData)
    let auth = localStorage.getItem('user');
    auth = JSON.parse(auth);
    if (!auth) { alert("please sign in first"); navigate("/signup"); }
    else {
      let recipe = {
        name: formData.RecipeName,
        type: formData.dishtype,
        method: formData.description.split("."),
        user: auth.email
      };
      // console.log(recipe)
      if (recipe.name.length > 0 && recipe.name.length > 0 && recipe.name.length > 0) {

        setFormData({
          RecipeName: '',
          dishtype: '',
          description: '',
        });
        let result = await fetch("http://localhost:5000/addrecipe", {
          method: 'post',
          body: JSON.stringify(recipe),
          headers: {
            'Content-Type': 'application/json'
          }
        })


        setOpen(false)
      }else{
        alert("please fill all the fields")
      }


      }
    }

  


const { RecipeName, dishtype, description } = formData
return (
  <Modal
    onClose={() => setOpen(false)}
    onOpen={() => setOpen(true)}
    open={open}
    trigger={<Menu.Item><Icon name='plus' />New Recipe</Menu.Item>}
  >
    <Modal.Header>Add a new Recipe</Modal.Header>
    {/* {console.log('FORM DATA: ',formData)} */}
    <Form className="add-note-form">
      <Form.Field>
        <label>What name would you like to give to this recipe?</label>
        <input placeholder="Enter Name" value={RecipeName} name='RecipeName' onChange={handleChange} />
      </Form.Field>
      <Form.Field>
        <label>Dish Type</label>
        <input placeholder="dessert/Indian/Italian..." value={dishtype} name='dishtype' onChange={handleChange} />
      </Form.Field>
      <Form.Field>
        <label>Recipe Instructions</label>
        <textarea placeholder="step-by-step instructions(use full stop to end an instruction(.))" value={description} name='description' onChange={handleChange} />
      </Form.Field>
    </Form>

    <Modal.Actions>
      <Popup content='Add this recipe' trigger={<Button
        onClick={() => { handleSubmitNote(); setOpen(false) }}
        content="Add this masterpiece!"
        labelPosition="right"
        icon="check right"
        positive
        type="submit"
      />} />

    </Modal.Actions>
  </Modal>
);
};

export default NewRecipeForm;
