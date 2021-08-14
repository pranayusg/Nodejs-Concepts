const mongoose = require('mongoose');
const assert = require('assert');

mongoose.connect('mongodb://localhost/breakfast', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.error('Could not connect to MongoDB...' + err));

const breakfastSchema = new mongoose.Schema({
    eggs: {
      type: Number,
      min: [6, 'Must be at least 6, got {VALUE}'],
      max: 12
    },
    bacon: {
      type: Number,
      required: [true, 'Why no bacon?']
    },
    drink: {
      type: String,
      enum: ['Coffee', 'Tea'],
      required: function() {
        return this.bacon > 3;
      }
    }
  });
  const Breakfast = mongoose.model('Breakfast', breakfastSchema);
  
  const badBreakfast = new Breakfast({
    eggs: 2,
    bacon: 0,
    drink: 'Milk'
  });

  let error = badBreakfast.validateSync();

console.log(error)