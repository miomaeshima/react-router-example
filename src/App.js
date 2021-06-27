import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div>
                <h1>Hello React Router</h1>
            </div>
            <h3>SLOW: Reload the whole page</h3>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
            <h3>FASTER: Use Link component to update only necessary part</h3>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <h3>NavLink</h3>
            <ul>
                <li>
                    <NavLink
                        activeStyle={{ fontWeight: 'bold', color: 'red' }}
                        exact
                        to="/"
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/about">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/contact">
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/posts">
                        Posts
                    </NavLink>
                </li>
            </ul>
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
                {/* Using comonent props, we can obtain props from the component. Props include location and match objects that contain accessed URL path information such a "/posts" */}
                <Route exact path="/posts" component={Posts} />
                <Route path="/posts/:id" component={Post} />

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

function Posts() {
    return <h2>Post List</h2>;
}

function Post(props) {
    console.log(props.match.params.id);

    return <h2>Post</h2>;
}

Post.propTypes = {
    match: PropTypes.any,
};
export default App;
