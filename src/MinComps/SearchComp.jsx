import React from 'react';


const SearchComp = (props) => {
    return (  
        
        <div className="container mt-5" style={{width: '100%', flexDirection: 'row'}}>
            
            <div className="row no-gutters">
                <div className="col-9">
                    <input className='form-control-lg' style={{width: '100%', borderRadius: '1rem', borderColor: '#916BFF'}} type='text' placeholder='Search courses..' onChange={props.onSearch}/>
                </div>
                {/**
                    <div className="col-3" >
                    <Dropdown>
                    
                    <Dropdown.Toggle variant="success" id="dropdown-basic" >
                    Subjects
                    </ Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Category 1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Category 2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Category 3</Dropdown.Item>
                    </Dropdown.Menu>



                    </Dropdown>

                </div>
 *
                 *  
                 * 
                 */}
                
            </div>


            
            
        </div>
        
    );
}
 
export default SearchComp;