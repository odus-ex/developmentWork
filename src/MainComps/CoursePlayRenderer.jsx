import React, {Component } from 'react';
import { Button } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import PlaylistComp from '../MinComps/PlaylistComp';


class CoursePlayRenderer extends Component {

    urlList = this.props.location.state.map(video => video.videoURL);
    
    

    state={
        playlistChatSwitch: true,
        urlListIndex: 0   //can be manipulated according to resume and enrollment
    }


    handleSwitch = (value) => {
        this.setState({playlistChatSwitch: value})
    }

    hnadleShuffle(shuffle) {
         
        shuffle === 1 ? this.setState({urlListIndex: this.state.urlListIndex + 1}) : this.setState({urlListIndex: this.state.urlListIndex - 1})
    }




    render() {
        return(

            <div className="container-fluid m-0 p-0">
                {/* Playlist chat and shuffle buttons */}
                <div className="row no-gutters">
                    <div className="col-4">
    
                        <div className="row no-gutters">
                            <div className="col-6">
                                <Button style={{width: '100%'}} onClick={() => this.handleSwitch(true)}>Playlist</Button>
                            </div>
                            <div className="col-6">
                                <Button style={{width: '100%'}} onClick={() => this.handleSwitch(false)}> Chat</Button>
                            </div>
                        </div>
    
    
                    </div>
                    <div className="col-4">
                        <Button style={{width: '100%'}} onClick={() => this.hnadleShuffle(0)}>Prev</Button>
                    </div>
                    <div className="col-4">
                        <Button style={{width: '100%'}} onClick={() => this.hnadleShuffle(1)}> Next</Button>
                    </div>
                </div>
                {/* Chat/Playlist col and video player */}
                <div className="row no-gutters">
                    <div className="col-md-4  border">
                        {this.state.playlistChatSwitch === true ? <PlaylistComp playlist={this.props.location.state} /> : <h1> This is chat</h1> }
                    </div>
                    <div className="col-md-8">
                        <ReactPlayer url={`${this.props.location.state[this.state.urlListIndex].videoURL}`} playing controls height='50rem' width='100%' />   
                    </div>
                </div>
                {/* Resource download links*/}
                    <div className="row no-gutters">
    
                        <div className="col-12">
                            <div className="card p-3">
                                <h3> Resources</h3>
                            </div>
                        </div>
    
                        <div className="col-12">
    
                        </div>
    
                    </div>
    
    
            </div>
        
        )
    }
    
}

export default CoursePlayRenderer;