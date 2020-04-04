import React from 'react';
import Test from './test';

const About = () => {
  return (
    <div className="about-app">
      <div>
        <h3>About</h3>
        <Test month="1" />
        <Test month="2" />
        <Test month="3" />
        <div>
          <p>This Term's of Saving is about commitment and patient.</p>
          <p>Where you choose to agree on a contract for 1, 2, or 3 months.</p>
          <p>
            Then every 2 weeks on your direct deposit, 
            We will take an amount that you agree on, base on your contract.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;