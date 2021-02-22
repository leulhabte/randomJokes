import './App.css';
import useStyles from "./Styling";
import Joke from './Components/Jokes/Jokes';
import Appbars from "./Components/AppBars/Appbars";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Appbars />
      <div className={classes.content}>
        <div className={classes.toolbar}/>
        <Joke/>
      </div>
    </div>
  );
}

export default App;
