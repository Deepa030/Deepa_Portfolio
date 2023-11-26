import React, { Component } from 'react';
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

class About extends Component {
  render() {
    return (
      <div className={classes.box} id='about'>
        <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        >
          <span className={classes.heading}>ABOUT ME</span>
          {/*<h2 className={classes.heading}>Who Am I?</h2>*/}
          <div className={classes.About}>
            <p>
              My name is <b>Deepa B Madagudi</b> 
                                 .  I have a Master's in Computer Application, and I love creating new things. 
               The excitement of building something from scratch drives me.
               I'm passionate about exploring fresh ideas and pushing the boundaries of technology. :)
            </p>
            <p className={classes.br}>
              I love exploring new technologies and being a practitioner, I like to stay on top of
              latest trends. I try to leave every line of code I write more readable, accessible,
              and modular.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default About;
