import React from 'react'
import {Row,Col,Form,Input,Button} from 'antd';
import {Link} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { userLogin } from '../../redux/actions/userActions';
import {LoadingOutlined} from '@ant-design/icons';

import './auth.css'
function Login() {
  const {loading} = useSelector(state=>state.alertsReducer);
  const dispatch = useDispatch()
  function onFinish(values){
    dispatch(userLogin(values));
     console.log(values)  
    } 

  return (
    <div className='container pt-5'>
          <div className='form-main'>
      {/* {loading === true && (<Spinner />)} */}

          <Form layout='' className='login-form p-5' onFinish={onFinish}>
            <p className='head-txt'>LOGIN</p>

                <div className='form-input'>
                  <Form.Item name='username' label='Username' rules={[{required:true}]}>
                    <Input />
                  </Form.Item>
                  <Form.Item name='password' label='Password' rules={[{required:true}]}>
                    <Input.Password />
                  </Form.Item>
                    <label htmlFor=""></label>
                    <div className='login-btn'>
                      {
                        loading?  <button className="button mb-3" disabled> &nbsp;  <LoadingOutlined /> &nbsp; </button>:
                        <button className="button mb-3">Login</button>
                      }
                    </div>
                  <br/>
                  <div  className='register-link'>

                    <Link to='/register'> Not Registered? Click To Register</Link>
                  </div>
                </div>
          </Form>

    </div>
    </div>
  )
}

export default Login
