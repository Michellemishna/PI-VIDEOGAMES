import style from "./Card.module.css"
import { Link } from "react-router-dom";

const Card = ({id,name,genres,image,rating,createinDb}) => {
    return(
        <div className={style.Card}>
            {(createinDb === true)? <>
                <Link to={`/detail/${id}`}>
                    <h4>{name}</h4>
                </Link>
                <img className={style.imgCards} src={image} alt="img" />
                <p>{(genres.map((genre)=> genre.name)).toString()}</p>
                <p>Rating: {rating.slice(0,4)}🌟</p>
            </>:<>
                   <Link to={`/detail/${id}`}>
                    <h4>{name}</h4>
                </Link>
                <img className={style.imgCards} src={image} alt="img" />
                <p>{genres.toString()}</p>
                <p>Rating: {rating} 🌟</p>
            </>
            }   
        </div>
    )
}

export default Card;