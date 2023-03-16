import React from 'react'
import {
     Navbar,
     Container,
      FormControl, 
      Dropdown, 
      Badge,
      Nav
     } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa/'
import { Link } from 'react-router-dom'
    

const header = () => {
  return (
    <Navbar bg="dark" variant='"dark' style={{height:80}}>
        <Container>
            <Navbar.Brand>
                {/* <Link href="/"> Shopping</Link> */}
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl style={{width: 500}}
                placeholder="search a product"
                className='m-auto'>

                </FormControl>
            </Navbar.Text>
            <Nav>
                <Dropdown alignRight>
                    <Dropdown.Toggle variant='success'>
                        <FaShoppingCart color="white" fontSize="25px" />
                        <Badge style={{"padding":5}}>{10}</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{minWidth:370}}>
                        <span style={{padding:10}}>Cart is Empty</span>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default header