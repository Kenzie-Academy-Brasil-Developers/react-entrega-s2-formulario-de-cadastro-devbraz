import {Switch, Route} from 'react-router-dom'
import Register from '../pages/Register'
import Sucess from '../pages/Sucess'

export default function Router(){



  return (

    <Switch>
      <Route exact path={'/'} component={Register}></Route>
      <Route path={'/sucess/:user'} component={Sucess}></Route>
    </Switch>
    
  )
}