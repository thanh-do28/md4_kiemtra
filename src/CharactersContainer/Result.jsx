import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import loding from "../img/z3916930128064_138e101463f3b4c563fdc09e9666a054.gif"


class Result extends Component {
    state = {  } 
    render() { 
        let {arrData, loading, cardnone} = this.props
        // console.log(cardnone);

        return (<>
            <div className='result'>
                <div className={`${cardnone===false ? "" : "card_none"}`}>
                    <div className="result1">
                    {arrData.map((e,i)=>{
                        return(
                            <Link key={i} to={{pathname: `/Character/:${e.char_id}`}}>
                            <div className='card'>
                                <div  className='card-inner'>
                                    <div className='card-front'>
                                        <img src={e.img} alt='' />
                                    </div>
                                    <div className='card-back'>
                                    <h1>{e.name}</h1>
                                    <ul>
                                        <li>
                                        <strong>Actor Name:</strong> {e.portrayed}
                                        </li>
                                        <li>
                                        <strong>Nickname:</strong> {e.nickname}
                                        </li>
                                        <li>
                                        <strong>Birthday:</strong> {e.birthday}
                                        </li>
                                        <li>
                                        <strong>Status:</strong> {e.status}
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        )
                    })}
                    </div>
                </div>
                <div className={`loading ${loading===true ? "" : "loading_none"}`}><img src={loding} alt="" /></div>
            </div>
        </>);
    }
}
 
export default Result;
// 