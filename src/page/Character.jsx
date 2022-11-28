import React, { Component } from 'react';
import {Link, useParams,} from 'react-router-dom';
import withRouter from '../help/withRouter'

class Character extends Component {
    state = { 
        userCard:[]
     } 

    componentDidMount(){
        let id = this.props.params
        // console.log(this.props.params);
        fetch(`https://breakingbadapi.com/api/characters/${id}`)
        .then((res)=>res.json())
        .then((data)=>{
            // console.log(data[0]);
            this.setState({
                userCard:data[0]
            })
        })
    }
    render() { 
        let userCard = this.state.userCard
        // console.log(userCard);
        return (<>
            <div className='userpage'>
                <div className='button_btn'>
                    <button className='btn_backHome'><Link to={{pathname: "/"}}>Back To Search</Link></button>
                    <button className='btn_hireable'>Hireable: <i className="fa-sharp fa-solid fa-circle-xmark"></i></button>
                </div>
                <div className='user_information'>
                    <div className='img_user'>
                        <img src={userCard.img} alt="" />
                        <p>Username: {userCard.name}</p>
                    </div>
                    <div className='name_user'>
                        <span className='followers'>Actor Name: {userCard.portrayed}</span>
                        <span className='following'>Nickname: {userCard.nickname}</span>
                        <span className='repos'>Birthday: {userCard.birthday}</span>
                        <span className='gists'>Status: {userCard.status}</span>
                    </div>
                </div>
            </div>
        </>);
    }
}
 
export default withRouter(Character);