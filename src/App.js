
import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import CMSHeader1 from './CMSHeader1';
import CMSBody from './CMSBody';
import CMSFooter from './CMSFooter';

import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component{
  componentDidMount(){
    console.log("App - DidMount-",this.props);
  }

  componentWillUnmount(){
    console.log("App - WillUnmount-",this.props);
  }

  render(){
    return(
      <BrowserRouter>
        <div className="card">
          <CMSHeader1 />
          <CMSBody />
          <br/>
          <br/><br/><br/><br/>
          <br/><br/><br/><br/>
          <CMSFooter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
