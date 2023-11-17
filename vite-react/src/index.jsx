import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx';


window.nana = {};

window.nana.initSdk= initSdk

function initSdk(el, fonfig){
    return new Promise((resolve, reject) => {
        try{
            let elem= document.getElementById(el);
            if(elem){
                let root = ReactDOM.createRoot(elem);
                root.render(
                    <App
                        config={fonfig}
                        onRef={(sdk) => {
                            resolve({
                                on: sdk.on, // 监听sdk内部事件
                                // emit: sdk.emit,
                                onOpenDrawer: sdk.onOpenDrawer // 触发sdk内部事件
                            })
                           
                        }}
                    />
                )
            }
        } catch (err){
            reject(err);
        }
    })
}   




window.nana.initSdk('root', {platform: 'nana'}).then((sdk) =>{
    sdk.on('onOK', (values) => {
        console.log(values,'==valuesvalues=onOKonOKonOKonOKonOK');
    });

    sdk.on('submit', (values) => {
        console.log(values,'==valuesvalues=submitsubmitsubmitsubmit');
        
    });
    sdk.onOpenDrawer({visible: true});
    
}).catch((err) => {

})

 





