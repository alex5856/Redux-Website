import React, {Component, PropTypes} from 'react'
import Helmet from 'react-helmet'
import Validation from 'react-validation'
import validator from 'validator'
import swal from 'sweetalert2'
import axios from 'axios'
import { connect } from 'react-redux'
import { checkLogin } from '../actions/userActions'

class Login extends Component {

    constructor(props) {
      super(props);
    }

    render() {

      let helmet = {};
      helmet.title = 'WebSite - login';
      helmet.descr = 'login';

      let head = [
        <Helmet
            title={helmet.title}
            meta={[
                  {property: 'og:title', content: helmet.title},
                  {property: 'description', content: helmet.descr}
            ]} />
      ];

      let loginForm = [
          <div className="container">
              <h1 className="text-center">Login</h1>
              <p>{this.props.login}</p>
              <div className="col-md-6 col-md-offset-3">
                  <div className="panel panel-login">
                      <div className="panel-body">
                          <div className="col-lg-12">
                              <Validation.components.Form
                                  onSubmit={this.props.onLoginChk()}
                                  role="form"
                                  className="form-horizontal">
                                  <div className="form-group">
                                      <Validation.components.Input
                                          value=''
                                          name='email'
                                          validations={['required', 'email']}
                                          type="text"
                                          placeholder="Enter email"
                                          className="form-control" />
                                  </div>
                                  <div className="form-group">
                                      <Validation.components.Input
                                          type='password'
                                          name='password'
                                          value=''
                                          validations={['required']}
                                          placeholder="Enter password"
                                          className="form-control" />
                                  </div>
                                  <div className="form-group">
                                      <div className="col-sm-6 col-sm-offset-3">
                                        <Validation.components.Button className="btn btn-primary btn-lg btn-block">Log In</Validation.components.Button>
                                      </div>
                                  </div>
                              </Validation.components.Form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      ];

      return (
        <div className="content">
          {head}
          {loginForm}
        </div>
      );
    }
}

const LoginStateToProps = (store) => ({
  login: store.getIn(['user','login'])
})

const LoginDispatchToProps = (dispatch) => ({
  onLoginChk: () => (e) => {
    e.preventDefault()

    // 讀取 data.json 資料
    let jsUrl = 'https://alex5856.github.io/Redux-Website/data.json'

    axios.get(jsUrl)
      .then(function (res) {
        // console.log(res);
        let data = res.data;
        if(data.chk){
            swal(
              'Good job!',
              'complete',
              'success')

            dispatch(checkLogin())
          }
          else{
            // console.log(data.descr);
            swal('Oops!',
                 'Something went wrong!',
                 'error')
          }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
})

const LoginContainers = connect(
  LoginStateToProps,
  LoginDispatchToProps
)(Login)

export default LoginContainers
