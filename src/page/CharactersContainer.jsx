import React, { Component } from 'react';

import SearchBox from "../CharactersContainer/SearchBox"
import Result from "../CharactersContainer/Result"


class CharactersContainer extends Component {
    state = { 
        value:"",
        loading: false,
        cardnone:false,
        arrData:[]
     }
    
    componentDidMount(){
        fetch("https://breakingbadapi.com/api/characters")
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({
                arrData:data
            })
        })
    }

    handleChange=(e)=>{
        let name = e.target.value
        this.setState({
            value:name
        })
        fetch(`https://www.breakingbadapi.com/api/characters?name=${name}`)
        .then((res)=>{
            this.setState({
                loading:true,
                cardnone:true
            })
            return res.json()
        })
        .then((data)=>{
            this.setState({
                loading:false,
                cardnone:false,
                arrData:data
            })
            console.log(data);
        })
        // console.log(e.target.value); 
    }

    render() { 
        return (<>
            <div className='container'>
                <SearchBox
                    handleChange={this.handleChange}
                ></SearchBox>
                <Result
                    cardnone={this.state.cardnone}
                    loading={this.state.loading}
                    arrData={this.state.arrData}
                ></Result>
            </div>
        </>);
    }
}
 
export default CharactersContainer;