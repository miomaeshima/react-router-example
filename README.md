## Practicing react router

Things I learned are ...

### BrowserRouter 
Wrap the app to use Routes with BrowserRouter

### Route 
By wapping a component in a Route component with a path, you can set the application so that it shows that comopnent only when the URL with that path is entered.
For example,

```
<Route to="/about">
    <About />
</Route>
```
Viwers can see About component only by entering the path /about.

### path and exact path

props "path"| If the URL satisfies the path, even partially, the component is rendered.
props "exact path" | If the URL matches the path exactly, the component is rendered. 

This URL to path comparison continues even after exact path is found.
But Switch is different.

### Switch

Switch | Switch returns the first and only one Route component that the URL satisfies

### Link
Link components are faster than anchors because Links renders only the changed part

### NavLink
NavLink comonents can have activeNameClass props. When the URL is accessed, any style set for .active is added to the Link.

Need to set "exact to" to "/".
Otherwise, when "/about" or "/contact" URL is chosen, .active style is applied to Home Link, too, as the URL satisfies -- partially matches -- "/". 

If you want to apply a specifid style directly to a NavLink, inline stylins is possible with activeStyle.

### Component props
Using component props, we can obtain props from the component. Props include location and match objects that contain accessed URL path information such a "/posts".

```
 <Route exact path="/posts" component={Posts} />
 ```
To obtain match (and match.params.id), need to do type validation.
I did as follows.

```
import PropTypes from 'prop-types';
```
Then,

```
function Post(props) {
    console.log(props.match.params.id);
    return <h2>Post</h2>;
}

Post.propTypes = {
    match: PropTypes.any, //This is necessary.
};
```
Reference: PropTypes in React: A complete guide
https://blog.logrocket.com/validating-react-component-props-with-prop-types-ef14b29963fc/