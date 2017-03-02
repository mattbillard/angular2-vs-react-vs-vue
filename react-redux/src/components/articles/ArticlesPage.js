import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as articleActions from '../../actions/articleActions';
import ArticlesList from './ArticlesList';
import { Link } from 'react-router';


class ArticlesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.delete = this.delete.bind(this);
  }

  articleRow(article, index) {
    return <div key={index}>{article.title}</div>;
  }

  delete(event, articleId) {
    event.preventDefault();
    this.props.actions.deleteArticle(articleId)
      .then(() => console.log('Success: article deleted'))
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const {articles} = this.props;

    return (
      <div>
        <h1>Articles</h1>
        <Link to="/article" className="btn btn-primary">Create</Link>
        <br/><br/>
        <ArticlesList articles={articles} onDelete={this.delete}/>
      </div>
    );
  }
}

ArticlesPage.propTypes = {
  articles: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    articles: state.articles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(articleActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesPage);
