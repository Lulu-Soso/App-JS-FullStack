// Faire appel à la bibliothèque de MongoDB pour coder plus facilement
const mongoose = require("mongoose")

// Création de la structure de la base de données en noSQL
const postSchema = mongoose.Schema(
    {
      message: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true
      },
      likers: {
        type: [String]
      }
    },
    {
      // date de création et de mise à jour de l'édition
      timestamps: true,
    }
)

module.exports = mongoose.model('post', postSchema)
