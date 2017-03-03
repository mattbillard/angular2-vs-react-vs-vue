import React, {PropTypes} from 'react';
import ArticlesListRow from './ArticlesListRow';

const ArticlesList = ({articles, onDelete}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Article</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      {articles.map(article =>
        <ArticlesListRow key={article.id} article={article} onDelete={onDelete}/>
      )}
      </tbody>
    </table>
  );
};
console.log('--- ArticlesList.js: onDelete={onDelete}');

ArticlesList.propTypes = {
  articles: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default ArticlesList;
