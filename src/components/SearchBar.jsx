import React from 'react';
class SearchBar extends React.Component{
    state = {
        search : ""
    }

    onInputChange = (e)=>{
        this.setState({search:e.target.value})
    }
   
    onFormSubmit = (e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state.search)
    }

  

    render() {
         return <div style = {{marginTop:"20px"}} className = "ui container segment">
              <form onSubmit = {this.onFormSubmit} className="ui form" action="">
              <div className="field">
              <h2>Picky Stock Photos</h2>
              <input value = {this.state.search} onChange={this.onInputChange} placeholder="Search Photos" name="search" type="text"/>
              </div>              
              </form>
          </div>
    
    }
}
export default SearchBar;