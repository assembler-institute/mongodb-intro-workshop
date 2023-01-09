const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

/**
 * 2. create the 'User' model following the schema requirements
 *
 * The schema should have the following properties:
 *
 * 2.1 firstName:
 *    2.1.1 required, error message of: "The first name is required"
 *    2.1.2 string
 *    2.1.3 trim
 *
 * 2.2 lastName:
 *    2.2.1 required, error message of: "The last name is required"
 *    2.2.2 string
 *    2.2.3 trim
 *
 * 2.3 email:
 *    2.3.1 required, error message of: "The email is required"
 *    2.3.2 string
 *    2.3.3 trim
 *    2.3.4 unique
 *    2.3.5 validate with the `validator.isEmail` method
 *          Return an error message of: `The email ${props.value} is not valid`
 *
 * 2.4 password:
 *    2.4.1 required, error message of: "The password is required"
 *    2.4.2 string
 *    2.4.3 minlength of 8 characters, error message of: "The password is too short"
 *
 * 2.5 speaks:
 *    2.5.1 array of strings
 *    2.5.2 enum of "english", "spanish", "catalan", "german", "italian", "javascript"
 *
 * 2.6 with the "createdAt" and "updatedAt" properties that are created automatically
 */

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "The first name is required"],
      trim: true,
    },

    lastName: {
      type: String,
      required: [true, "The lastname is requited"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "The email is required"],
      trim: true,
      unique: true,
      validate: {
        validator: (value) => validator.isEmail(value),
        message: (props) => `${props.value} is not a valid email address`,
      },
    },

    password: {
      type: String,
      required: [true, "The password is required"],
      minlength: [8, "The password is too short"],
    },

    speaks: [
      {
        type: String,
        enum: [
          "english",
          "spanish",
          "catalan",
          "german",
          "italian",
          "javascript",
        ],
      },
    ],
  },
  { timestamps: true },
);

/**
 * 3. encrypt the password before storing it in the database
 *
 * Use a salt round of 12
 */

UserSchema.pre('save', userPreSaveHook = async (next) => {
  if(!this.isModified('password')){
    return next();
  }

  try {
    const hash = await bcrypt.hash(this.password, 12);
    this.password = hash;
    return next();

  } catch (error) {
    return next(error);
  }
})

/**
 * 4. add a 'comparePassword' method to the 'User' schema
 *
 * The `comparePassword` method should return a `bcrypt.compare` function call
 */

const UserModel = new mongoose.model("user", UserSchema);

UserSchema.methods.comparePassword = (candidate) => {
  return bcrypt.compare(candidate, this.password);
}

const user = await db.User.create({
  firstName: 'Michael',
  lastName: 'Scott',
  age: 40,
  email: 'michaelscoot@dundermifflin.com',
  password: '266-1089-eula-stephens',
  activities: 'Programming',
});

const match = await user.comparePassword('266-1089-eula-stephens')

console.log(match)

module.exports = UserModel;
