/*
    Link: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25597082#overview

    When you don't add a key attribute when rendering lists in React, you see an error in the console
    `Each child in a list should have a unique "key" prop.`

    This concept which exists to ensure that React is able to update and render such lists efficiently
    without performance losses, or bugs, which may occur results from using the key attribute.

    When you do not use keys, the updates made to the DOM are inefficient:
    Example:

    Without keys React renders new items as the last item in this list of div's(elements)
    and updates all items and replaces their content, such that it again matches the order of the items in my Array.

    This happens because, to React, all these items look similar and it only sees that the array changed,
    that it's now longer than before. And hence it simply renders an additional div and it adds it to the end.
    Then it simply walks through all the items and updates the content inside of every item to match the
    Array content again.

    The final result, therefore is correct here but from a performance perspective this is not great
    because all items are visited and updated and it can even lead to bugs.

    React, behaves this way because it has no way to determine a change occurred.
    It simply checks the length of the Array and then has a look at the number of items
    that were already rendered. The individual items all look similar to React though so it can't know
    where a new item should be added.

    To solve this problem we use the key prop. It's a prop you can add to any component
    no matter if it's a custom component by you or if it's a built in HTML element, you can always add this.
    The key helps React identify the individual items.

    Each key must be a unique value in the list.

    With keys, React is able to uniquely identify all these items and it's therefore aware,
    not just how long the Array is but also aware which items should be placed.
    And it's able to update this list more efficient way.

 */