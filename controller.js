const HackerNews = require('./model.js');

exports.getNews = (req, res) => {
  HackerNews.find()
    .then((articles) => {
      if (articles.length === 0) {
        res.status(404).json({ message: 'no articles found' });
      }
      res.json({
        articles,
      });
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
};