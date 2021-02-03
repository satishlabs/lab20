import { Component } from "react";
import { Route } from "react-router-dom";

class CMSBody extends Component{
    render(){
        return(
            <div className="container">
               <Route path="/" render ={()=><h1>Home Page displayed!</h1>} exact />

               <Route path="/courses" render ={()=><h1>Courses Page displayed!</h1>} exact />

               <Route path="/about" render ={()=><h1>About US Page displayed!</h1>} exact />

               <Route path="/contact" render ={()=><h1>Contact US Page displayed!</h1>} exact />
            </div>
        );
    }
}
export default CMSBody;