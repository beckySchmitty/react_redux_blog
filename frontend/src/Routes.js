import { Route, Switch } from "react-router-dom";
import Home from "./Home"
import PostForm from "./components/PostForm"
import NotFound from "./extra/NotFound"


const Routes = () => {

    return (
      <div>
        <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/new"><PostForm/></Route>
        <Route exact path="/:postId"><Post /></Route>
        <Route><NotFound /></Route>  
        </Switch>     
        </div>
    );
  }

export default Routes;
