const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/user', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.error('Could not connect to MongoDB...' + err));

const userSchema = new mongoose.Schema({
    states: {
        type: Array,
        validate: {
            validator: (v) => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        const result = v && v.length > 0;
                        console.log(result);
                        resolve(result)
                    }, 2000);
                })
            },
            message: 'States cannot be empty'
        },
        required: [true, 'States required']
    }
});


const User = mongoose.model('user', userSchema);
const user = new User({
    states: []
});


user.validate()
    .then(() => {
        console.log('Done');
    })
    .catch(ex => {
        // Gives ex.errors object
        for (field in ex.errors)
            console.log(ex.errors[field]);
    })



 