/*
    Link: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595438#overview

    What are props?
    Props are a way of passing data into a component from a parent component. This ability makes components dynamic
    and reusable. Just like functions can accept to make them dynamic components accept props to do the same.

    The function may and typically will produce different results for different input values,
    but it's still always the same function being called.
    The same works with components. It is the same component being called but with different props to produce
    different results.

    It reduces the dependency of the component on hard coded data.

    To add props to the component:
    1. Think about and identify all the information that you will need to make the component truly dynamic.
    2. Attach these props with desired(dynamic) values from the parent component like so:

    Component       prop                        Component closing tag
    <ExpenseItem title={expenses[1].title}> </ExpenseItem>

    3. In the component file, add the props as a first parameter to the ComponentName function.

    4. Inside the component use these values passed as props as so:
    <h2>
        {props.title}
    </h2>

    Now your component is truly dynamic as there is no hard coded data and all the data passed to it can be
    changed overtime as well as the component can be used multiple times and will show new data each time
    it is rendered.

    Props are essentially attributes that you attach to the custom HTML element(Component) that you create.

*/
