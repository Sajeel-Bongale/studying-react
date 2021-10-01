/*
    Link: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595454#overview

    You can create containers or shells for components to be rendered inside of.

    Basically a shell or a container components provides the surrounding area inside which
    you can render your own components.

    This is usable from the perspective code re usability as you can create the same container
    for multiple different types of elements to be rendered inside of.

    In the expense tracker project, we have created the card component to act as the container.

    To project content inside of this card component, you can use the children prop.

    You will use props.children in the JSX template for rendering projected content passed
    by the user of the card.

    In the parent file where you want to wrap the card around the projection content,
    simply wrap the content like so
    <Card>
        <div> Hello World </div>
        ...
    </Card>

    All the content inside the <Card> tags will be rendered as children of the Card.
    The children is an implicit prop that every component receives.

    This technique is basically used for building reusable wrappers.
 */