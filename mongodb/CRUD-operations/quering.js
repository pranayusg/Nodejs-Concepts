const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.error('Could not connect to MongoDB...' + err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: Number
});

const Course = mongoose.model('Course', courseSchema);

Course
.find({isPublished:true, tags:'backend'})
.sort({name:1}) //1-Asc -1-Desc  '-name'- Desc order
.select('name author')   //  or select({name:1, author:1})
.then((docs)=>{ 
    // console.log(docs)
})
.catch((err)=>console.error('Error while quering' + err));

async function getCourses(findObj = {}, sortObj = {}, selectObj = {}) {
    return await Course
        .find(findObj)
        .sort(sortObj)
        .select(selectObj)
}

async function exercies1() {
    const courses = await getCourses(
        { tags: 'backend', isPublished: true },
        { name: 1 },
        { name: 1, author: 1}
    );
    console.log("Exercise1:\n", courses);
}

async function exercies2() {
    const courses = await getCourses(
        { isPublished: true, tags: { $in: ['frontend', 'backend'] } },
        { price: -1 },
        { name: 1, author: 1, price: 1 }
    );
    console.log("Exercise2:\n", courses);
}

async function exercies3() {
    const courses = await Course
        .find( { isPublished: true } )
        .or([
            { price: { $gte: 15 } },
            { name: /.*by.*/i } //0 or more characters before or after
        ])
        .select('name price')
    console.log("Exercise3:\n", courses);
}

// exercies1();
// exercies2();
exercies3();