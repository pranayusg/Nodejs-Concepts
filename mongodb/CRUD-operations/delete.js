const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.error('Could not connect to MongoDB...' + err));

const courseSchema = new mongoose.Schema({
    _id:String,
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: Number
});

const Course = mongoose.model('Course', courseSchema);

async function removeCourse(id) {
    const result = await Course.deleteOne({_id:id}) 
    // const result = await Course.findByIdAndRemove(_id:id) 

   console.log('Deleted\n',result); 
} 

removeCourse('5a68fdc3615eda645bc6bdec'); 