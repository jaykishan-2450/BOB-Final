import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import NewRecipeForm from './NewRecipeForm'
import Login from './login';
import { Link ,useNavigate} from 'react-router-dom';

const NewSidebar = ({ handleAddNote }) =>{
  const auth=localStorage.getItem("user");
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.clear();
    // navigate("/signup");//(addiotional naviogation feature)

  }

 return (
  

  <Sidebar
    as={Menu}
    animation='overlay'
    icon='labeled'
    inverted
    vertical
    visible
    width='thin'
  >
    <Header style={{ color: "white", margin: "10px", padding: "5px", border: "2px solid white", borderRadius: "14%" }}>BOOK OF BITES</Header>
    <Menu.Item >
      <Link to='/'>
        <Icon name='home' />
        Home
      </Link>
    </Menu.Item>
    <Menu.Item >
      <Link to='/find_recipes'>
        <Icon name='search' />
        Find recepies
      </Link>
    </Menu.Item>
    <Menu.Item as='a'>
      <NewRecipeForm handleAddNote={handleAddNote} />
    </Menu.Item>
    <Menu.Item>
      <Link to="/myrecipes"><Icon name='user' />My Recipes</Link>
    </Menu.Item>
    <Menu.Item >
      <Link to='/contact'><Icon name='conversation' />
      Contact Us</Link>
      
    </Menu.Item>
    <Menu.Item >
      {!localStorage.getItem("user")?<Link to='/signup'><Icon name='user' />Sign Up/Log In </Link>:<Link onClick={logout} to='/Signup'><Icon name='user' />Logout </Link>}
    </Menu.Item>
  </Sidebar>
)
}

export default NewSidebar