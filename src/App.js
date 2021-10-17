import './App.css'
import { Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import TimtDetails from './components/TimtDetails'
import TimtEdit from './components/TimtEdit'
import TimtList from './components/TimtList'
import TimtNew from './components/TimtNew'
import TimtHome from './components/TimtHome'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'


const App = () => {
    return (
      <div>
        <Navbar bg="myNav" variant="light">
          <Navbar.Brand className="logo order-md-0 mx-5 order-1">
            TIMT&hearts;
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/timt/new">Log a Mood</Nav.Link>
            <Nav.Link href="/timt">View Entries</Nav.Link>
            <LoginButton />
            <LogoutButton />
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