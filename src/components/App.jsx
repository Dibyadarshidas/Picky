import React from 'react';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import SearchBar from './SearchBar';


class App extends React.Component{
    state = {
        images : []
    }
    componentDidMount(){
        console.log("Hello")
    }
      
    onFormSubmit=async (search)=>{
       
       const response =  await unsplash.get('/search/photos', {         
            params : {
                query : search,
                page : 1,
                per_page : 50
            }
        })
       
        this.setState({images:response.data.results})
        
        
    }
    render(){
        return <>    
         <SearchBar onSubmit={this.onFormSubmit} />
         <h2 className = "ui container">{this.state.images.length} photos found </h2> 
        <ImageList images={this.state.images}/>
        
        <br/>
        <footer className = "ui container" ><h2>Created with ❤ by Dibyadarshi Das</h2></footer>
         </>
    }
}
export default App;