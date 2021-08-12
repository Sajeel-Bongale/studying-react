/*
    Link: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25634226#overview

    You have the ability to conditionally return different content.

    Like in the previous example, you can check a condition and based on its value return a code snippet.

    This means there can be multiple return statements in a function, which is valid behaviour even
    in regular JS.

    It helps to achieve cleaner code and separates easy fallbacks from the main returns.

    Example:
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No Expenses Found</h2>
    }

    This is the first statement in a function that renders expenses list.
    It creates a short circuit that breaks the flow when no elements are present in the list and
    prevents further execution of the method.
    When elements exist, the if block is skipped and regular flow continues.

 */