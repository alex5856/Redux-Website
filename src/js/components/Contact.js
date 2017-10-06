//import React from 'react'
import React, {Component, PropTypes} from 'react'
import Helmet from 'react-helmet'
import Validation from 'react-validation'
import validator from 'validator'
import swal from 'sweetalert2'
import axios from 'axios'

class Contact extends Component{

  constructor(props) {
      super(props);

      this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Submit
  handleSubmit(e) {
    e.preventDefault();

    let el = e.target.elements;
    let name = el[0].value;
    let company = el[1].value;
    let email = el[2].value;
    let self = this;

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
    helmet.title ='WebSite - Contact';
    helmet.descr = 'Contact';

    let head = [
      <Helmet
          title={helmet.title}
          meta={[
                {property: 'og:title', content: helmet.title},
                {property: 'description', content: helmet.descr}
          ]} />
    ];

    let content = [
      <div className="container">
        <h1 className="text-center">Contact</h1>
      </div>
    ];

    let contactForm = [
        <div className="container">
            <h1 className="text-center">Contact</h1>
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
                                        type='text'
                                        id='name'
                                        name='name'
                                        value=''
                                        validations={['required']}
                                        placeholder="Enter Name"
                                        className="form-control" />
                                </div>
                                <div className="form-group">
                                    <Validation.components.Input
                                        type='text'
                                        id='company'
                                        name='company'
                                        value=''
                                        validations=''
                                        placeholder="Enter Company (optional)"
                                        className="form-control" />
                                </div>
                                <div className="form-group">
                                    <Validation.components.Input
                                        value=''
                                        id='email'
                                        name='email'
                                        validations={['required', 'email']}
                                        type="text"
                                        placeholder="Enter Email"
                                        className="form-control" />
                                </div>
                                <div className="form-group">
                                    <Validation.components.Textarea
                                        value=''
                                        id='note'
                                        name='note'
                                        validations={['required']}
                                        placeholder="Enter Note"
                                        className="form-control" />
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-6 col-sm-offset-3">
                                      <Validation.components.Button className="btn btn-primary btn-lg btn-block">Send</Validation.components.Button>
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
        {/**content**/}
        {contactForm}
      </div>
    );
  }
}

export default Contact