import React from 'react';
import thumbSrc from '../Content/thumbnail.jpeg';
import {Link} from 'react-router-dom';


const CourseCardComp = (props) => {


    const {courseName} = props.course
    return (  
     
     <div className="cotainer-fluid">
            {/* Image/thumbnail */}
            <div className="card" style={{borderRadius: '0.5rem'}}>
                <Link to={{
                    pathname: `/courseDetail/${props.course.courseID}`,
                }} >

                    <img className='card-img-top img-fluid' src={thumbSrc} alt="Thumbnail not available" style={{borderRadius: '0.5rem'}}/>
                    
                </Link>

                <div className="card-header text-left" style={{clear: 'both'}}>
                            {courseName.length > 20 ? <h4>{courseName.substring(0,30)}...</h4> : <h4>{courseName.substring(0,20)}</h4> }
                                 
                </div>

                <div className="card-body">
                   <div className="row justify-content-between no-gutters">
                       <div className="col-8 m-auto text-left">
                           <div className="row no-gutters justify-content-center">
                               <div className="col-3 text-center">
                                   <img className='border img-fluid' src={props.course.authorImg} alt="NA" style={{borderRadius: '50%'}}/>
                               </div>
                               <div className="col-9 text-left">

                                        <p>{props.course.authorName}</p>
                               </div>
                           </div>
                       </div>
                       <div className="col-4 m-auto text-right">
                            <p style={{color: 'grey'}}> {props.course.courseDetails.videoArray.length} videos </p>
                       </div>
                   </div>

                </div>
            </div>
        </div>
    );
}
 
export default CourseCardComp;