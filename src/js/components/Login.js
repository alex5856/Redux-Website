
import React, {Component, PropTypes} from 'react'
import { Route } from 'react-router-dom'
import Helmet from 'react-helmet'
import Validation from 'react-validation'
import validator from 'validator'
import swal from 'sweetalert2'

class Login extends Component {

    constructor(props) {
      super(props);

      // This binding is necessary to make 'this' work in the callback
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Submit
    handleSubmit(e) {
      e.preventDefault();

      let el = e.target.elements;
      let userName = el[0].value;
      let password = el[1].value;
      let self = this;

      // 讀取 test.json 資料
      fetch("../test.json").then(function(res) {
        // res instanceof Response == true.
        // console.log(res);

        if (res.ok) {
          res.json().then(function(data) {
            if(data.chk){
              swal(
                'Good job!',
                'complete',
                'success'
              )
            }
            else{
              console.log(data.descr);
            }
          });
        } else {
          console.log("Looks like the response wasn't perfect, got status", res.status);
        }
      }, function(e) {
        console.log("Fetch failed!", e);
      });
    }

    render() {

      let helmet = {};
      helmet.title ='WebSite - login';
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
              <div className="col-md-6 col-md-offset-3">
                  <div className="panel panel-login">
                      <div className="panel-body">
                          <div className="col-lg-12">
                              <Validation.components.Form
                                  onSubmit={this.handleSubmit}
                                  role="form"
                                  className="form-horizontal">
                                  <div className="form-group">
                                      <Validation.components.Input
                                          value=''
                                          id='email'
                                          name='email'
                                          validations={['required', 'email']}
                                          type="text"
                                          placeholder="Enter email"
                                          className="form-control" />
                                  </div>
                                  <div className="form-group">
                                      <Validation.components.Input
                                          type='password'
                                          id='password'
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
export default Login