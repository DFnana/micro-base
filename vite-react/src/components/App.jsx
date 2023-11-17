import React, { Component } from 'react';
import {Button, Input} from 'antd';
import Header from './Header/header.jsx';
import FormComponet from './Header/formComponent.jsx';
import eventEmitter from '../js/eventEmit.js';
import './app.less';

export default class App extends React.Component{
    constructor(props){
        super(props);
        
    }
    componentDidMount(){
        this.props.onRef && this.props.onRef({
            on: (type, callback) => {
                eventEmitter.on(type, callback);
            },
            onOpenDrawer: (values) => {
                console.log(1232,'1232===');
                // 外部触发内部方法
                eventEmitter.emit('onOpen', values)
            },
        })
    }

   
    render(){
    
        return(
            <div className="app-component">
                <FormComponet/>
            </div>

        )
    }                      
}
