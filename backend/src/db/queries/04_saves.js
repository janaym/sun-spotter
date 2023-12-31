const db = require('../index');

const createSave = (userID, spotID) => {
  const query = `INSERT INTO SAVES(user_id, spot_id) VALUES ($1, $2) RETURNING *;`;

  return db.query(query, [userID, spotID])
  .then(data => data.rows[0] )
  .catch(err => console.log('Error inserting save into database: ', err))
}


const checkSave = (userID, spotID) => {
  //console.log(userID, spotID);
  const query = `SELECT saves.id FROM saves WHERE user_id = $1 AND spot_id = $2;`;

  return db.query(query, [userID, spotID])
  .then(data => {
    //console.log("from data base: ", data.rows);
    return data.rows[0];
  })
  .catch(err => console.log('Error checking save: ', err))
}

const totalSaves = (userID) => {
  
  const query = `SELECT COUNT(*) AS total_saves FROM saves WHERE user_id = $1;`;

  return db.query(query, [userID])
  .then(data => {
     return data;
  })
  .catch(err => console.log('Error checking save: ', err))
}

const deleteSave = (saveID) => {
  const query = `DELETE FROM saves WHERE id = $1`;
  return db.query(query, [saveID])
  .then(data => {
    return;
  })
  .catch(err => console.log("Error deleting save: ", err));
};

module.exports = { createSave, checkSave, totalSaves, deleteSave }