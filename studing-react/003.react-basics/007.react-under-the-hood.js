/*
    Link: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595464#announcements

    In new ReactJS projects we only use the react-dom import to use its render method like
    ReactDOM.render(<App />, document.getElementById('root'))

    We never use the react dependency in our component files.

    This is because modern react will add the React from 'react' import by itself without the developer
    having to add this manually. However, in earlier projects you will find that
    this above import exists to provide react with the necessary dependencies it needs.

    Internally react uses the React.createElement method to generate the actual DOM.
    However this is not needed when we use JSX syntax.

    JSX works like this under the hood. It creates a React.createElement method for each new component:

    JSX code:
    return (
        <div>
            <h2>Let's get started!</h2>
            <Expenses items={expenses}></Expenses>
        </div>
    );

    Under the hood React code:
    return React.createElement(
        'div',
        {},
        React.createElement('h2', {}, 'Let\'s get started!'),
        React.createElement(Expenses, {items: expenses})
    )

    createElement arguments are:
    type: "a" | "abbr" | "address" | "area" | "article" | "div" | ...,  // element name
    props?: ClassAttributes<HTMLElement> | null, // element attributes
    ...children: ReactElement<any, string | JSXElementConstructor<any>> | string | number | {} | ReactNodeArray
                                | ReactPortal | boolean | null | undefined[]) // Either content like text OR
                                                                              // All children in same format of React.createElement as above

    This method signature is the reason why we cannot have sibling elements at the root.
    The first argument must be a distinct React component or HTML element.
    Everything else can be children. But it has to be made sure that only one element acts as the root.
 */
