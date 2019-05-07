db = require('../../../models');
const DailyQuote = db.sequelize.models.DailyQuote;

module.exports = {
    Query: {
      quotes: async (_, args) => {
        return await DailyQuote.findAll({
          limit: 10,
        })
      }
    },
};
  