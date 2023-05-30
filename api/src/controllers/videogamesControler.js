// const { Op } = require("sequelize");
// const { Videogames, Genres } = require("../db");
// const { API_KEY } = process.env;
// const axios = require("axios");
// const cleanArray = require("../helpers/cleanDataApi");
// const { default: cleanDataGenre } = require("../helpers/cleanDataGenres");

// const getAll = async () => {
//   const dataVideogames = await Videogames.findAll();

//   const apiVideogamesRaw = (
//     await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
//   ).data.results;

//   const apiVideogames = cleanArray(apiVideogamesRaw);

//   return [...dataVideogames, ...apiVideogames];
// };

// const getByName = async (name) => {
//   const  cleanGameAPI= [];
//   const dataNamesVideogames = await Videogames.findAll({
//     where: { name: { [Op.iLike]: name} },
//     include: {
//       model: Genres,
//       attributes: ["name"],
//       through: {
//         attributes:[]
//       }
//     }
//   });
//   const videoNameApiRaw = (
//     await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)).data.results;
  

//   videoNameApiRaw = await cleanArray(videoNameApiRaw);
//   for (let i = 1; (i < 15 && i < videoNameApiRaw.length); i++) {
//     if(videoNameApiRaw[i] !== null || videoNameApiRaw[i] !== undefined) {
//       cleanGameAPI[i] = videoNameApiRaw[i];
//     }
//   }
//  const videoName = [...cleanGameAPI,...dataNamesVideogames];

//  return videoName;
// };

// const getById = async (id, source) => {
//   const videogameId =
//     source === "api"
//       ? (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`))
//           .data
//       : await Videogames.findByPk(id, {
//           include: {
//             model: Genres,
//             attributes: ["name"],
//             through: {
//               atributtes: [],
//             },
//           },
//         });

//   return cleanArray([videogameId]);
// };

// const addVideogame = async (
//   id, name, background_image, platforms, description, released, rating, genres
// ) => {
//    const existVideogame = await Videogames.findAll({
//     where: {
//       name: {
//         [Op.iLike]: `%${name}%`,
//       }
//     }
//    })
//   const newVideogam = await Videogames.create({
//     id, name,
//     background_image,
//     platforms,
//     description,
//     released,
//     rating,
//   });

//   if(await Genres.count() === 0) {
// const response  = await findGenres();
// await saveGenresDataBase(response);
//   }
//   const foundGenres =await Promise.all(
//     genres.map(async (genre) => {
//       await Genres.findOne({where: {name:genre}})
//     }))
  
//   await newVideogam.addGenres(foundGenres);

//   return newVideogam;
// };

// const deleteVideogame = async (id) => {
//   await Videogames.destroy({
//     where: {
//       id,
//     },
//   });
// };

// const getAllGenres = async () => {
  
//  const allGenresRaw = (await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)).data.results;
 
//  const genresDatabase = await Genres.findAll();

//  const allGenres = cleanDataGenre(allGenresRaw);

//  return [...genresDatabase,...allGenres]
// };

// const saveGenresDataBase = async(arr) => {
//   let arrGenres = arr.map(genre => genre.name)
//   arrGenres.forEach(async (genre) => {
//   if(genre.length > 0){
//     await Genres.findOrCreate({where: {name: genre}})
//   }    
//   });
// }

// module.exports = {
//   getAll,
//   getById,
//   getByName,
//   addVideogame,
//   deleteVideogame,
//   getAllGenres,
//   saveGenresDataBase,
// };
