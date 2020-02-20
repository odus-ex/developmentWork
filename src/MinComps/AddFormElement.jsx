import React from 'react';


const AddFormElement = (props) => {
    return ( 

            <div className="card p-2">

                <div className="row">
                    <div className="col-10 text-left">
                        <h4> {props.header} </h4>
                    </div>
                    <div className="col-2 text-right">
                        <button className='btn btn-warning' type='button' onClick={props.onDelete}>Delete</button>
                    </div>
                </div>

            </div>

     );
}
 
export default AddFormElement;