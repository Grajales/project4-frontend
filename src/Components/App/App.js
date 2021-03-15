import React, { Component } from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Home from "../Home/Home"; 
import Header from '../Header/Header' 
import Footer from '../Footer/Footer'
import ThemeDetail from '../Theme1/Theme1'
// import Location from '../Location/Location'
import ContactUs from '../ContactUs/ContactUs'
import axios from "axios";
const backendUrl =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:3000/api";
// const backendUrl =
//   process.env.REACT_APP_BACKEND_URL || "https://project4-backend.herokuapp.com/api";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    axios.get(`${backendUrl}/comments`).then((response) => {
      
      this.setState({
        comments: response.data.comments,
      });
    });
  }

  addComment(feedback, id, name, email) {
    const themeId = parseInt(id)
    // await axios.post(`${backendUrl}/comments`, { feedback, themeId });
    console.log(feedback);
    console.log(themeId);
    console.log(name);
    console.log(email);
  }

  render() {
    // console.log("App dot JS",this.state.comments);
    return (
      <div className="App">
        <Header></Header>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        
        <main>
          <Switch>
            <Route exact path='/' render={routerProps =>  
            <Home {...routerProps} {...this.state} />
            }>
            </Route>
            
            {/* <Route path='/location' render={routerProps =>  
            <Location />
            }>
            </Route> */}

            <Route path='/contact' render={routerProps =>  
            <ContactUs createComments={this.addComment} />
            }>
            </Route>

            <Route path='/theme/:id' render={routerProps =>  
            <ThemeDetail createComments={this.addComment} {...routerProps} {...this.state} />
            }>
            </Route>
          </Switch>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
