/*
    Link 1: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595966#announcements
    Link 2: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595970#announcements
    onwards

    Using react you want your applications to update on certain user inputs and other triggers.

    To achieve this you can try adding a variable to the component and changing it with the help of an
    event handler.

    However, you will find that the updates in the callback of the event handler does not trigger a change
    in the UI. For this you need to use a special concept in react called state.

    How react works behind the scenes?
    It is important to know why the above scenario does not work like it should.

    React starts in the index.js file and looks up the place where the root component (in this case App.js)
    should be attached to your actual DOM using the ReactDOM.render method.

    Then it evaluates all the custom components in the tree hierarchy and keeps evaluating them till no
    more react code is present to evaluate. It converts all the react code into browser readable HTML and JS
    and then outputs the created DOM tree to your screen.

    It does this cycle only once and its job is over.

    The function of the component runs only once.
    It is called when you are building the DOM tree during the above evaluation process.
    You can also observe that the component functions are not explicitly called but are called
    during this evaluation process implicitly by react.

    To trigger re-evaluations and re-renders you have to explicitly tell react that it needs to hold certain
    variables to be of high importance/priority and then process re-evaluations when these variables change

    Since, in the last example, a change in the regular variable did not trigger a change on the UI.

    This creation of special variables(State) can be achieved using the useState hook that react provides.

    State is not a specific React concept but it is important one in React.

    To use the state hook import the useState hook and then call the method inside the component
    function (nowhere else, but only inside the function)

    You pass the initial value to the useState method as an argument

    It returns an array containing two things:
    1. a state variable holding the initial value
    2. a setter method that allows you to change the value

    You can destructure it in any variable names of your choice

    Now to update the state you can simply call the setter method with the updated value

    Changes made using the setter are not immediately reflected but happen at a later time as
    react schedules them for updates later. This is somewhat like an async function

    State variables are created on a per component per instance basis. What this means is that if you have several
    instances(usages in the code) of a particular component, a new state variable will be created
    for that instance of the component.

    When a change is triggered on one of these components, only the state variable associated with that
    component will change while the others will remain the same.

    This is intended behaviour as you would not want other components to change in response to some
    user interaction with another one of the component instances.

    React will re evaluate the component and re render with the newly updated state.

    In doing so, it re executes the component function only for that instance where the state change
    was triggered from.

    Using a const for the state variable makes sense because the variable never really changes during
    the life of the component. It is never set with an equals sign (=), but we use a setter function instead.
    Thus the const variable is never reassigned.

    Using state gives the variable to react to manage in its own separate memory.

    One important thing is that, on re renders, react will never use the initial value that was provided
    to it during the first render, but will instead look at its own memory store where it will have kept
    the latest copy of that particular state variable which will be injected in state on the next render.

    States can be created individually or as a group (as object). This is a personal preference and
    both the ways are correct.  -> See ExpenseForm.js file in expense-tracker project for example.

    When using the single state(object) pattern, ensure that you use the callback method for updates
    depending on previous state.

    Example:
    Do
    setUserInput( previousState => {
        return ({
            ...previousState,
            enteredAmount: event.target.value
        })
    });

    DONT DO
    Dont manipulate the state explicitly, let react handle the update using a callback function as above
    setUserInput({
        ...userInput,
        enteredAmount: event.target.value
    })

 */

