import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import TimtDetails from './components/TimtDetails'
import TimtEdit from './components/TimtEdit'
import TimtList from './components/TimtList'
import TimtNew from './components/TimtNew'

const App = () => {
    return (
      <div>
       <Router>
         <Switch>
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