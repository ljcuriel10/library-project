import React from 'react';
import {Container, FormControl, Nav, Navbar, Form, Button} from 'react-bootstrap'
import { IconContext } from 'react-icons';
import {FaHome, FaHiking, FaRegPaperPlane} from 'react-icons/fa'
import { GiRibbonMedal, GiBookshelf } from 'react-icons/gi'
import { MdOutlineFiberNew } from 'react-icons/md'



const NavigationBar = () => (
    <IconContext.Provider value={{style: {color:'orange'}, size: "1.5em"}}>
        <Navbar bg='dark' variant='dark' expand="lg">
            <Container>
            <Navbar.Brand className='text-capitalize' href="/"><GiBookshelf /> Luis's Bookstore</Navbar.Brand>
            </Container>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='me-auto align-middle'>
                    <Nav.Item>
                        <Nav.Link href='/'><FaHome/> Home </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/best-sellers' className='text-wrap'><GiRibbonMedal />Best Sellers</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/new-releases"><MdOutlineFiberNew size={'2em'}/> New Releases</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/about'><FaHiking /> About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/contact'><FaRegPaperPlane /> Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Form className='d-flex'>
                    <FormControl 
                        type='search'
                        placeholder='Search'
                        className='me-2'
                        aria-label='Search'
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
       
        </Navbar>
    </IconContext.Provider>
  )


export default NavigationBar