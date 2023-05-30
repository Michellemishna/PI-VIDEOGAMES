const findAllVideoGames = require("../controllers/findAllVideoGames");

const getPlatforms = async (req,res) => {
    try {
        let newArr = [];
        let aux = 0;
        const allGames = await findAllVideoGames();
        allGames.forEach((game)=>{                    //Mapeo en los juegos que tengo para buscar todas las platforms.
            if(aux < game.platforms.length ){   
                aux = game.platforms.length;
                newArr = game.platforms;
            }
        })
        res.status(200).json(newArr);
    } catch (error) {
        res.status(400).json({"error": error.message });
    }
}

module.exports = getPlatforms;