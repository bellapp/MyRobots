import React from 'react';




const Scroll = (props) => {


    return (

        <div style={{overflow: 'scroll', border: '3px solid black', height:'800px'}}>
           <div>
               {props.children}
           </div>
        
       </div>
    )
        
    

}

export default Scroll;