onst mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    _id: { type: Number, required: true },
    titre: { type: String, required: true },
    description: { type: String, required: true },
    idUser: Number,
    image: { type: String, required: true },
    prix: Number,
}, {
        timestamps: true
    });

module.exports = Article = mongoose.model("Articles", ArticleSchema);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);