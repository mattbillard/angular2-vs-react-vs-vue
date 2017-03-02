var express = require('express');
var router = express.Router();
var _ = require('lodash');

let nextid = 21;
let articles = {
  1:  { id: 1, title: 'Mr. Nice', text: 'Text for Mr. Nice' },
  2:  { id: 2, title: 'Narco', text: 'Text for Narco' },
  3:  { id: 3, title: 'Bombasto', text: 'Text for Bombasto' },
  4:  { id: 4, title: 'Celeritas', text: 'Text for Celeritas' },
  5:  { id: 5, title: 'Magneta', text: 'Text for Magneta' },
  6:  { id: 6, title: 'RubberMan', text: 'Text for RubberMan' },
  7:  { id: 7, title: 'Dynama', text: 'Text for Dynama' },
  8:  { id: 8, title: 'Dr IQ', text: 'Text for Dr IQ' },
  9:  { id: 9, title: 'Magma', text: 'Text for Magma' },
  10: { id: 10, title: 'Tornado', text: 'Text for Tornado' },
};

const DELAY = 250;
function delayedSend(res, data) {
  setTimeout(() => res.send(data), DELAY);
}

router.get('/', function(req, res, next) {
  delayedSend(res, _.values(articles));
});

router.get('/:id', function (req, res, next) {
  let id = parseInt(req.params.id);
  
  delayedSend(res, articles[id]);
});

router.post('/', function (req, res, next) {
  let article = req.body;
  let id = nextid++;

  article.id = id;
  articles[id] = article;

  delayedSend(res, article);
});

router.put('/:id', function (req, res, next) {
  let id = parseInt(req.params.id);
  let article = req.body;

  article.id = id;
  articles[id] = article;
  
  delayedSend(res, article);
});

router.delete('/:id', function (req, res, next) {
  let id = parseInt(req.params.id);
  
  delete articles[id];
  
  delayedSend(res, '');
});


module.exports = router;
