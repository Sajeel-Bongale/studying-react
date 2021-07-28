/*
    Link: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25596024#questions

    Since data cannot be shared between sibling components, the concept of lifting state up comes into use.

    Communication can easily occur between parent - child and child - parent as seen previously.

    To share data between siblings we make use of the closest parent of both of the sibling components.
    We store the state in this parent. So in a way we lift the state up to the parent.

    This can be made possible in 2 steps using chiild - parent communication technique of callbacks we
    learnt previously. And in that callback by saving the state in the parent component. Simultaneously,
    this state will be made available to the child (sibling) component using props.

    Lifting the state up should be done only as high as necessary in your Component Tree until you have a component
    which has both access to the components that generate data as well as the components that needs data.

 */
