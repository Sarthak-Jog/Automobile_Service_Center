
import Nav from 'react-bootstrap/Nav';



export function NavigationBar(){
    return(
        
     
            <Nav className="justify-content-left-aligned" activeKey="/home">
              <Nav.Item>
                <Nav.Link href="#">Atomobile-Service-Center</Nav.Link>
              </Nav.Item>
              <Nav.Item></Nav.Item>
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='/about'>About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='/contact'>Contact</Nav.Link>
              </Nav.Item>
              
            </Nav>
    )
}

export default NavigationBar;