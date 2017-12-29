import React from 'react';
import TextInput from '../common/TextInput';
import TextArea from '../common/TextArea';


const ArticleForm = ({article, onChange, onCancel, onSave}) => {
  let articleId = (article.id) ? (
    <div className="form-group">
      <label>id</label> {article.id}
    </div>
  ) : '';

  return (
    <form onSubmit={onSave}>
      <h1>{article.id ? 'Update' : 'Create'}</h1>

      {articleId}

      <TextInput
        name="title"
        label="title"
        value={article.title}
        onChange={onChange}
        placeholder="title"/>

      <TextArea
        name="text"
        label="text"
        value={article.text}
        onChange={onChange}
        placeholder="text"/>

      <button className="btn btn-default" type="button" onClick={onCancel}>Cancel</button>&nbsp;
      <button className="btn btn-primary" type="submit">Save</button>
    </form>
  );
};

ArticleForm.propTypes = {
  article: React.PropTypes.object.isRequired,
  onCancel: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onSave: React.PropTypes.func.isRequired
};

export default ArticleForm;
