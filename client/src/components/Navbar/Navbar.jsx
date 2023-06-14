import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

import Searchbar from "../Searchbar/Searchbar";

const Navbar = ({setCurrentPage}) => {
  
  return (
    <div className={style.contBarra}>
      
        <a target="_blank" rel="noopener noreferrer" href='https://www.soyhenry.com/'>
          <img alt="img" className={style.imgs} src="https://startupeable.com/directorio/wp-content/uploads/2021/03/d4face92a7abc37a414e0bc3acf4ff23ec588438.png"/>
        </a>

        <a target="_blank" rel="noopener noreferrer" href='https://github.com/Michellemishna'>
          <img alt="img" className={style.imgs} src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>
        </a>

        <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/michelle-díaz-garduño-49a57b265/'>
          <img alt="img" className={style.imgs} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png"/>
        </a>

        <a target="_blank" rel="noopener noreferrer" href='https://es.reactjs.org/'>
          <img alt="img" className={style.imgs} src="http://ibthemespro.com/docs/beny/img/side-nav/cmm4.png"/>
        </a>
    
      <div className={style.contOptions}>
        <Link to='/home'>
            <p>HOME</p>
        </Link>

        <Link to='/form'>
            <p>ADD YOUR GAME</p>
        </Link>

        <Link to='/about'>
            <p>ABOUT</p>
        </Link>
      </div>
      
      <div>
        <Searchbar setCurrentPage={setCurrentPage}/>
      </div>
    </div>
  );
}
  
export default Navbar;