import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: black;
    color: white;
    font-family: 'Arial', sans-serif;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(18, 18, 18, 0.8); /* Adding transparency for readability */
  border-radius: 10px;
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
  color: #e0e0e0;
`;

const WorkoutContainer = styled.div`
  margin-bottom: 40px;
  padding: 20px;
  background-color: #1e1e1e;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const WorkoutTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 1.8rem;
  color: #ff6f61;
`;

const TargetArea = styled.p`
  margin-bottom: 20px;
  font-style: italic;
  color: #bdbdbd;
`;

const Video = styled.div`
  background-color: #333;
  width: 100%;
  padding-top: 100.78%; /* 9:16 Aspect Ratio */
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;

  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 8px;
  }
`;

const BackButton = styled.a`
  position: fixed;
  top: 20px;
  left: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #ffa800; /* Yellow background */
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1000;


`;

const workouts = [
  {
    title: 'Overhead Press',
    target: 'Shoulders',
    video: 'https://youtube.com/embed/OLePvpxQEGk',
  },
  {
    title: 'Lateral Raises',
    target: 'Side Delts',
    video: 'https://youtube.com/embed/JIhbYYA1Q90',
  },
  {
    title: 'Front Raises',
    target: 'Front Delts',
    video: 'https://youtube.com/embed/NdQE5Fhfqn4',
  },
  {
    title: 'Rear Delt Flyes',
    target: 'Rear Delts',
    video: 'https://youtube.com/embed/P5CXx_jgTDE',
  },
  {
    title: 'Arnold Press',
    target: 'Shoulders',
    video: 'https://youtube.com/embed/ppVR9oF32K0',
  },
  {
    title: 'Upright Rows',
    target: 'Shoulders and Traps',
    video: 'https://youtube.com/embed/AWsGWt-VMl8',
  },
];
/*Various youtube links are used */
const Wrksholder = () => (
  <>
    <GlobalStyle />
    <BackButton href="/wrkout">Back</BackButton> {/* Replace "/" with the desired URL */}
    <Container>
      <Header>Shoulder Workouts</Header>
      {workouts.map((workout, index) => (
        <WorkoutContainer key={index}>
          <WorkoutTitle>{workout.title}</WorkoutTitle>
          <TargetArea>Targets: {workout.target}</TargetArea>
          <Video>
            <iframe 
              src={workout.video} 
              title={workout.title} 
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen 
              frameBorder="0"
            />
          </Video>
        </WorkoutContainer>
      ))}
    </Container>
  </>
);

export default Wrksholder;
