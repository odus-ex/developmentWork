import React from 'react';


const SearchComp = (props) => {
    return (  
        
        <div className="container mt-5" style={{width: '100%'}}>
            
            <input className='form-control-lg' style={{width: '100%', borderRadius: '1rem', borderColor: '#916BFF'}} type='text' placeholder='Search courses..' onChange={props.onSearch}/>
        </div>
        
    );
}
 
export default SearchComp;