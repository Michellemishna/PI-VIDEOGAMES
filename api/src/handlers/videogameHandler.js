// const {
//     getAll,
//     getById,
//     getByName,
//     addVideogame,
//     deleteVideogame,
//     getAllGenres,
//   } = require("../controllers/videogamesControler");
  
//   const getAllHandler = async (req, res) => {
//     const { name } = req.query;

//     try {
//          const result = name ? await getByName(name) : await getAll();
//           res.status(200).json(result);      
//     } catch (error) {
//       res.status(500).json(error.message);
//     }
//   };
  
//   const getByIdHandler = async (req, res) => {
//     const { id } = req.params;
//     const source = isNaN(id) ? "bdd" : "api";
//     try {
//       const getId = await getById(id, source);
//       res.status(200).json(getId);
//     } catch (error) {
//       res.status(500).json(error.message);
//     }
//   };
  
//   const addVideogameHandler = async (req, res) => {
//     const {id, name, background_image, platforms, description, released, rating, genres, } =
//       req.body;
//       try {
     
//       const newVideogame = await addVideogame(
//         id,
//         name,
//         background_image,
//         platforms,
//         description,
//         released,
//         rating,
//         genres,
//       );
//       res.status(200).json(newVideogame);
//     } catch (error) {
//       res.status(500).json(error.message);
//     }
//   };
  
  
//   const deleteVideogameHandler = async (req, res) => {
//     const id = req.params.id;
//     try {
//       const deletVideog = await deleteVideogame({
//         where: {
//           id,
//         },
//       });
//       res.sendStatus(200);
//     } catch (error) {
//       res.status(500).json(error.message);
//     }
//   };
  

//   const getByGenresHandler = async (req, res) => {
//     try {
//       const getVideogames = await getAllGenres();
//       res.status(200).json(getVideogames);
//     } catch (error) {
//       res.status(500).json(error.message);
//     }
//   };

//   const getPlatformsHandler = async (req, res) => {
//     try {
//       let newArr = [];
//       let aux = 0;
//       const getVideogames = await getAllGenres();
//       getVideogames.forEach(game => {
//         if(aux < game.platforms.length) {
//           aux = game.platforms.length;
//           newArr = game.platforms;
//         }
//       })
//       res.status(200).json(newArr);
//     } catch (error) {
//       res.status(500).json(error.message);
//     }
//   };
  
  
//   module.exports = {
//     getAllHandler,
//     getByIdHandler,
//     addVideogameHandler,  
//     deleteVideogameHandler,
//     getByGenresHandler,
//     getPlatformsHandler,
//   };