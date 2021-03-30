import { Route, Switch } from "react-router-dom";
import BlogHome from "./BlogHome"
import PostForm from "./PostForm"
import PostDetails from "./PostDetails"
import NotFound from "./NotFound"


const Routes = () => {
    return (
      <div>
        <Switch>
        <Route exact path="/"><BlogHome /></Route>
        <Route exact path="/new"><PostForm /></Route>
        <Route exact path="/:postId"><PostDetails /></Route>
        <Route><NotFound /></Route>  
        </Switch>     
        </div>
    );
  }

export default Routes;
