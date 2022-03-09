import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BasicInfo from "./components/BasicInfo";
// Creating a class component
class App extends Component {
  //Setting the constructor up to take in props
  constructor(props) {
    super();
    //Creating the state and assigning an array of objects inside
    this.state = {
      person: [
        {
          name: "Emmanuel",
          phone: "400-000-0000",
          dob: "80-00-0000",
        },
        {
          name: "Manny",
          phone: "200-000-0000",
          dob: "40-00-0000",
        },
        {
          name: "Manster",
          phone: "600-000-0000",
          dob: "20-00-0000",
        },
        {
          name: "Harold",
          phone: "300-000-0000",
          dob: "11-00-2001",
        },
      ],
    };
  }
  //Rendering the data in the component
  render() {
    return (
      // Applying a prop to BasicInfo and calling the BasicInfo component
      <div className="App">
        <BasicInfo individual={this.state.person} />
      </div>
    );
  }
}
export default App;
