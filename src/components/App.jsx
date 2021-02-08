import React, { Component } from 'react'
import Navigation from './navigation';
import Header from './header';
import InAction from './InAction';
import WhyYastaBot from './WhyYastaBot';
import Technology from './Technology';
import Features from './Features';
import Security from './Security';
import Contact from './contact';
import $ from 'jquery';

export class App extends Component {
  state = {
    resumeData : {},
  }
  getResumeData(){
    $.ajax({
      url:'/data.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.resumeData.Header}/>
        <InAction data={this.state.resumeData.InAction}/>
        <WhyYastaBot  data={this.state.resumeData.WhyYastaBot}/>
        <Technology  data={this.state.resumeData.Technology}/>
        <Features />
        <Security  data={this.state.resumeData.Security}/>
        {/* <Contact  data={this.state.resumeData.Contact}/> */}
      </div>
    )
  }
}

export default App
