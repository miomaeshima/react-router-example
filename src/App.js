import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div>
                <h1>Hello React Router</h1>
            </div>
            <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route>
                <NotFound />
            </Route>
            </Switch>
        </BrowserRouter>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Contact() {
    return <h2>Contact</h2>;
}

function NotFound() {
    return <h2>Not Found Page</h2>;
}
export default App;
