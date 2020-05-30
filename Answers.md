# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.
    React JS takes away some of the hard work of creating components in html then modifying it in JS. React has all the code in one. It makes it a little easier to style certain components. It also updates on it's own as well as giving you errors when something is off. It also can take input so you can influence the code or the information. 

1. Describe component state.
    Component state is practically a deconstructed variable. it takes in two states whatever it is and whatever it will be once you change it's state. After the '=' you set the state of the first variable and then second variable you can pass data to change the first variable and whenever you call the first variable it displays or is given the value that you gave it or it can change value if you set it to change with outside influence, such as the change of a document that you are fetching with axios.

1. Describe props.
    Props are properties passed into a component from the parent so that it can get data from it. They are read only unlike useState.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?
    Side effects are something that affects something that affects something else outside the scope of your project such as API requests with axios. To sync the effects you have axios fetch the state whenever your page is loaded or reloaded and from there you can use .then to do something with the response that it gets back. To have the props read that you need to create a child component to read the props passed down by its parent such as the response you get from axios.