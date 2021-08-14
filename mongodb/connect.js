const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/playground', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log('Connected'))
.catch((err)=>console.log(err));

const kittySchema = new mongoose.Schema({
  name: String
});

const Kitten = mongoose.model('Kitten', kittySchema);

const silence = new Kitten({ name: 'Meow' });

silence.save(function (err, silence) {
  if (err) return console.error(err);
console.log(silence);
});

Kitten.find().limit(1).select('name').then((docs)=>{
  console.log(docs)
})


