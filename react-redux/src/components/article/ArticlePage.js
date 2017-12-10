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
    this.saveArticle = this.saveArticle.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.article && this.props.article.id != nextProps.article.id) {
      this.setState({
        article: Object.assign({}, nextProps.article)
      });
    }
  }

  componentWillMount(props) {
    if (this.props.params.id) {
      this.props.actions.getArticleById(this.props.params.id);
    } else {
      this.props.actions.getNewArticle();
    }
  }

  updateState(event) {
    const field = event.target.name;
    let article = this.state.article;
    article[field] = event.target.value;
    return this.setState({article: article});
  }

  saveArticle(event) {
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
        onSave={this.saveArticle}
        article={this.state.article}
      />
    );
  }
}

ArticlePage.propTypes = {
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ArticlePage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    article: state.article 
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(articleActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
