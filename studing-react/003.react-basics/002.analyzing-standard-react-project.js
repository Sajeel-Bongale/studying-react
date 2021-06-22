/*
    Link: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595406#overview

    All the react code is written in the src folder.
    React code is just JavaScript code.

    The index.js is  the first code file which will be executed whenever the react app is started

    What is executed is not the index.js file but a transformed version of this file.
    IMPORTANT: The transformation happens behind the scenes and is converted into browser readable JS.

    In the index.js file we are importing ReactDom from 'react-dom' which is third party library,
    which is one of our dependencies.

    in the package.js file, you actually see two React dependencies, React and ReactDOM. These two together
    make up the react library.

    The render method takes two arguments, two parameters.
    1. The main App.js file and
    2. A default JavaScript DOM API which looks for the element with the id root

    Once found, React attaches the App component into the root id element of the DOM

    This element is defined in the index.html file which resides in the public folder of the project.

    It is and will be the only HTML file that exists and will be loaded in the browser.

    The strange syntax in the JS files is known as JSX. It is specially created for reading react files.

    In the App.js file we are returning HTML content from within JS files. This is not regular valid JS
    syntax, but with the help of JSX feature we are able to run these type of files.
 */
