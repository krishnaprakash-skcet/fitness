import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: black;
    background-size: cover;
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
/*various youtube links are used  */
const workouts = [
  {
    title: 'Pull-Ups',
    target: 'Upper Back',
    video: 'https://youtube.com/embed/ZPG8OsHKXLw',
  },
  {
    title: 'Lat Pulldowns',
    target: 'Lats',
    video: 'https://youtube.com/embed/hnSqbBk15tw',
  },
  {
    title: 'Bent Over Rows',
    target: 'Middle Back',
    video: 'https://youtube.com/embed/Nqh7q3zDCoQ',
  },
  {
    title: 'Seated Cable Rows',
    target: 'Middle Back',
    video: 'https://youtube.com/embed/G18ysBYu5Mw',
  },
  {
    title: 'Deadlifts',
    target: 'Lower Back',
    video: 'https://youtube.com/embed/8np3vKDBJfc',
  },
  {
    title: 'Face Pulls',
    target: 'Upper Back and Rear Delts',
    video: 'https://youtube.com/embed/DVxfKB0BnlY',
  },
];

const Wrkback = () => {
  return (
    <>
      <GlobalStyle />
      <BackButton href="/wrkout">Back</BackButton> {/* Replace "/" with the desired URL */}
      <Container>
        <Header>Back Workouts</Header>
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
};

export default Wrkback;
