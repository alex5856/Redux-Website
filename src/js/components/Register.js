
import React, {Component, PropTypes} from 'react'
import { Route } from 'react-router-dom'
import Helmet from 'react-helmet'
import swal from 'sweetalert2'
import axios from 'axios'
import Validation from 'react-validation'
import validator from 'validator'

class Register extends Component {

    constructor(props) {
      super(props);

      // This binding is necessary to make 'this' work in the callback
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Submit
    handleSubmit(e) {
      e.preventDefault();
      const el = e.target.elements;
      const email = el[0].value;
      const firstName = el[1].value;
      const lastName = el[2].value;
      const password = el[3].value;
      const passwordConfirm = el[4].value;
      const self = this;

      // 讀取 data.json 資料
      axios.get('data.json')
        .then(function (res) {
          // console.log(res);
          let data = res.data;
          if(data.chk){
              swal(
                'Good job!',
                'complete',
                'success')
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

    render() {

      let helmet = {};
      helmet.title ='WebSite - Sign Up';
      helmet.descr = 'Sign Up';

      let head = [
        <Helmet
            title={helmet.title}
            meta={[
                  {property: 'og:title', content: helmet.title},
                  {property: 'description', content: helmet.descr}
            ]} />
      ];

      let RegForm = [
          <div className="container">
              <h1 className="text-center">Sign Up</h1>
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
                                          placeholder="Email address"
                                          className="form-control" />
                                  </div>
                                  <div className="form-group">
                                      <Validation.components.Input
                                          type='text'
                                          id='firstName'
                                          name='firstName'
                                          value=''
                                          validations={['required']}
                                          placeholder="First name"
                                          className="form-control" />
                                  </div>
                                  <div className="form-group">
                                      <Validation.components.Input
                                          type='text'
                                          id='lastName'
                                          name='lastName'
                                          value=''
                                          validations={['required']}
                                          placeholder="Last name"
                                          className="form-control" />
                                  </div>
                                  <div className="form-group">
                                      <Validation.components.Input
                                          type='password'
                                          id='password'
                                          name='password'
                                          value=''
                                          validations={['required','password']}
                                          placeholder="Password"
                                          className="form-control" />
                                  </div>
                                  <div className="form-group">
                                      <Validation.components.Input
                                          type='password'
                                          id='passwordConfirm'
                                          name='passwordConfirm'
                                          value=''
                                          validations={['required','password']}
                                          placeholder="Confirm password"
                                          className="form-control" />
                                  </div>
                                  <div className="form-group">
                                      <div className="col-sm-6 col-sm-offset-3">
                                          <Validation.components.Button className="btn btn-primary btn-lg btn-block">
                                          Sign Up
                                          </Validation.components.Button>
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
          {RegForm}
        </div>
      );
    }
}
export default Register