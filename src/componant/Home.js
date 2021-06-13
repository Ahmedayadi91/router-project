import React, { useState } from 'react'

const TestComponent = () => {
    const [myArray, updateMyArray] = useState([]);

    const onClick = () => {
        updateMyArray( arr => [...arr, `${arr.length}`]);
    };
    return [
        <input type="button" onClick={ onClick } value="Update" />,

        <div>{myArray.map( e =>
          <div>{ e }</div>
        )}
        </div>
    ];
}
export default TestComponent