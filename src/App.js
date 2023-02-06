import {
  BrowserRouter as Router,
  Route,
  
} from 'react-router-dom'
import { Switch } from 'react';
import FinalScreen from './pages/FinalScreen';
import Question from './pages/Question';
import Setting from './pages/Setting';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

function App() {
  return (
   <Router>
    <Container maxWidth="sm">
      <Box textAlign="center" mt={5}>
      <Switch>
        <Route path="/" exact>
          <Typography variant='h2' fontWeight="bold">Quiz App</Typography>
          <Setting />
          </Route>
          <Route path="/questions">
          <Question/>
          </Route>
          <Route path="/score">
          <FinalScreen/>
          </Route>
        </Switch>
      </Box>
     
    </Container>
     
   </Router>
  );
}

export default App;
