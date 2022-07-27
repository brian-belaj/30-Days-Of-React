#### What is React

1) What is React?
React is a JS library made for create reusable UI. It was created by Facebook in 2013 and is the most popular JS library.

2) What is a library?
A JS library is a set of methods, functions and object that anyone who has access can use them several times.
Their main advantage is time savings and practicality.

3) What is a single-page application?
When we use the JSX we basically write some javascript that renders the HTML in a html file. That's why we call them
single page applications.

4) What is a component?
A component is a single reusable code that creates an html response.

5) What is the latest version of React?
18.2.0

6) What is DOM?
DOM means Document Object Model and it rapresent the websites HTML structure in the version that the browser 
reads it in that very moment.

7) What is React virtual DOM?
Is a version of the User Interface memorized that can eventually be syncronized with the actual DOM by a library such as React DOM.
This procession of syncronization of the React Virtual DOM and the real DOM is called reconciliation.

8) What does a web application or a website(composed of) have?
The main difference between Web applications or website compesed of them and common websites is that in the web applications
users can interact and manipulate the pages content. It requires an authentication and it has a far more complicated structure
compared to a normal website page. 

#### Why React?

1) Why did you chose to use react?
Because is a lot popular, it has a good explained documentation and it offers a lot of work opportunity.

3) What measures do you use to know popularity ?
The number of commits in the React official Github repository.

4) What is more popular, React or Vue ?
Definetly React.

#### JSX

1) What is a JSX element?
A JSX element is a javascript code that creates a rendered html code.

2) Write your name in a JSX element and store it in a name variable.
const name = (<p>Brian Belaj</p>);

3) Write a JSX element which displays your full name, country, title, gender, email, phone number. Use h1 for the name and p for the rest of the information and store it in a user variable

const generalities = (<div>
<h1>Brian Belaj</h1>
<p>Italy</p>
<p>Front End Developer</p>
<p>Male</p>
<p>belaj.br@gmail.com</p>
<p>+39 3206632577</p>
</div>)

4) Write a footer JSX element

const footer = (<footer>
<ul>
<li><span>This</span></li>
<li><span>Is</span></li>
<li><span>a</span></li>
<li><span>Footer</span></li>
</ul>
</footer>)

#### Inline Style

1)Create a style object for the main JSX
      const style = {border: '1px solid green', color: 'blue', background:'azure'}
      const header = (
        <header
          style={style}
        >
          <h1>Welcome to 30 Days Of React</h1>
          <h2>Getting Started React</h2>
          <h3>JavaScript Library</h3>
          <strong>Brian Belaj</strong>
          <small>Jul 26, 2022</small>
        </header>
      );

2) 
