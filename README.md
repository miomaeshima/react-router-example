## Practicing react router

Things I learned are ...

### BrowserRouter 
Wrap the app to use Routes with BrowserRouter

### Route 
Route components have path props

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