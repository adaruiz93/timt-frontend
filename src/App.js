import './App.css'
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import TimtDetails from './components/TimtDetails'
import TimtEdit from './components/TimtEdit'
import TimtList from './components/TimtList'
import TimtNew from './components/TimtNew'
import TimtHome from './components/TimtHome'


const App = () => {
    return (
      <div>
        <Navbar bg="myNav" variant="light">
          <Navbar.Brand>
            TIMT
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Home&hearts;</Nav.Link>
          </Nav>

        </Navbar>
       <Router>
         <Switch>
          <Route exact path = '/' render={(routerProps) => <TimtHome {...routerProps} />} />
          <Route exact path = '/timt' render={(routerProps) => <TimtList {...routerProps} />} />
          <Route exact path = '/timt/new' render={(routerProps) => <TimtNew {...routerProps} />} />
          <Route exact path = '/timt/:id' render={(routerProps) => <TimtDetails {...routerProps} />} />
          <Route exact path = '/timt/:id/edit' render={(routerProps) => <TimtEdit {...routerProps} />} />
         </Switch>
       </Router>
      </div>
    )
  }


export default App