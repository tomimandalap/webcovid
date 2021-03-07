import {Switch, Route} from 'react-router-dom'
import Home from '../view/Home'
import Countries from '../view/Countries'
import About from '../view/About'

const ROUTER = () => {
  return(
    <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/countries" exact>
        <Countries/>
      </Route>
      <Route path="/about" exact>
        <About/>
      </Route>
    </Switch>
  )
}
export default ROUTER