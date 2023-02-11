import React from 'react'
import { DownOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';

function UserDropodown() {
    const user = JSON.parse(localStorage.getItem("user"));
    const username = user.data.user.username
    const handleButtonClick = (e) => {
      message.info('Click on left button.');
      console.log('click left button', e);
    };
    const handleMenuClick = (e) => {
      message.info('Click on menu item.');
      console.log('click', e);
    };
    const logoutCall = () =>{
        localStorage.removeItem('user');
        window.location.href='/login';
    }
    const items = [
      {
        label: (
            (
                <li onClick={()=>{
                  logoutCall();
                  window.location.href='/login';
                }}>Logout <LogoutOutlined/> </li>
            )
        )
      },
    ];
  
    const menuProps = {
      items,
      onClick: handleMenuClick,
    };
  
  return (
 <>
       <Dropdown.Button menu={menuProps} placement="bottom" icon={<UserOutlined />}>
        {username}

    </Dropdown.Button>
 </>
  )
}

export default UserDropodown
