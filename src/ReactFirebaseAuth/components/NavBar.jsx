import React, {useState} from 'react'
import { Navbar, Button, Nav, Container } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { useAuth } from '../Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
  const {logout} = useAuth()
  const [redirectPossible, setRedirectPossible] = useState(false)

  function something() {
    setRedirectPossible(true)
    logout()
  }
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
      {redirectPossible && <Redirect to="/"/>}
        <Navbar.Brand>Auth App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Item className="p-0 mr-2 mb-md-2">
            <Button size="sm" onClick={something}>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </Button>
          </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
