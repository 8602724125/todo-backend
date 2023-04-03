const mongoose = require("mongoose");

// const url = `mongodb://localhost:27017/todo`;
const url = `mongodb+srv://Pankaj_Maihtele:Pankaj12@cluster0.xfxnakk.mongodb.net/todo?retryWrites=true&w=majority`;


mongoose.connect(url)
  .then( () => {
      console.log('Connected to the database ')
  })
  .catch( (err) => {
      console.error(`Error connecting to the database. ${err}`);
  })

const Schema = mongoose.Schema;
const todoSchema = new Schema({
  title: { type: String, default: "" },
  description: { type: String, default: "" },
})


module.exports = mongoose.model('todo', todoSchema);