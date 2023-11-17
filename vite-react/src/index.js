
import React from 'react';
import ReactDOM from 'react-dom/client';

window.zyun.initSdk= initSdk()

function initSdk(el, fonfig){
    return new Promise((resolve, reject) => {
        try{
            let elem= document.getElementById('el');
            if(elem){
                let root = ReactDOM.createRoot(elem);
                root.render(
                    <App
                        config={fonfig}
                        onRef={(sdk) => {
                            resolve({
                                on: sdk.on,
                                emit: sdk.emit,
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


window.zyun.initSdk('el', {platform}).then((sdk) =>{

}).catch((err) => {

})


