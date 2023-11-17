import React, { Component, useState } from 'react';
import {Drawer, Button} from 'antd';
import { useEffect } from 'react';
const Header = (props) => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        
    })


    const onClose = () => {
        setVisible(false)
    }

    return <div>
        <Button onClick={() => setVisible(true)} type="primary" style={{marginLeft:'24px'}}>点击打开弹框</Button>
        <Drawer 
            title="Basic Drawer" 
            placement="right" 
            onClose={onClose} 
            open={visible}
        >
            <h2>这是一个登陆表单</h2>
      </Drawer>
    </div>
}

export default Header;