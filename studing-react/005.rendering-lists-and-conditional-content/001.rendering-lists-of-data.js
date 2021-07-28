/*
    Link: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25597070#questions

    In several cases we wish to render lists of items in our components. Most of the times we are unaware of
    the size of the list.

    Some times we may want to render a component per array item.

    To render the components like this add a map method to the data array and generate a component
    in the callback function. Do all this computation within the curly braces:

    {
        props.items.map( expense => (
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        ))
    }

    This will generate an ExpenseItem component per element in the props.items array.
 */