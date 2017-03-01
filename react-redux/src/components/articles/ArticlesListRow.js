import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ArticlesListRow = ({article, onDelete}) => {
  return (
    <tr>
      <td><Link to={'/article/' + article.id}>{article.id} {article.title}</Link></td>
      <td><a href="" onClick={function(event) { onDelete(event, article.id);}}>Delete</a></td>
    </tr>
  );
};

ArticlesListRow.propTypes = {
  article: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default ArticlesListRow;
