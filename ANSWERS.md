##- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
The effect of passing props when calling super() allows you to access this.props in the constructor. There is no need to pass props into the constructor if you want to use it in other places because React automatically sets it for you 


##- [ ] Describe a life-cycle event in React?
A life cycle event is base React method provided with React for us to initiate code during the life of our components. There are different periods such as Mounting, Updating, and uUmounting which some different methods can span. These events allow us to pull data from APIs, mount UI components, and force re-renders.


##- [ ] Explain the details of a Higher Order Component?
A Higher Order Component is a function that takes in a component and returns a new modified component. It can be used in authentication, routing, or connecting components


##- [ ] What are three different ways to style components in React? Explain some of the benefits of each.
Using CSS Stylesheet, Styled-components, and Bootstrap.
CSS Stylesheet, when you want separate css file for each component
Styled-components, when you want to reuse your style properties in the same file.
Bootstrap, there are pre-built components that are already styled out or you can custom style your components in a separate file.