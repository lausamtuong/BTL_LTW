import React from 'react';
import { payment } from '../../reduxToolkit/apiRequest';

const Test = () => {
    const handle=()=>{
        payment({
            action:'payment',
            email:"admin123a",
            data:[{
                name:'tuong',
                image:'xxxxxx'
            },
            {
                name:'chuot',
                image:'dsadasd'
            }]
        })
    }
    return (
        <div style={{margin:'200px'}}>
            <button type='text' onClick={handle}>thanh toan</button>
        </div>
    );
}

export default Test;
