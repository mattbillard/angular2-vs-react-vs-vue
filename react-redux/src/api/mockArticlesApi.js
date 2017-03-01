import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const articles = [
  { id: 11, title: 'Mr. Nice', text: 'Text for Mr. Nice' },
  { id: 12, title: 'Narco', text: 'Text for Narco' },
  { id: 13, title: 'Bombasto', text: 'Text for Bombasto' },
  { id: 14, title: 'Celeritas', text: 'Text for Celeritas' },
  { id: 15, title: 'Magneta', text: 'Text for Magneta' },
  { id: 16, title: 'RubberMan', text: 'Text for RubberMan' },
  { id: 17, title: 'Dynama', text: 'Text for Dynama' },
  { id: 18, title: 'Dr IQ', text: 'Text for Dr IQ' },
  { id: 19, title: 'Magma', text: 'Text for Magma' },
  { id: 20, title: 'Tornado', text: 'Text for Tornado' }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

let id = 21;

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (article) => {
  return id++;
};

class ArticleApi {
  static getAllArticles() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], articles));
      }, delay);
    });
  }

  static saveArticle(article) {
    article = Object.assign({}, article); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (article.id) {
          const existingArticleIndex = articles.findIndex(a => a.id == article.id);
          articles.splice(existingArticleIndex, 1, article);
        } else {
          article.id = generateId(article);
          articles.push(article);
        }

        resolve(article);
      }, delay);
    });
  }

  static deleteArticle(articleId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfArticleToDelete = articles.findIndex(article => {
          article.articleId == articleId;
        });
        articles.splice(indexOfArticleToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ArticleApi;
