//  import dotenv from 'dotenv';
//  import pg from 'pg';
// import { Sequelize } from 'sequelize';
// dotenv.config();
// const {DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY } = process.env;

//  const sequelize = new Sequelize(DB_DEPLOY, {
//   logging: false, // set to console.log to see the raw SQL queries
//   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
//   dialectModule: pg,
// });

//  // const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/videogames`, {
//  //   logging: false, // set to console.log to see the raw SQL queries
//  //   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
//  // });
 
//  export default sequelize;