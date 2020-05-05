import React, { Component } from 'react';
import SearchComp from '../MinComps/SearchComp';
import CourseCardComp from '../MinComps/CourseCardComp';



class CourseRenderer extends Component {

    state = { 

        // Array of courses
        courseDump: [],

        //Making a copy of above dump.
        defaultCourseDump: []

        
     }


     componentDidMount() {
        fetch('http://localhost:4000/').then(
            results => {return results.json()}
        ).then( 
            data => {
                
                this.setState({defaultCourseDump: data})
                this.setState({courseDump: data})
                
            
        }
           

        )
     }






     onSearch = (event) => {

        this.setState({courseDump:  this.makeNewCourserArray(event.target.value)})
     }

     makeNewCourserArray= (searchedTerm) =>{

        if(searchedTerm === ''){
            return this.state.defaultCourseDump
        }
        else{
            
            let newCourseArray = [];
            


            this.state.defaultCourseDump.map(course => (

                // in course name
                course.courseName.toLowerCase().includes(searchedTerm.toLowerCase()) ||
                // in authour name
                course.authorName.toLowerCase().includes(searchedTerm.toLowerCase()) ||
                // in description
                course.courseDescription.toLowerCase().includes(searchedTerm.toLowerCase()) 
                // or check for any match of substring in the string searched 
                

                                
                ? 
            
            
            newCourseArray.push(course) : console.log()))
            return newCourseArray;
        }

     }





    render() { 
        

       
        return ( 
           
            <div className="row justify-content-center" >
                <div className="col-12 text-center m-5" >
                    <SearchComp onSearch={this.onSearch}/>
                </div>

                <div className="col-12 text-center m-5" >
                    
                    
                    <div className="container">
                    <div className="row justify-content-center">
                        
                        
                        {this.state.courseDump.length === 0 ? <h2>No courses found :(</h2> : 
                        
                        this.state.courseDump.map(course => 
                        <div className="col-sm-12 col-md-6 col-lg-4 text-center p-3" key={course.courseID}>
                               <CourseCardComp course={course}/>
                        </div>
                        
                        )}            

                    </div>
                    </div>
                    

                </div>
            </div>
         );
    }
}
 
export default CourseRenderer;