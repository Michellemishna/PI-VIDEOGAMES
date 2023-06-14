const {Videogame,Genre} = require("../db.js");

const gamesPageFilter = require("../auxFunctions/gamesPagesFilter.js");

const findAllVideoGames = async () => {
    const allGamesDB = await Videogame.findAll({
        include: {                          //Especifico que quiero incluir una tabla relacionada.
            model: Genre,                   //Modelo que quiero incluir, en este caso, Genre.
            attributes: ["name"],           //Incluyo el atributo "name" de Genre
            through: {
                attributes: []              //No incluyo los atributos de la tabla intermedia en la propiedad "Genres"
            }
        }
    }); 
    
    const allGamesAPI = await gamesPageFilter();

    const allVideogames = [...allGamesDB,...allGamesAPI]
    return allVideogames;
}

module.exports = findAllVideoGames;