import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PlaylistComp from '../MinComps/PlaylistComp';
//style={{background:'linear-gradient(to right bottom, #916BFF, #5168FF)' }}


class CourseDetailRenderer extends Component {

    state= {
        courseDetails: []
    }

        componentDidMount() {
            this.setState({courseDetails: this.props.location.state.courseDetails })
        }
    

    render() { 

            const courseDetails = this.state.courseDetails
        
        return (  
            <div className="container-fluid">

                    {/* Course Details */}
                <div className="row mt-5" style={{background:'linear-gradient(to right bottom, #916BFF, #5168FF)' }}>
                    
                    <div className="container">
                    
                        <div className="col-12 mt-3" >
                            <h1>{courseDetails.courseName}</h1>
                        </div>
                        <div className="col-8 mt-4">
                            <h4> {courseDetails.courseDescription} </h4>
                        </div>
                        <div className="col-4 mt-4">
                            <div className="row">
                            <div className="col-2 text-center "> <img src='some source' alt="NA"/> </div>
                            <div className="col-6 text-left "> <h5>{courseDetails.authorName   }</h5> </div>
                            </div>
                            
                        
                            
                        </div>

                        <div className="col-4 mt-4">
                            <h5>Rating </h5>
                        </div>
                        <div className="col-3 mt-4 mb-3">
                           <Link to={{pathname: `/courseDetail/${courseDetails.courseID}/play/`, state: courseDetails.courseVideos}} > <Button style={{width: '100%'}} >Start</Button></Link>
                        </div>
                    
                    </div>    
                </div>    

                {/* Achievements */}

                <div className="container mt-5">

                    <div className="row">

                            <div className="col-12">
                                <div className="card-header p-3">
                                    <h2> Achievements</h2>
                                    
                                </div>
                            </div>
                            <div className="col-12 p-3">
                                <ul>
                                     {courseDetails.courseAchievements === undefined ? <h1> Loading..</h1> : courseDetails.courseAchievements.map(achievementString => <h3 key={achievementString}> <i className="fa fa-trophy p-3" style={{color: 'gold'}} ></i>  {achievementString}</h3 >)}       
                                </ul>
                            </div>

                    </div>

                </div>

                {/* Playlist  */}
                <div className="container mt-5 mb-5">

                    <div className="row">

                          <PlaylistComp height='20rem' playlist={courseDetails.courseVideos}/>

                    </div>

                </div>

            </div>
        );
    }
}
 
export default CourseDetailRenderer;