## Practicing react router

Things I learned are ...

BrowserRouter | Wrap the app to use Routes with BrowserRouter

Route | Route components have path props

props "path"| If the URL satisfies the path, even partially, the component is rendered.
props "exact path" | If the URL matches the path exactly, the component is rendered. 

This URL to path comparison continues even after exact path is found.

But Switch is different.

Switch | Switch returns the first and only one Route component that the URL satisfies