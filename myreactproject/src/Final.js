import logo from "./logo.svg";
import {Header} from './Header';
import Footer from './Footer';
//import {Images} from './Images';

function Final (){
    let list = [
        {item : 'matches' },
        {item : 'videos' },
        {item : 'pointstables' },
        {item : 'stats' },
        {item : 'teams' },
      ];
      
    return(
        <>
        <Header list={list}/>
      
        <Footer />
        </>
    );
};
export default Final;