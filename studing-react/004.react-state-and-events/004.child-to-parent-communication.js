/*
    Link: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25596020#announcements

    For parent to child communication we can use props.

    But how do we achieve the reverse?
    To do so, we simply use callbacks that we pass from parents to children using props
    and then in the children execute them at appropriate times.

    These functions are defined in the bodies of the parents, however, they will be executed
    in the child.

    You simply need to pass the reference of the function and these can be called in the child
    using the props.whateverTheNameOfTheAttributeYouChose()

    In the parent you can define parameters that the method will accept. From the child you
    will have to ensure that these parameters are passed to the method.

    While communicating in this way you cannot skip components in between (meaning when there
    are more than 2 levels of components in the tree). Each level has to go through
    1. the declaration of methods to be used in the child
    2. then pass it to the child
    3. the child calls this using the props
    4. this continues as long as there are components in the tree

 */
