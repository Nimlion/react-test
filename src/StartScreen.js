import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class StartScreen extends React.Component {
  constructor(props) {
    super(props);
    this.scrollFn = this.scrollFn.bind(this);
    this.about = "I am a 21 year old developer born in Amsterdam. Who is currently studying at the Hogeschool of Amsterdam. In my sparetime I like to create small projects and game. Mostly TFT or Rocket League. But other then that I am either busy looking at all new things tech got to offer or doing something fun with friends. Shout out to the “Feestbeesten”";
    this.why = "This website was created as a demo project using the JavaScript framework React JS. This website also serves as a small portfolio. I have created much bigger and better projects then this. So feel free to contact me and ask about them. Until then enjoy my simple website.";
  }

  scrollFn(event) {
    event.preventDefault();
    console.log('tapped');
    window.scrsollTo(0, 0);
    return null;
  }

  render(props) {
    return (
      <span className="slider">
        <FancyBackground >
          <IntroBlock />
          <p id="copyright">&copy; {(new Date().getFullYear())} All right have not been reserved yet</p>
          <NextButton onClick={this.scrollFn}>Why?</NextButton>
        </FancyBackground>
        <PlainBackground >
          <p className="middle-text">{this.why}</p>
          <NextButton>About me</NextButton>
        </PlainBackground>
        <FancyBackground >
          <div id="top-block">
            <p className="head-block underline">About me</p>
            <p className="under-text">{this.about}</p>
          </div>
          <BottomBlock />
          <NextButton>The end</NextButton>
        </FancyBackground>
        <PlainBackground>
          <EndBlock />
          <img className="cheese logo" src="cheese.png" alt="cheese logo" />
          <img className="camel logo" src="camel.png" alt="camel logo" />
        </PlainBackground>
      </span>
    );
  }
}

class IntroBlock extends React.Component {
  render() {
    return (
      <div id="intro-block">
        <p className="head-block underline">Angular demo</p>
        <p className="under-block">Made by: Hosam Darwish</p>
      </div>
    );
  }
}

function FancyBackground(props) {
  return (
    <section>
      <div className='coolBackground'>
        {props.children}
      </div>
    </section>
  );
}

function BottomBlock(props) {
  return (
    <div id="bottom-block">
      <p className="under-block underline-sm">Socials</p>
      <div className="image-box">
        <a rel="noopener noreferrer" href="https://www.linkedin.com/in/hosam-darwish-885307152/" target="_blank"><img src="/linkedin.png" alt="linkedin" /></a>
        <a rel="noopener noreferrer" href="https://www.instagram.com/hosam.darwi/" target="_blank"><img src="/insta.png" alt="insta" /></a>
        <a rel="noopener noreferrer" href="https://my.playstation.com/profile/NimLion" target="_blank"><img src="/ps.png" alt="playstation" /></a>
      </div>
    </div>
  );
}

function PlainBackground(props) {
  return (
    <section>
      <div className='plainBackground'>
        {props.children}
      </div>
    </section>
  );
}

function EndBlock(props) {
  return (
    <div id="middle-block">
      <p className="head-block underline">The End</p>
      <p className="under-text">Again? <img src="again.png" alt="re run the page" /></p>
    </div>
  );
}

function NextButton(props) {
  return (
    <button className="btn-next">
      {props.children}
    </button>
  );
}

ReactDOM.render(
  <StartScreen />,
  document.getElementById('root')
);

export default StartScreen;
