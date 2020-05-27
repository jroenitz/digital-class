import axios from "axios";

export default {
  // Log student in
  loginStudent: function(credentials) {
    return axios.post("/api/student-login/login", credentials);
  },
  // Teacher Log in
  loginTeacher: function(credentials){
    return axios.post("/api/teacher-login/login",credentials);
  },
  // Sign student up
  signupStudent: function(studentData) {
    return axios.post("/api/student-login/signup", studentData);
  },
  // Sign teacher up
  signupTeacher: function(teacherData) {
    return axios.post("/api/teacher-login/signup", teacherData);
  },
  // Creating a quiz
  createQuiz: function(quizData) {
    return axios.post("/api/quizzes", quizData);
  },
  // Get teacher data
  getTeacher: function() {
    return axios.get("/api/teacher-login/user_data");
  },
  // Get student data
  getStudentData: function() {
    return axios.get("/api/student-login/user_data");
  },
  // Get a teacher by id
  getTeacherById: function(id) {
    return axios.get("/api/teachers/" + id);
  },
  // Get all students under the authenticated teacher
  getStudentsByTeacher: function() {
    return axios.get("/api/teacher-login/students");
  },
  // Create a result
  createResult: function(resultData) {
    return axios.post("/api/results", resultData);
  },
  // Get all results for a quiz
  getResultsByQuiz: function(quizId) {
    return axios.get("/api/results", quizId);
  },
  // Get all quizzes by teacher's id
  getQuizzesByTeacher: function() {
    return axios.get("/api/teacher-login/quizzes");
  },
  // Get a quiz by its id
  getQuizById: function(id) {
    return axios.get("/api/quizzes" + id);
  },
  // Get all quizzes
  getAllQuizzes: function() {
    return axios.get("/api/quizzes")
  }
};
