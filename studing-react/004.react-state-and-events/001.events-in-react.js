/*
    Link: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595962#announcements

    Events make the application reactive to user interaction.

    In regular JS, you add event handlers on elements in the DOM and provide a callback to these event listeners.

    In React, we add an event listener by going to the JSX element and adding
    onEvent={handlerFunction}

    Event should be the name of the actual event to be captured such as click, focus, blur etc.
    And the handler function should be a reference to a function in the scope of the component.

    Do not call the function when attaching the handler as this would trigger it during DOM render
    and it will never trigger when the actual event occurs

    eg.
    <button onClick={clickHandler()} > -> DONT DO THIS
    <button onClick={clickHandler} > -> DO THIS

    You can also add the function within the curly braces using arrow or regular function syntax
    but this pollutes your JSX and therefore should be avoided

    <button onClick={() => console.log} > -> DONT DO THIS

    function clickHandler() { ... }
    return <button onClick={clickHandler} > </button>  -> DO THIS


    It is a generally followed convention that handler functions are suffixed with handler.
    This is not a rule but it proves to be  useful when writing a lot of functions in a component function.


 */
