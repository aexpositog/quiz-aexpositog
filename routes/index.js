var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');
var commentController = require('../controllers/comment_controller');
var sessionController = require('../controllers/session_controller');

/* GET home page. */
//Carga la página de inicio
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz', errors: [] });
});

//Autolad de comandos con :quizId
router.param('quizId', quizController.load);  //autoload :quizId

// Definición de rutas de sesión
router.get("/login", sessionController.new); // formulario login
router.post("/login", sessionController.create); // crear sessión
router.get("/logout", sessionController.destroy); // destruye sessión

// Definición de rutas de /quizes
// Controladores para preguntas y respuestas
router.get('/quizes',						quizController.index);
router.get('/quizes/:quizId(\\d+)',			quizController.show);
router.get('/quizes/:quizId(\\d+)/answer',	quizController.answer);
router.get('/quizes/new',					quizController.new);
router.post('/quizes/create',				quizController.create);
router.get('/quizes/:quizId(\\d+)/edit',	quizController.edit);
router.put('/quizes/:quizId(\\d+)',			quizController.update);
router.delete('/quizes/:quizId(\\d+)',		quizController.destroy);

router.get('/quizes/:quizId(\\d+)/comments/new',	commentController.new);
router.post('/quizes/:quizId(\\d+)/comments',		commentController.create);

// Carga la página de Créditos o Autor
router.get('/author', quizController.author);

module.exports = router;
