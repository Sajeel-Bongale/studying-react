/*
    Link: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25597086#overview

    Conditional content means rendering different output under different conditions.

    Conditionals can be used to display some examples like when there exist values in an array and an error
    message when nothing is present in the array.

    This conditional content rendering can be done using the ternary opertor as

    {
        this.myArray.length === 0 ?
            <p> No elements in array </p> :
            myArray.map(item => {
               (
                <CustomComponent myProp={item.value} />
               )
            })
    }

    This is only one example of conditional rendering, there could be several instances where
    this can be used.

    Another way to conditionally render content is to use the short circuiting && operator.
    If a condition matches, then render the content.

    eg: { this.myValue === 10 && <p> Value is 10 </p> }

    Additionally, you can move all the content outside of the return method and fill
    all the dynamic content into a single variable that changes/updates based on the condition.

    You can then use this variable in the return value to render the correctly computed content.

 */