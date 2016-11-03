var surveydata = require('../data/survey-data.js');

module.export = function(app){

	app.get('/api/survey', function(req, res){

		res.json(surveydata);
	});
}