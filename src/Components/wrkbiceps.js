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
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 10px 20px;
  background-color: #ffa800;
  color: white;
  text-decoration: none;
  border-radius: 5px;
 
  text-align: center;

    
  }
`;
/*Various youtube links are used */

const workouts = [
  {
    title: 'Bicep Curl',
    target: 'Biceps',
    video: 'https://youtube.com/embed/N6paU6TGFWU?si=HmiL5ztUSEnmv7WF',
  },
  {
    title: 'Hammer Curl',
    target: 'Biceps and Forearms',
    video: 'https://youtube.com/embed/OPhgvwKBOwI?si=gE_D-oC1D95xi6dg',
  },
  {
    title: 'Concentration Curl',
    target: 'Biceps',
    video: 'https://youtube.com/embed/cHxRJdSVIkA?si=sINLdkHygBK8JrSo',
  },
  {
    title: 'Preacher Curl',
    target: 'Biceps',
    video: 'https://youtube.com/embed/Htw-s61mOw0?si=RmnJSG_TC0wSqLFT',
  },
];

const Wrkbiceps = () => (
  <>
    <GlobalStyle />
    <Container>
      <BackButton href="/wrkout">Back</BackButton>
      <Header>Bicep Workouts</Header>
      {workouts.map((workout, index) => (
        <WorkoutContainer key={index}>
          <WorkoutTitle>{workout.title}</WorkoutTitle>
          <TargetArea>Targets: {workout.target}</TargetArea>
          <Video>
            <iframe 
              src={workout.video} 
              title={workout.title} 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen 
            />
          </Video>
        </WorkoutContainer>
      ))}
    </Container>
  </>
);

export default Wrkbiceps;
