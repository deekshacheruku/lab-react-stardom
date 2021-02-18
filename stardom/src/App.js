import React, { Component } from 'react';
import Prostar from "./resources/prostars.json";
import Display from "./components/Display.jsx";
import Header from "./components/Header.jsx";
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      StarArray:[Prostar[0],Prostar[1],Prostar[2],Prostar[3],Prostar[4]]
    }
  }

  OnClickEventHandler = () => {
    let RandomStar = Prostar[Math.floor(Math.random() * Prostar.length)];
    this.setState(PreviousState=>({
      StarArray:[...PreviousState.StarArray,RandomStar]
    }))
  }

  OnClickSortByNameEventHandler = () => {
    this.setState(() => ({
      StarArray: this.state.StarArray.sort((a,b) => a.name > b.name ? 1 : -1)
    }))
  }

  OnClickSortByPopularityEventHandler = () => {
    this.setState(() => ({
      StarArray: this.state.StarArray.sort((a,b) => a.popularity > b.popularity ? -1 : 1)
    }))
  }

  DeleteHandler = (event) =>{
    let StarName = event.target.value;
    const UpdatedRows = this.state.StarArray.filter(star => {
      if(star.name != StarName)
        return star
    })
    console.log(UpdatedRows)
    this.setState( () => ({
      StarArray : UpdatedRows
    }))
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="buttonsdiv">
          <button className="button" onClick={this.OnClickEventHandler}>Get Random ProStar</button>
          <button className="sortname button" onClick={this.OnClickSortByNameEventHandler}>Sort By Name</button>
          <button className="sortpopularity button" onClick={this.OnClickSortByPopularityEventHandler}>Sort By Popularity</button>
        </div>
        <Display stars={this.state.StarArray} OnClickDeleteEventHandler={this.DeleteHandler}></Display>

      </div>
    );
  }
}

export default App;