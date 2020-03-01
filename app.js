const express = require('express');


const app = express();


const postDump = [
    {heading: 'Annual Day scheduled on 25th of March', circle: '12th F', author: 'Sunil Pathak', type: 'event', isMaterial: '', numOfComments: '10' , contentBody: 'This is a content body which specifies what will be writted below the heading of the post.'},
    {heading: 'Tomorrow declared a holiday due to heavy rains', circle: '10th A', author: 'Sherie Abraham', type: 'announcement', isMaterial: '', numOfComments: '22' , contentBody: 'This is a content body which specifies what will be writted below the heading of the post.'},
    {heading: 'Physics electromagnetism explained', circle: '8th G', author: 'Pink pussy cube', type: 'task', isMaterial: 'https://www.youtube.com/watch?v=cy6kba3A8vY', numOfComments: '5' , contentBody: 'This is a content body which specifies what will be writted below the heading of the post.'},
    {heading: 'Republic day festival', circle: '5th C', author: 'Harsh Soor', type: 'event', isMaterial: '', numOfComments: '8' , contentBody: 'This is a content body which specifies what will be writted below the heading of the post.'},
] 


app.get('/', (req, res) => {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.json(postDump)
    res.end()
})



app.listen(3000, ()=> {console.log('Listening on port 3000...')})