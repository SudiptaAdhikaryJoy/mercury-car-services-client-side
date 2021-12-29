import React from 'react';
import Banner from '../../Banner/Banner';
import Services from '../../Services/Services';
import About from '../../About/About';
import Messanger from '../../Messanger/Messanger';
import Overview from '../../Overview/Overview';
import IconCarousel from '../../IconCarousel/IconCarousel';
import Particles from "react-tsparticles";

const Home = () => {
    const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };
    const particlesLoaded = (container) => {
    console.log(container);
  };
    return (
        <div>
            {/* <Header></Header> */}
            <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#4ded",
          },
          links: {
            color: "#de3",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "top-right",
            enable: true,
            outMode: "out",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "edge",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />

            <Banner></Banner>
            <br />
            <Services /> <br />
            <About></About> <br /> <br />
            <Overview></Overview> 
            <br /> <br />
            <IconCarousel/>
            <Messanger/>
        </div>
    );
};

export default Home;