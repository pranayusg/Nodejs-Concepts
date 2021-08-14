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

// Query First
async function updateCourse(id) {
     const course = await Course.findById(id) 
     if (!course) return;

    // Option 1
     course.set({
        isPublished : false,
        author : 'Chetan bhagat'
     })

     // Option 2
    // course.isPublished = true; 
    // course.author = 'Chetan bhagat'; 

    const result = await course.save(); 
    console.log('Query First\n',result); 
} 

updateCourse('5a68ff090c553064a218a547'); 

// Update First
async function updateCourse(id) {
    const course = await Course.findByIdAndUpdate(id,{

        $set:{
            isPublished : false,
            author : 'Hatim'
         }
    },{new:true}) 
    
   console.log('Update First\n',course); 
} 

updateCourse('5a68ff090c553064a218a547'); 

async function updateCourse1(id) {
    const result = await Course.updateOne({_id:id},{

        $set:{
            isPublished : false,
            author : 'Hatim2'
         }
    }) 
    
   console.log('Update First with updateOne\n',result); 
} 
 
updateCourse1('5a68ff090c553064a218a547'); 
