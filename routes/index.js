var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
//Carga la página de inicio
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

//Autolad de comandos con :quizId
router.param('quizId', quizController.load);  //autoload :quizId

// Definición de rutas de /quizes
// Controladores para preguntas y respuestas
router.get('/quizes',						quizController.index);
router.get('/quizes/:quizId(\\d+)',			quizController.show);
router.get('/quizes/:quizId(\\d+)/answer',	quizController.answer);
router.get('/quizes/new',					quizController.new);
router.post('/quizes/create',				quizController.create);

// Carga la página de Créditos o Autor
router.get('/author', quizController.author);

module.exports = router;
