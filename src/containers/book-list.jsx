import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectbook } from 'Actions';

class BookList extends Component {


  renderList() {
    return this.props.books.map((book, index) => 
      <li key={index} onClick={() => {selectbook(book)}} className="list-group-item">{book.title}</li>
    );
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { books: state.books }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectbook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);