import React from 'react'
import { connect } from 'react-redux'

const TopNavUser = ({
  user
}) => (
    <p>{user.get('login')}</p>
)

const mapStateToProps = (store) => ({
  user: store.get('user')
  // user: store.getIn(['todo', 'todo'])
})

const mapDispatchToProps = (dispatch) => ({
  // onChangeText: (e) => (
  //   dispatch(changeText({ text: e.target.value }))
  // ),
  // onCreateTodo: (e) => {
  //   e.preventDefault();
  //   dispatch(createTodo());
  //   dispatch(changeText({ text: '' }));
  // }
})

// export default connect(store => store)(TopNavUser)

//console.log(TopNavUser)

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(TopNavUser);
