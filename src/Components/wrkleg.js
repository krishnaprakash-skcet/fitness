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

const workouts = [
  {
    title: 'Squats',
    target: 'Quads, Glutes',
    video: 'https://youtube.com/embed/MLoZuAkIyZI?si=XmjARxu1HZkWCFnC',
  },
  {
    title: 'Lunges',
    target: 'Quads, Glutes, Hamstrings',
    video: 'https://youtube.com/embed/TwEH620Pn6A?si=BAUVWKI7hQd-f9Fe',
  },
  {
    title: 'Leg Press',
    target: 'Quads, Glutes, Hamstrings',
    video: 'https://youtube.com/embed/ZOHxJ8dhrxc?si=GPdDXsTgxG0a-elN',
  },
  {
    title: 'Deadlifts',
    target: 'Hamstrings, Glutes, Lower Back',
    video: 'https://youtube.com/embed/vfKwjT5-86k?si=U-JJ3lEKEm4kU1id',
  },
  {
    title: 'Calf Raises',
    target: 'Calves',
    video: 'https://youtube.com/embed/xK6DoHBXTdw?si=ZvkhAfyi18ePDSDX',
  },
];
/*Various youtube links are used */
const Wrklegs = () => (
  <>
    <GlobalStyle />
    <BackButton href="/wrkout">Back</BackButton> {/* Replace "/" with the desired URL */}
    <Container>
      <Header>Leg Workouts</Header>
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

export default Wrklegs;
