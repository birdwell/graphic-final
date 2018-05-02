// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  CodePane,
  List,
  Quote,
  Slide,
  Text,
  Layout,
  Image,
  Appear,
  Fill
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import layout from 'spectacle/lib/components/layout';
import watson from './assets/watson.jpg';
import FirstExample from './first-example';
import SecondExample from './second-example';
import { ThirdExample } from './third-example';

// Require CSS
require('normalize.css');

const theme = createTheme(
    {
        primary: '#ffc107',
        secondary: 'white',
        green: '#4caf50',
        black: "black"
    },
    {
        primary: 'Montserrat',
        secondary: 'Helvetica'
    }
);

const roles = [
  {
    name: "Josh Birdwell",
    role: "Frontend Developer and UI/UX"
  },
  {
    name: "Junior Smeltzer",
    role: "Project Manager and General Developer"
  },
  {
    name: "Austin Graham",
    role: "Backend Developer and Physics Lead"
  }
];

const projectGoals = [
    'Extract emotion from tweets in a hashtag',
    '3D Visualization of tweets with emotion',
    'Represent each tweet as a marble',
    'Add physics interactions with marbles'
];

export default class Presentation extends React.Component {
  render() {
    return <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
            <Slide transition={['fade']} bgImage="https://media.giphy.com/media/dYYor4kyusYhO/giphy.gif">
                <Heading size={1} fit caps lineHeight={1} textColor="white">
                    Hashtag Experience
                </Heading>
                <Text margin="10px 0 0" textColor="secondary" textSize="40" bold>
                    Group 15
                </Text>
            </Slide>
            <Slide transition={['fade']} bgColor="tertiary">
                <Heading size={4} caps textColor="green">
                    Team & Roles
                </Heading>
                {roles.map(person => <Layout key={person.name} fill>
                        <Fill>
                            <Text size={5}>{person.name}</Text>
                        </Fill>
                        <Fill>
                            <Text size={5}>{person.role}</Text>
                        </Fill>
                    </Layout>)}
            </Slide>
            <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                <Heading size={4} caps textColor="green">
                    Project Goals
                </Heading>
                <Text textColor="white">
                    For a user to enter a hashtag and see the emotional tone
                    from a group of tweets.
                </Text>
                <List>
                    {projectGoals.map(goal => (
                        <ListItem key={goal} textSize="40">
                            {goal}
                        </ListItem>
                    ))}
                </List>
            </Slide>
            <Slide transition={['fade']} bgColor="white">
                <Heading size={4} caps textColor="green">
                    Our Solution
                </Heading>
            </Slide>
            <Slide transition={['fade']} bgImage="https://media.giphy.com/media/MNa0HKdhc3SGQ/giphy.gif">
                <Text fill bold>
                    Extract tweets from Twitter using Twitter Python library
                </Text>
            </Slide>
            <Slide transition={['fade']}>
                <Text fill bold textColor="white">
                    Feed tweets into Watson Tone Analyzer
                </Text>
                <Layout fill>
                    <Fill>
                      <Image src="https://media.giphy.com/media/l3vR16pONsV8cKkWk/source.gif" width="250" style={{ borderRadius: '30%' }} />
                    </Fill>
                    <Fill>
                      <Image src={watson} />
                    </Fill>
                </Layout>
            </Slide>
            <Slide transition={['fade']}>
              <Text fill bold textColor="white">
                Use Three.js for 3D visuals. (marbles, container, physics)
              </Text>
              <Text fill bold textColor="white">v0.0.1</Text>
              <FirstExample />
            </Slide>
            <Slide transition={['fade']}>
              <Text fill bold textColor="white">
                This is our v1.0.0! It's where we started realizing our idea. 
              </Text>
              <SecondExample />
            </Slide>
            <Slide transition={['fade']} bgDarken="0.2" bgImage="https://media.giphy.com/media/99NDYpVN7DnQQ/source.gif">
                <Heading fill bold size={1} textColor="white">
                Emojis
                </Heading>
            </Slide>
            <Slide transition={['fade']} >
                <Heading size={4} caps textColor="green">
                    Overall Process
                </Heading>
                <List textColor="black">
                    <ListItem>Built backend with python and flask</ListItem>
                    <ListItem>Built frontend with reactjs and threejs</ListItem>
                </List>
            </Slide>
            <Slide transition={['fade']} >
                <Heading size={4} caps textColor="green">
                    Tasks
                </Heading>
                <Text textAlign="left">
                    Frontend & Graphics
                    <List>
                        <ListItem>Get threejs running in a reactjs app</ListItem>
                        <ListItem>Spheres & Emoji Cover</ListItem>
                        <ListItem>Interface before Experience</ListItem>
                        <ListItem>Emoji Filtering & Tweets</ListItem>
                    </List>
                </Text>
            
            </Slide>
            <Slide transition={['fade']}>
                <Heading size={4} caps textColor="green">
                    Tasks
                </Heading>
                <Text textAlign="left">
                    Physics
                    <List>
                        <ListItem>Bouncing</ListItem>
                        <ListItem>Mass, Size & Emotion</ListItem>
                        <ListItem>Morphing into one</ListItem>
                        <ListItem>Orbital Rotation</ListItem>
                    </List>
                </Text>
            </Slide>
            <Slide transition={['fade']} bgColor="white">
                <Text size={5} caps bold textColor="black">
                    Quick Glimpse of v2.0.0
                </Text>
                <ThirdExample />
            </Slide>
            <Slide transition={['fade']}>
                <Heading size={4} caps textColor="green">
                    Expectation vs Reality
                </Heading>
                <Image src={require('./assets/expectation.jpg')} height="200" />
                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/HluANRwPyNo?rel=0&amp;controls=0&amp;showinfo=0;autoplay=1;mute=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> */}
                <List>
                </List>
            </Slide>
            <Slide transition={['fade']}>
                <Heading size={4} caps textColor="green">
                    So close...
                </Heading>
                <Image src="https://media.giphy.com/media/qLWdMYX1NYF2g/source.gif" height="200" />
                <List>
                </List>
            </Slide>
            <Slide transition={['fade']}>
                <Heading size={4} caps textColor="green">
                    Future Development
                </Heading>
                <List>
                </List>
            </Slide>
        </Deck>;
  }
}
