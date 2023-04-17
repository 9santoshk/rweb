import React from 'react'
import Navigation from '../components/navigation/Navigation';
import Block1 from '../components/block1/Block1';
import Block2 from '../components/block2/Block2';
import Footer from '../components/footer/Footer';
import ContactBlock from '../components/contactBlock/ContactBlock';


class Homepage extends React.Component {

  render() {
    return (
      <div>
        {/* <Navigation/> */}
        <Block1/>
        <Block2/>
        <ContactBlock/>

        {/* <Footer/> */}

      </div>

      )
  }
}


export default Homepage;
