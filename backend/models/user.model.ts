import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    }
});

//for saving data in collection in database we have to create a model where first parameter is modelName second parameter is the data schema and third parameter is collectionName,meaning in which collection our data will be saved
//1)first we have to create a instance of UserModel like this => const userDocument = new UserModel({here all property will be defined})
//2)the we have to call the save method of the instance => const newUser = useDocument.save()
const UserModel = mongoose.model('User', userSchema, 'userCollection');
export default UserModel;