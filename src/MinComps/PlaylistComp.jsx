import React from 'react';



const PlaylistComp = (props) => {

return(

    <div className="container-fluid">

        <div className="card no-gutters text-left" style={{height: `${props.height}`}}>
            <div className="card-header">
            <h3> Playlist</h3>
            </div>
            <div className="card-body p-0" style={{overflow: 'auto'}}>

            {props.playlist === undefined ? <h1> Loading..</h1>: props.playlist.map(video =>
                        
                        <div className="card p-2 m-2 no-gutters" key={video.videoName} >
                            <div className="row">
                                <div className="col-1 text-center m-auto ">
                                       <h1> <i className="fa fa-play-circle"></i></h1>
                                </div>
                                <div className="col-11 m-auto text-left">

                                <h4>{video.videoName}</h4>    
                                
                                </div>
                            </div>
                        </div>        ) }


                
                
            </div>
            
        
        </div>


    </div>
)


}


export default PlaylistComp;