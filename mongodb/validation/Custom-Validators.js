const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/user', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.error('Could not connect to MongoDB...' + err));

const userSchema = new mongoose.Schema({
    states: {
      type: Array,
      validate: {
        validator: function(v) {
          return v && v.length>0;
        },
        message: props => `${props.value} is empty`
      },
      required: [true, 'User phone number required']
    }
  });
  
  async function create(){
  const User = mongoose.model('user', userSchema);
  const user = new User({
    states:[]
  });

  try{
  const result = await user.save();
  console.log(result)
  }
  catch(err){
      console.log(err.message)
  }
}

create();
