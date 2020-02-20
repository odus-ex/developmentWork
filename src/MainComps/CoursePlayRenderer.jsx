import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import {Button} from 'react-bootstrap';

import '../style.css';

class CoursePlay extends Component {
    state = {  
        isWatchComplete: false,  //change this with handleProgress state.played
        renderPlaylist: true,
    }

    handleProgress = (obj) => {
        // Giving an object reflecting on progress details.
        console.log(obj)
    }

    handleChat = () => {
        this.setState({renderPlaylist: false})
    }

    handlePlaylist = () => {
        this.setState({renderPlaylist: true})
    }


    render() { 

        const {courseDetails} = this.props.location.state;
        return (    
                <div className="container-fluid" style={{minWidth: '120rem'}}>
                      <div className="row no-gutters">
                           {/* Playlist and chat  */}
                           <div className="col-3">
                                    <div className="row no-gutters" style={{borderRadius: '1rem'}}>
                                        {/* Playlist */}
                                        <div className="col-sm-6 text-center" >
                                            
                                                    <Button style={{width: '100%',height: '100%'}} onClick={this.handlePlaylist}> Playlist</Button>
                                        </div>
                                        {/* Chats */}
                                        <div className="col-sm-6 text-center">
                                                
                                                     <Button style={{width: '100%',height: '100%'}} onClick={this.handleChat}> Chat</Button>

                                        </div>
                                    </div>
                                </div>
                                {/* Shuffle Buttons */}
                                <div className="col-9 m-auto">

                                    <div className="row no-gutters">
                                    
                                        <div className="col-sm-6">
                                            
                                            <Button style={{width: '100%'}}>Previous</Button>
                                        
                                        </div>
                                        <div className="col-sm-6">
                                            <Button style={{width: '100%'}}>Next</Button>
                                        </div>
                                    </div>
                                </div>
                      </div>
                      
                      
                      
                       <div className="row no-gutters" >
                               
                                
                                {/* Video Lists or chat List */}
                                <div className="col-3 text-left">
                                    
                                    {this.state.renderPlaylist ? 

                                    <div className="card-body border" style={{overflow: 'auto', maxHeight: '50rem'}}>
                                        {courseDetails.courseVideos.map(video => (
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

                                    :

                                    console.log('Show Chat') }

                                </div>

                                {/* Video player*/}
                                <div className="col-9">
                                        

                                        <div className='player-wrapper'>
                                                <ReactPlayer
                                                className='react-player'
                                                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                                                width='100%'
                                                height='80%'
                                                controls={true}
                                                onProgress={this.handleProgress}
                                                style={{minHeight: '50rem'}}/>
                                        </div>



                                    
                                </div>


                        </div>


                        <div className="row mb-5">
                            <div className="col-12">
                                <div className="card text-left">
                                    <div className="card-header">
                                        <h2> Resources</h2>
                                    </div>
                                    <div className="card-body d-inline">
                                        <div className="row">
                                            <div className="col-3">
                                                <i className='fa fa-folder-open'><a href='#'>Resource_name_1.zip</a> </i>
                                            </div>
                                            <div className="col-3">
                                            <i className='fa fa-folder-open'><a href='#'>Resource_name_2.zip</a> </i>
                                            </div>
                                            <div className="col-3">
                                            <i className='fa fa-folder-open'><a href='#'>Resource_name_3.zip</a> </i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                </div>
                
            


          );
    }
}
 
export default CoursePlay;