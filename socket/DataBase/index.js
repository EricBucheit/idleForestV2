const Sequelize = require('sequelize')
const uuidv4 = require('uuid/v4');

const sequelize = new Sequelize('idle_forestV2', 'postgres','', {
  host: '127.0.0.1',
  dialect: 'postgres',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: false,
})

const db = {};

db.Sequelize = Sequelize;
db.connection = sequelize;

db.users = require('./Models/users')(sequelize, Sequelize);
db.info = require('./Models/info')(sequelize, Sequelize);
db.animations = require('./Models/animations')(sequelize, Sequelize);
db.armor = require('./Models/armor')(sequelize, Sequelize);
db.bank = require('./Models/bank')(sequelize, Sequelize);
db.skills = require('./Models/skills')(sequelize, Sequelize);
db.inventory = require('./Models/inventory')(sequelize, Sequelize);
db.farm = require('./Models/farm')(sequelize, Sequelize);
db.levelItems = require('./Models/levelItems')(sequelize, Sequelize);



db.info.belongsTo(db.users);
db.animations.belongsTo(db.users);
db.armor.belongsTo(db.users);
db.bank.belongsTo(db.users);
db.skills.belongsTo(db.users);
db.inventory.belongsTo(db.users);
db.farm.belongsTo(db.users);
db.levelItems.belongsTo(db.users);

db.users.hasOne(db.info);
db.users.hasOne(db.animations);
db.users.hasMany(db.armor);
db.users.hasMany(db.bank);
db.users.hasMany(db.skills);
db.users.hasMany(db.inventory);
db.users.hasMany(db.farm);
db.users.hasMany(db.levelItems);




sequelize.sync({
    // force: true
    alter:true,
})

.then(() => {
      console.log(`Database & tables created!`)
})





module.exports = {
  db
}
