import React, { Component } from 'react';
import "./Display.css"

class Display extends Component {
    renderOutput(){
        const StarArray= this.props.stars;
        const mapRows= StarArray.map(star=>{
            return <tr>
                      <td><img src={star.pictureUrl} /></td>
                      <td>{star.name}</td>
                      <td>{star.popularity}</td>
                      <td><button value={star.name} className="deletebutton" onClick={this.props.OnClickDeleteEventHandler}>Delete</button></td>
                    </tr>
        })
        return mapRows
    }
    render() {
        return (
            <div className="container">
                <table>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Action</th>
                    </tr>
                    {this.renderOutput()}
                </table>
            </div>
        );
    }
}

export default Display;