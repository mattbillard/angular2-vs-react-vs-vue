import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as articleActions from '../../actions/articleActions';
import ArticleForm from './ArticleForm';

export class ArticlePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      article: Object.assign({}, props.article)
    };

    this.goToArticles = this.goToArticles.bind(this);
    this.updateState = this.updateState.bind(this);
    this.save = this.save.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.article.id != nextProps.article.id) {
      // Necessary to populate form when existing article is loaded directly.
      this.setState({
        article: Object.assign({}, nextProps.article)
      });
    }
  }

  updateState(event) {
    const field = event.target.name;
    let article = this.state.article;
    article[field] = event.target.value;
    return this.setState({article: article});
  }

  save(event) {
    event.preventDefault();
    this.props.actions.saveArticle(this.state.article)
      .then(() => {
        console.log('Success: article saved');
        this.goToArticles();
      })
      .catch(error => {
        console.error(error);
      });
  }

  goToArticles() {
    this.context.router.push('/articles');
  }

  render() {
    return (
      <ArticleForm
        onChange={this.updateState}
        onCancel={this.goToArticles}
        onSave={this.save}
        article={this.state.article}
      />
    );
  }
}

ArticlePage.propTypes = {
  article: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ArticlePage.contextTypes = {
  router: PropTypes.object
};

function getArticleById(articles, id) {
  const article = articles.filter(article => article.id == id);
  if (article) return article[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const articleId = ownProps.params.id;

  let article = {id: '', title: '', text: ''};

  if (articleId && state.articles.length > 0) {
    article = getArticleById(state.articles, articleId);
  }

  return {
    article: article
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(articleActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
