// import Typewriter from 'typewriter-effect';
import { Typewriter } from 'react-simple-typewriter';
// import RotatingSquare from '../../ThreeJS/Square';
import Cuboid from '../../ThreeJS/Cuboid';
import AboutAnim from "../../ThreeJS/AboutAnimation"

const About = () => {
  return (
    <div className="flex-column justify-center items-center h-screen w-screen bg-gray-800 text-center">
      <h3 className="text-white text-xl " style={{ padding:"4rem 12rem"}}>
      <Typewriter
          words={[
            'Here is about me, I\'m a full stack JavaScript developer with expertise in the MERN stack. I also have experience working with AWS services such as Cognito and Lambdas. In addition to JavaScript, I can also code in TypeScript. Currently, I\'m pursuing a PhD and have recently completed my M.Tech in Electronics and Communication Engineering in 2022, after earning my B.Tech in the same field in 2020. With my strong academic background and technical expertise, I\'m passionate about developing innovative solutions that solve complex problems and make a positive impact.',
            'I enjoy working on challenging projects that require me to learn new things and push the boundaries of what I can do. I believe in the power of collaboration and teamwork, and always strive to create an inclusive and supportive work environment. When I\'m not coding, I like to read books, watch movies, and spend time with my family and friends.',
            'If you\'re interested in working with me, or just want to say hi, feel free to get in touch!'
          ]}
          
          loop={true}
          cursor={true}
          typeSpeed={70}

          deleteSpeed={70}
        />
      </h3>
      <AboutAnim/>
      
    </div>
  )
}

export default About;
