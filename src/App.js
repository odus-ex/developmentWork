import React, { Component } from 'react';
import CourseRenderer from './MainComps/CourseRenderer';
import {Route, Switch} from 'react-router-dom';
import CourseDetailRenderer from './MainComps/CourseDetailRenderer';
import CoursePlayRenderer from './MainComps/CoursePlayRenderer';
import CourseFormRenderer from './MainComps/CourseFormRenderer';

class App extends Component {
  render() {
    return (
      
      <Switch>
      <Route path='/courseDetail/:id/play/' component={CoursePlayRenderer}  />
      <Route path='/courseDetail/:id' component={CourseDetailRenderer} />
      <Route path='/create' component={CourseFormRenderer} />
      <Route path='/' component={CourseRenderer} />
      </Switch>

      
      
    );
  }
}

export default App;
