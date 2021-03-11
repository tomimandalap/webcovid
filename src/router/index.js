import {Switch, Route} from 'react-router-dom'
import Home from '../view/Home'
import Countries from '../view/Countries'
import About from '../view/About'
import Detail from '../view/Detail'

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
      <Route path="/detail/:Slug" exact>
        <Detail/>
      </Route>
    </Switch>
  )
}
export default ROUTER