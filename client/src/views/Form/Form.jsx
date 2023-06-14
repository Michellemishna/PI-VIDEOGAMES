import style from "./Form.module.css"

import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { createGames } from "../../redux/actions"
import validation from "./validate"

const Form = ({allGenres, allPlatforms}) => {
    const allVideogames = useSelector((state) => state.allGames);
    const dispatch = useDispatch();

    const [gameData,setGameData] = useState({
        name:"",
        image:"",
        description:"",
        platforms: [],
        released: "",
        rating: 0,
        genres: []
    })

    const [errors,setErrors] = useState({
        name:"Agregar información.",
        image:"Agregar información.",
        description:"Agregar información.",
        released: "Agregar información.",
        rating: "Agregar información.",
        platforms: "Agregar información.",
        genres: "Agregar información."
    })

    const handleChange = (event) => {
        const prop = event.target.name;
        const value = event.target.value;

        setGameData({...gameData, [prop]: value})
        setErrors(validation({...gameData, [prop]: value}, allVideogames))
    }

    const AddPlatform = (event) => {
        const isChecked = event.target.checked;
        const Value = event.target.value;
        if(isChecked){
            setGameData({ ...gameData, platforms: [...gameData.platforms, event.target.value] })
            setErrors(validation({ ...gameData, platforms: [...gameData.platforms, event.target.value]}, allVideogames))
        }else{
            setGameData({...gameData, platforms: gameData.platforms.filter((plat) => plat !== Value)})
            setErrors(validation({...gameData, platforms: gameData.platforms.filter((plat) => plat !== Value)},  allVideogames))
        }
    }
    const AddGenres = (event) => {
        const isChecked = event.target.checked;
        const Value = event.target.value;
        if(isChecked){
            setGameData({...gameData, genres: [...gameData.genres, event.target.value] })
            setErrors(validation({...gameData, genres: [...gameData.genres, event.target.value] }, allVideogames))
        }else{
            setGameData({...gameData, genres: gameData.genres.filter((gen) => gen !== Value)})
            setErrors(validation({...gameData, genres: gameData.genres.filter((gen) => gen !== Value)}, allVideogames))
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();      //Sirve para que la página no haga refresh por default.
        dispatch(createGames(gameData));
    }
    const ratingInCero = (event) =>{
        if(!gameData.rating) event.target.value = 0;   
    }
    
    return(
        <div className={style.globalCont}>
            <div className={style.contForm}>
                <h2 className={style.title}>🕹️ ADD YOUR GAME 🕹️</h2>
                
                <form onSubmit={handleSubmit} className={style.formData}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" onChange={handleChange} value={gameData.name}/>
                    <p className={errors.name? style.errorName: style.validName} >Name: {errors.name? errors.name : "Información correcta."}</p>

                    <label htmlFor="image">Image URL:</label>
                    <input type="url" name="image" onChange={handleChange} value={gameData.image}></input>
                    <p className={errors.image? style.errorImg: style.validImg}>Image: {errors.image? errors.image : "Información correcta."}</p>

                    <label htmlFor="description">Description:</label>
                    <textarea name="description" onChange={handleChange} value={gameData.description}></textarea>
                    <p className={errors.description? style.errorDes : style.validDes}>Description: {errors.description? errors.description : "Información correcta."}</p>

                    <label htmlFor="platforms">Platforms:</label>
                    <div className={style.contPlatforms}>
                        {allPlatforms?.map((plat)=>{
                            return (<div>
                                <input type="checkbox" onClick={(event) => AddPlatform(event)} value={plat}/>
                                <label key={plat} htmlFor={plat}>{plat}</label>

                            </div>)     
                        })}
                    </div>
                    <p className={errors.platforms? style.errorPlat: style.validPlat}>Platforms: {errors.platforms? errors.platforms : "Información correcta."}</p>

                    <label htmlFor="released">Released:</label>
                    <input type="date" name="released" onChange={handleChange} value={gameData.released}></input>
                    <p className={errors.released? style.errorRel: style.validRel}>Released: {errors.released? errors.released : "Información correcta."}</p>
                    
                    <label htmlFor="rating">Rating</label>
                    <input 
                        type="number"
                        name="rating" onBlur={(event)=> ratingInCero(event)}
                        onChange={handleChange} step="0.01"
                        value={gameData.rating}></input>
                       <p className={errors.rating? style.errorRat: style.validRat}>Rating: {errors.rating? errors.rating : "Información correcta."}</p>


                    <label htmlFor="genres">Choose your favorites Genres:</label>      
                        <p className={errors.genres? style.errorGen: style.validGen}>Genres: {errors.genres? errors.genres : "Información correcta."}</p>
                    <div className={style.contGenres}>
                        {allGenres?.map((genre)=>{
                                return (<div>
                                    <input type="checkbox" onClick={(event) => AddGenres(event)} value={genre}/>
                                    <label htmlFor={genre}>{genre}</label>

                                </div>)     
                            })}
                    </div>
                    {errors.flag === true? <button disabled>Create Game</button> : <button>Create Game</button>}
                </form>
                
            </div>

        </div>
    )
}

export default Form;