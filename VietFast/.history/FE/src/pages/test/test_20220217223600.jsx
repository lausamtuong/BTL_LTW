import React from 'react';
import { payment } from '../../reduxToolkit/apiRequest';
import axios
const Test = () => {
    axios
    const handle=()=>{
        payment({
            action:'payment',
            email:"admin123asd@gmail.com",
            item:"dsadsaxasxsadasd,"
        })
    }
    return (
        <div style={{margin:'200px'}}>
            <button type='text' onClick={handle}>thanh toan</button>
        </div>
    );
}

export default Test;
