import React, { Component } from 'react';
import AddFormElement from '../MinComps/AddFormElement';


class CourseDetailRenderer extends Component {

     achRef = React.createRef()


    state = {  

        formValues: {
            courseName: '',
            courseDescription: '',
            authorName: 'Kalyan Riyali',
            achievementsHolder: '',
          

        },

        formAchivementsList: [],

        formVideoList: [],

    }

    handleChange = (event) => {

        const changedFormValues = {...this.state.formValues}
        changedFormValues[event.target.name] = event.target.value

        this.setState({ formValues: changedFormValues})
    }

    addAchievements = () => {

        const tempHolder = [...this.state.formAchivementsList];
        tempHolder.push(this.state.formValues.achievementsHolder);
        console.log(this.state.achievementsHolder)
        this.setState({ formAchivementsList: tempHolder})

    }






    removeAchievements = (achievementString) => {

        

        this.state.formAchivementsList.map(achievements => (
            achievements.toLowerCase() === achievementString.toLowerCase() ?
            this.setState({formsAchivementList: this.state.formAchivementsList.splice(1,1)}) : console.log('Undo fail state: ', this.state.formAchivementsList) )  //fix this to delete the last element too.
        )
    }
   


    render() { 
        return (  
            <div className="container text-center border">
                <div className="row justify-content-center mt-5">
                    
                    <div className="col-12 text-left mb-5">
                        <h2> Upload a course</h2>
                    </div>

                    <form  style={{width: '100%'}}>

                        <div className="col-12 mt-4 mb-4" >

                                <input id='courseNameID' style={{width: '100%'}} onChange={this.handleChange} type='text' name='courseName' value={this.state.formValues.courseName} placeholder='Enter the course name here..'/>
                        </div>

                        <div className="col-12 mt-4 mb-4">
                                <input id='courseDescriptionID' style={{width: '100%'}} onChange={this.handleChange} type='text' name='courseDescription' value={this.state.formValues.courseDescription} placeholder='Enter the course description..'/>
                        </div>

                        <div className="col-12 mt-4 mb-4 text-left form-group">
                               
                                <input id='authorNameID' style={{width: '50%'}} onChange={this.handleChange} type='text' name='authorName' value={this.state.formValues.authorName} placeholder='Enter the course description..'/>
                        </div>


                        {/* Achievements */}

                        <div className="col-12 mt-4 mb-4">

                            <div className="card text-left">
                                <div className="card-header">
                                    <h4> Achievements</h4>

                                </div>

                                <div className="card-body">

                                    <p> Click to Add the achievements</p>
                                    {this.state.formAchivementsList.map(achievementString => (

                                        <AddFormElement key={achievementString} header={achievementString} onDelete={() => this.removeAchievements(achievementString)}/>

                                    ))}

                                    <div className="container">
                                    
                                        <input ref={this.achRef} id='achievementID' style={{width: '100%'}} onChange={this.handleChange} type='text' name='achievementsHolder' value={this.state.formValues.achievementsHolder} placeholder='Enter achievements..'/>
                                        
                                        <button className='btn btn-primary' onClick={this.addAchievements} type='button'>Add Achievements</button>

                                    </div>
                                    
                                    

                                </div>


                            </div>


                        </div>



                        <div className="col-12 text-center mt-5 mb-3">

                                <button className='btn btn-primary btn-lg' style={{width: '60%'}}> Upload </button>

                        </div>

                    </form>
                    

                    




                </div>
            </div>
        );
    }
}
 
export default CourseDetailRenderer;