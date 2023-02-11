import React from 'react'
import {Row,Col,Form,Input,Button} from 'antd';
import {Link} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {LoadingOutlined} from '@ant-design/icons';

import { userRegister } from '../../redux/actions/userActions';

import './auth.css'


function Register() {
  const dispatch = useDispatch();
  const {loading} = useSelector(state=>state.alertsReducer);
  async function onFinish(values){
    const email = values.email;
    await dispatch(userRegister(values));
  }

  return (
    <div className='container pt-5'>
          <div className='form-main'>
      {/* {loading === true && (<Spinner />)} */}

          <Form layout='' className='login-form p-5' onFinish={onFinish}>
            <p className='head-txt'>REGISTER</p>

                <div className='form-input'>
                  Username
                  <Form.Item name='username' label='' rules={[{required:true}]}>
                  <Input />
                </Form.Item>  
                Email
                <Form.Item name='email' label='' rules={[{required:true}]}>
                  <Input />
                </Form.Item> 
                Password
                <Form.Item 
                    name='password' label='' rules={[{required:true}]} hasFeedback>
                  <Input.Password />
                </Form.Item>
                Confirm Password
                <Form.Item 
                    name='cpassword'
                    label='' 
                    rules={[
                      {required:true},
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                      }),
                    ]} 
                    dependencies={['passoword']}
                    hasFeedback>
                  <Input.Password />
                </Form.Item>  
                    <label htmlFor=""></label>
                    <div className='login-btn'>
                    <button className="button mb-3">Register</button>
                    </div>
                  <br/>
                  <div  className='register-link'>

                    <Link to='/login'> Login</Link>
                  </div>
                </div>
          </Form>

    </div>
    </div>
  )
}

export default Register
