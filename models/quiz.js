const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
    title: { type: String, required: true },
    timeLimit: { type: Number, required: true },
    questions: [
        {
            id: { type: Number },
            question: { type: String },
            choices: { type: Array },
            answer: { type: Number },
            imageUrl: {type: String}

        }
    ],
    teacher: {
        type: Schema.Types.ObjectId,
        ref: "Teacher"
    },
    students: [
        {
            type: Schema.Types.ObjectId,
            ref: "Student"
        }
    ],
    imageUrl: {
        type: String
    }
})

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz