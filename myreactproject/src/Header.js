import React,{useState} from "react";
import "./Header.css"
import {Container} from './Container';
import {Matches} from './Matches';
import {News} from './News';
import {More} from './More';
import {Stats} from './Stats';

export const Header = ({ list }) => {
const [state,setState]=useState("stats");
let handlerEvent=(e)=>{
    e.preventDefault();
    if(e.target.name==="matches"){
    setState("matches")
    }

    if(e.target.name==="stats"){
        setState("stats")
        }
        if(e.target.name==="more"){
            setState("more")
            }
            if(e.target.name==="news"){
                setState("news");
                }
            }
            let res;
            if(state==='matches'){
                res = <Matches />
            }else if(state==='news'){
                res = <News/>
            }
            else if(state==='stats'){
                res = <Stats/>
            }else{
                res= <More />
            }

             
    return (

        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid" >
                   
                    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            {list.map((itemList, index) => (


                                <li  className="nav-item p-4 mx-3 fs-4" key={index}>
                                    <a onClick={handlerEvent} name ={itemList.item} className="nav-link active" aria-current="page" href="hhh">{itemList.item}</a>
                                </li>

                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
            <Container>{res}</Container>
        </>

    );
};



