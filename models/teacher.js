const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;;

const teacherSchema = newSchema({
    name: { type: String, required: true},
    school: { type: String, required: true},
    subject: { type: String, required: true},
    email: {
        type: String,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid e-mail address"]
      },
      password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [({ length }) => length >= 6, "Password should be longer."]
      },
    quizes: [
        {
            type: Schema.Types.ObjectId,
            ref: "Quiz"
        }
    ]
})


teacherSchema.pre("save", async function save(next) {  
  // only hash the password if it has been modified (or is new)
  if (!this.isModified("password")) {
      return next();
  }
  try {
      // generate a salt
      const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
      // hash the password along with the new salt
      this.password = await bcrypt.hash(this.password, salt);
      return next();
  } catch (err) {
      return next(err);
  }
});

teacherSchema.methods.validPassword = async function validPassword(data) {
  return bcrypt.compare(data, this.password); 
};


const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher