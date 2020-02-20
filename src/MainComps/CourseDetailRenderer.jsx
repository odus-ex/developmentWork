import React, { Component } from 'react';
// import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';



class CourseDetailRenderer extends Component {
    state = { 
        //Get course details based on ID in props.match.params
        courseGet: {

            // courseID: 1,
            // courseName: 'Pythossssssssn for Beginners',
            // courseAuthor: 'Kalyan Riyali',
            // courseDesc: 'This Specialization builds on the success of the Python for Everybody course and will introduce fundamental programming concepts including data structures, networked application program interfaces, and databases, using the Python programming language. In the Capstone Project, you’ll use the technologies learned throughout the Specialization to design and create your own applications for data retrieval, processing, and visualization.',
            // // courseThumbnail: thumbSrc,
            // courseRating: [1,2,3,4],   // stored as keys
            // isEnrolled: true,
            

            // courseAchievements: [
            //     'This is achievement number 1.',
            //     'This is achievement which is placed on number 2.',
            //     'Achievements and goals are same to be very honest.',
            //     'Finally achievements would have a minimum and a maximum number',
            // ],

            // courseVideos: [
            //     {videoID: 1, videoName: 'Python Fundamentals', videoURL:'https://www.youtube.com/watch?v=W2YbUZxbWb0'  },
            //     {videoID: 2, videoName: 'Variables and Functions', videoURL:'https://www.youtube.com/watch?v=W2YbUZxbWb0'  },
            //     {videoID: 3, videoName: 'Python OOPs', videoURL:'https://www.youtube.com/watch?v=W2YbUZxbWb0'  },
            //     {videoID: 4, videoName: 'Advance topics', videoURL:'https://www.youtube.com/watch?v=W2YbUZxbWb0'  },
            //     {videoID: 5, videoName: 'Python Fundamentals', videoURL:'https://www.youtube.com/watch?v=W2YbUZxbWb0'  },
            //     {videoID: 6, videoName: 'Variables and Functions', videoURL:'https://www.youtube.com/watch?v=W2YbUZxbWb0'  },
            //     {videoID: 7, videoName: 'Python OOPs', videoURL:'https://www.youtube.com/watch?v=W2YbUZxbWb0'  },
            //     {videoID: 8, videoName: 'Advance topics', videoURL:'https://www.youtube.com/watch?v=W2YbUZxbWb0'  },
            //     {videoID: 9, videoName: 'Python Fundamentals', videoURL:'https://www.youtube.com/watch?v=W2YbUZxbWb0'  },
            //     {videoID: 10, videoName: 'Variables and Functions', videoURL:'https://www.youtube.com/watch?v=W2YbUZxbWb0'  },
            //     {videoID: 11, videoName: 'Python OOPs', videoURL:'https://www.youtube.com/watch?v=W2YbUZxbWb0'  },
            // ],



        }, //do this in component did mount with the help of course id

        catchCourse: {}
        
     }



     componentDidMount() {

        fetch(`http://192.168.0.106:4000/api/courses/${this.props.match.params.id}`).then(
            results => {return results.json()}
        ).then( 
            data => {
                
                this.setState({courseGet: data})
                
            
        }
           

        )

     }


    render() { 

        const {courseGet} = this.state
        return (  
            <div className="container-fluid">

                
                {/* Course name, back image, rating, enroll button, Authors, description */}

               
                <div className="row">
                    <div className="col-12 mt-5" style={{background:'linear-gradient(to right bottom, #916BFF, #5168FF)' }} >
                        
                        <div className="container" style={{color: 'white'}}>
                            <div className="container-fluid mt-5">
                                <h2 style={{fontWeight: 'bold'}}> {courseGet.courseName}</h2>
                            </div>
                            <div className="container-fluid mt-4">
                                <p> {courseGet.courseDesc}</p>
                            </div>
                            <div className="container-fluid mt-4">
                                <div className="row no-gutters">
                                    <div className="col-1 text-center ">
                                        <img src="asdfasd" alt="NA" style={{borderRadius: '50%'}} className='img-fluid ' />
                                    </div>
                                    <div className="col-9 text-left">
                                        <h4>{courseGet.authorName}</h4>
                                        
                                    </div>
                                </div>
                                 
                            </div>
                            {/* <div className="container-fluid mt-3 mb-5">
                                
                                <div className="row">
                                    <div className="col-sm-2 p-3 text-left">
                                        {this.state.courseGet.courseRating.map(ratings => (
                                        <i key={ratings} className="fa fa-star p-1" style={{color: 'gold'}}></i>))}      
                                    </div>
                                    <div className="col-sm-10 text-left m-auto">
                                        {this.state.courseGet.isEnrolled ? <Link to={{ pathname: `/courseDetail/${this.state.courseGet.courseID}/play`, state: { courseGet: this.state.courseGet} }}><Button> Continue </Button></Link> : <Link to={{ pathname: `/courseDetail/:${this.state.courseGet.courseID}/play`, state: { courseGet: this.state.courseGet} }} ><Button> Enroll</Button></Link>  }
                                    </div>
                                </div>

                            </div> */}


                        </div>
                        

                    </div>
                </div>

                
                {/* <div className="container">
                <div className="row mt-3"> */}
                     {/* Achievements */}
                    {/* <div className="col-sm-12">
                        <div className="card-header" style={{borderRadius: '2rem'}}>

                                <h3 className='ml-3' style={{fontWeight: 'bold', color: '#5168FF'}}> Achievements upon course completion</h3>
                        </div>
                        <div className="card-body">
                                        {courseGet.achievements.map(stringText => 
                                        <h4 key={courseGet.achievements.indexOf(stringText)}><i className="fa fa-check p-3" aria-hidden="true" style={{color: 'green'}}></i>{stringText}</h4>)}
                        </div>
                    </div> */}

                    

                    {/* Playlist */}
                    {/* <div className="col-sm-12 mb-5">
                        <div className="card-header" style={{borderRadius: '2rem'}}>
                            <h3 className='ml-3' style={{fontWeight: 'bold', color: '#5168FF'}}> Playlist</h3>
                        </div>
                        <div className="card-body" style={{overflow: 'auto', maxHeight: '30rem'}}>
                            {this.state.courseDetails.courseVideos.map(video => (
                                <div key={video.videoID} className="card m-2" style={{borderRadius: '1rem'}}>
                                    <div className="row">
                                        <div className="col-sm-2 text-center p-3 m-auto">
                                            <a href='#'><i style={{color: '#5168FF'}} className="fa fa-3x fa-play-circle"></i></a>
                                        </div>
                                        <div className="col-sm-10 text-left p-3 m-auto">
                                            <h5>{video.videoName}</h5>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> */}
                    

                {/* </div>
                </div> */}
                


            </div>
        );
    }
}
 
export default CourseDetailRenderer;