import React, { Component } from 'react'
import Navigation from './components/Navigation';
import Header from './components/Header';
import InAction from './components/InAction';
import WhyYastaBot from './components/WhyYastaBot';
import Technology from './components/Technology';
import Features from './components/Features';
import Security from './components/Security';
import Contact from './components/contact';
import Footer from './components/Footer';
import JsonData from './data/data.json';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <InAction data={this.state.landingPageData.InAction} />
        <WhyYastaBot data={this.state.landingPageData.WhyYastaBot} />
        <Technology data={this.state.landingPageData.Technology} />
        <Features data={this.state.landingPageData.Features} />
        <Security data={this.state.landingPageData.Security} />
        {/* <Contact data={this.state.landingPageData.Contact} /> */}
        <Footer data={this.state.landingPageData.Footer} />
      </div>
    )
  }
}

export default App;
