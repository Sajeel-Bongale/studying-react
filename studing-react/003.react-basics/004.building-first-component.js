/*
    Link: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595420#overview
    onwards

    We will ultimately be building  our own custom HTML elements using react.
    A component is basically just a custom HTML element.

    We do that with this declarative approach, which means with React we defined the desired target state.

    When code is updated in the editor the dev server automatically picks up the updated code and live reloads
    the server.

    What is a component?
    A component in React is ultimately a function.

    It is considered a good and best practice to actually put new Components into their own separate files.
    You could also group all of them by putting them in a components folder.

    When creating a new component always name the file with CapitalCase naming convention.

    When writing the component use the same name as the file name as the function name.

    JSX allows you to return HTML from within JS functions, this is what ultimately lets you build
    React components.
    So return html tags or a tree from this newly built component.

    Finally export this function from within the file so that the component can be imported and
    used across your application.

    In the file where you want to import the component, import the component using it's name and provide the
    resolved path to the JS file of the component.

    You can only have one root element per component. Sibling root elements will generate an error.

    To wrap everything in one root element you could use one div as root.

    To add css to your component, create a new css file and put it in the same folder as the component.
    Then import the css file in your react component JS file and you should be able to use the classes.

    To make data in your component dynamic, you will need to make use of {} and put your JS expressions or
    variables inside the curly braces. React will resolve the values within the braces at runtime and
    output the result or variable value on the UI.

    See 01-starting project for example
 */
