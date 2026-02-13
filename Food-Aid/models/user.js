// // const mongoose = require("mongoose");

// // const userSchema = new mongoose.Schema({
// // 	firstName: {
// // 		type: String,
// // 		required: true
// // 	},
// // 	lastName: {
// // 		type: String,
// // 		required: true
// // 	},
// // 	email: {
// // 		type: String,
// // 		required: true
// // 	},
// // 	password: {
// // 		type: String,
// // 		required: true
// // 	},
// // 	gender: {
// // 		type: String,
// // 		enum: ["male", "female"]
// // 	},
// // 	address: String,
// // 	phone: Number,
// // 	joinedTime: {
// // 		type: Date,
// // 		default: Date.now
// // 	},
// // 	role: {
// // 		type: String,
// // 		enum: ["admin", "donor", "agent"],
// // 		required: true
// // 	}
// // });

// // const User = mongoose.model("users", userSchema);
// // module.exports = User;




// const mongoose = require("mongoose");
// const passportLocalMongooseLib = require("passport-local-mongoose");

// // --- THE FIXER LINE ---
// // If the library loads as an object, we grab the .default property. 
// // If it loads as a function, we use it directly.
// const passportLocalMongoose = passportLocalMongooseLib.default || passportLocalMongooseLib;

// const userSchema = new mongoose.Schema({
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     role: {
//         type: String,
//         enum: ["donor", "receiver", "agent"],
//         required: true
//     },
//     organization: {
//         type: String,
//         required: false
//     },
//     phone: {
//         type: Number
//     },
//     address: {
//         type: String
//     },
//     joinedTime: {
//         type: Date,
//         default: Date.now
//     }
// });

// // Now this will definitely be a function
// userSchema.plugin(passportLocalMongoose);

// module.exports = mongoose.model("User", userSchema);


const mongoose = require("mongoose");
const passportLocalMongooseLib = require("passport-local-mongoose");

// Fix for object/function bug
const passportLocalMongoose = passportLocalMongooseLib.default || passportLocalMongooseLib;

const userSchema = new mongoose.Schema({
    // We keep 'username' to store their Full Name, but it's not for login anymore
    username: { 
        type: String, 
        required: false 
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ["donor", "receiver", "agent"],
        required: true
    },
    organization: {
        type: String,
        required: false
    },
    phone: {
        type: Number
    },
    address: {
        type: String
    },
    joinedTime: {
        type: Date,
        default: Date.now
    }
});

// CRITICAL CHANGE: Tell passport to use 'email' as the login field
userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

module.exports = mongoose.model("User", userSchema);