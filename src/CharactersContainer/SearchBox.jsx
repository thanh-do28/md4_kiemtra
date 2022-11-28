import React, { Component } from 'react';
import logo from "../img/1200px-Breaking_Bad_logo.svg.png"



class SearchBox extends Component {
    state = {  } 
    render() { 
        let {handleChange, value} = this.props
        return (<>
            <div className='SearchBox'>
                <div className='img'><img src={logo} alt="" /></div>
                <div className='search'>
                    <form className='form' action="">
                        <input onChange={handleChange} type="text" value={value} />
                    </form>
                </div>
            </div>

        </>
        );
    }
}
 
export default SearchBox;