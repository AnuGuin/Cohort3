# Question Related To React
## Why Do We Need React?
React is a JavaScript library developed by Facebook for building user interfaces, particularly single-page applications (SPAs). It is widely used because it solves several challenges in modern web development.For dynamic websites, these libraries make it easier to do DOM manipulation. Here's why React is important:

---
### 1. **Component-Based Architecture**
React enables developers to build reusable UI components. This modular approach improves code organization and allows for reusability, making applications easier to develop and maintain.

---

### 2. **Efficient DOM Manipulation with Virtual DOM**
React uses a Virtual DOM, which is a lightweight in-memory representation of the real DOM. When changes are made, React updates only the affected parts of the real DOM instead of re-rendering the entire page. This makes updates faster and improves performance.

---

### 3. **Declarative UI**
React simplifies the process of describing how the UI should look for any given state. Instead of manually updating the UI, developers define the UI structure in a declarative way, and React takes care of updating the DOM to match.

---

### 4. **Unidirectional Data Flow**
React's unidirectional data flow makes it easier to understand and debug applications. Data flows in one direction, from parent to child components, ensuring a predictable state management process.

---

### 5. **Rich Ecosystem and Tools**
React's ecosystem includes tools like:
   - **React Router** for navigation.
   - **Redux or Context API** for state management.
   - **React Developer Tools** for debugging.
These tools make React suitable for building complex applications.

---

### 6. **Cross-Platform Development**
React serves as the foundation for React Native, which allows developers to create mobile applications using the same concepts and components. This enables the reuse of code across web and mobile platforms.

---

### 7. **Large Community and Support**
React has a vast community of developers and extensive documentation. This ensures that you can find libraries, tools, and answers to your questions easily.

---

### 8. **Flexibility**
React doesn't enforce specific patterns or architectures, giving developers flexibility to use it with other libraries or frameworks for routing, state management, or backend communication.

---

### 9. **SEO-Friendly**
React supports server-side rendering (SSR), which helps in improving SEO for single-page applications by enabling search engines to index the page content.

---

### 10. **Adoption by Leading Companies**
React is used by companies like Facebook, Instagram, Netflix, and Airbnb, demonstrating its robustness and scalability.

---


React is ideal for building dynamic, interactive, and high-performing web applications. Its focus on simplicity, performance, and a strong ecosystem makes it a go-to choice for developers.

![App Screenshot](https://res.cloudinary.com/sameerkhan/image/upload/c_fill,g_auto,h_250,w_970/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative,l_text:montserrat_25_style_light_align_center:Shop%20Now,w_0.5,y_0.18/v1733204606/files%20for%20readmi%20file/cb4de5ed-c537-47e5-af76-462773a2e4c2.png)

## Summary:
1. React is just an easier way to write normal HTML/CSS/JS.it is a new syntax , that under the hood gets converted to HTML/CSS/JS.

2. people realized its harder to do DOM manipulation that conventional way. 
there were libraries that came into the picture that made it slightly easy , but still for a very big app it's very hard (JQuery).
Eventually ,Vuejs/react create a new syntax to do frontend. Under the hood , the react compiler convert convert the code to HTML/CSS/Js.



## Some React Jargons (State Components and Re-rendering)
To create a react app, you usually need to worry about two things.
creators of frontend framework realized that all websites can effectively be divided into two parts.
1. State:
2. Components:

## State: 
An Object that represents the current state of the app.it represents the dynamic things in our app (things that can change). for example:the value of the counter

## Components: 
How a DOM element should render , given a state 
it is reusable,dynamic,HTML snippet that changes given the state.

![App Screenshot](https://res.cloudinary.com/sameerkhan/image/upload/v1733207130/files%20for%20readmi%20file/d9e13843-b11f-4d5e-b6e2-f4317539adba.png)

You usually have to define all the Components once and then all you have to do is update the state of your app.React takes care of re-rendering your app.

### What is JSX?
JSX stands for javascript XML   . it is syntax extension for js. most commonly used with react, a popular library for building user interfaces .JSX allows you to write HTML -like code directly within js.this makes it easier to create and manage the user interface in react applications

## What is HOOks? 
Hooks in React are functions that let you use React features like state and lifecycle methods without writing a class. Introduced in React 16.8, they simplify the process of building functional components by allowing them to have state and side effects, which were previously possible only in class components.

  Rules of Hooks


  Only call Hooks at the top level (not inside loops, conditions, or nested functions).

  Only call Hooks from React function components or custom Hooks.


### useState

method 1:
```javascript
// JavaScript example
function App() {
  const [tasks,setTasks]=useState([{
    title:"",desc:""
  }]);
  const [task,setTask]=useState({title:"",desc:""});
  const addTaskHandle=(e)=>{
    e.preventDefault();
    setTasks([...tasks,task]);
    setTask({title:"",desc:""})
  }


  return (
    <>
      <h1>Task Todo</h1>
      <form onSubmit={addTaskHandle}>
        <div>
          Enter Task:<input type="text" name="task" value={task.title} id="task" onChange={(e)=>setTask({...task,title:e.target.value})} />
        </div>
        <div>
          Enter description:<input type="text" name="desc" value={task.desc} id="desc" onChange={(e)=>setTask({...task,desc:e.target.value})} />
        </div>
        <button type="submit">Add Task</button>
        {
          JSON.stringify(tasks)
        }
      </form>
    </>
  )
}

method 2:
function App() {
  const [tasks,setTasks]=useState([{
    title:"",desc:""
  }]);
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const addTaskHandle=(e)=>{
    e.preventDefault();
    setTasks([...tasks,{title,desc}])
    setDesc("")
    setTitle("")
  }


  return (
    <>
      <h1>Task Todo</h1>
      <form onSubmit={addTaskHandle}>
        <div>
          Enter Task:<input type="text" name="task" id="task" value={title} onChange={(e)=>setTitle(e.target.value)} />
        </div>
        <div>
          Enter Description:<input type="text" name="desc" id="desc" value={desc} onChange={(e)=>setDesc(e.target.value)} />
        </div>
        <button type="submit">Add Task</button>
        {
          JSON.stringify(tasks)
        }
      </form>
    </>
  )
}

// method 1: to pass props
import React from 'react'

const ListTasks = (props) => {
  console.log(props.tasks)
  return (
    <div>

    <h1>ListTasks</h1>
    {
      props.tasks.map((task,key)=>{
        return <div key={key}>
          <h2>{task.title}</h2> <span>{task.desc}</span>
        </div>
      })
    }
    </div>
  )
}

// method 2: to pass props
const ListTasks = ({tasks}) => {
  console.log(tasks)
  return (
    <div>

    <h1>ListTasks</h1>
    {
      tasks.map((task,key)=>{
        return <div key={key}>
          <h2>{task.title}</h2> <span>{task.desc}</span>
        </div>
      })
    }
    </div>
  )
};

```
### Mounting,Re-rendering,Unmounting

1. Mounting: Mounting is the process of creating a new component and inserting it into the DOM.
  ```javascript
  useEffect(() => {
  console.log("Component mounted");
}, []); // Empty array ensures it runs only once.
```
ex .
```javascript
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return <div>Hello, React!</div>;
}

export default App;
```
2. Re-rendering:Re-rendering occurs when a component updates, typically triggered by:
  - change in state
  - changes in props
  - a parent component re-rendering
  ```javascript
  useEffect(() => {
  console.log("Component updated");
}, [dependency]); // Re-run effect when dependency changes
```
ex. 
```javascript
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```
3. Unmounting:Unmounting is the process of removing a component from the DOM.
```javascript
useEffect(() => {
  console.log("Component mounted");

  return () => {
    console.log("Component unmounted");
  };
}, []); // Cleanup on unmount
```
example:
```javascript
import React, { useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Component
      </button>
      {show && <Child />}
    </div>
  );
}

function Child() {
  useEffect(() => {
    console.log("Child mounted");
    return () => {
      console.log("Child unmounted");
    };
  }, []);

  return <div>I am a child component!</div>;
}

export default App;
```

### useEffect: 
Before we understand useEffect , let’s understand what are Side effects.
#### SideEffect:
Side effects are operations that interact with the outside world or have effects beyond the component's rendering. Examples include:
- **Fetching data** from an API.
- **Modifying the DOM** manually.
- **Subscribing to events** (like WebSocket connections, timers, or browser events).
- **Starting a clock**
These are called side effects because they don't just compute output based on the input—they affect things outside the component itself.
### Problem in running side effects in React components

If you try to introduce side effects directly in the rendering logic of a component (in the return statement or before it), React would run that code every time the component renders. This can lead to:

- **Unnecessary or duplicated effects** (like multiple API calls).
- **Inconsistent behavior** (side effects might happen before rendering finishes).
- **Performance issues** (side effects could block rendering or cause excessive re-rendering).

## How useEffect Manages Side Effects:
The useEffect hook lets you perform side effects in functional components in a safe, predictable way:
```javascript
useEffect(() => {
  // Code here is the "effect" — this is where side effects happen
  fetchData();

  // Optionally, return a cleanup function that runs when the component unmounts.
  return () => {
    // Cleanup code, e.g., unsubscribing from an event or clearing timers.
  };
}, [/* dependencies */]);
```
- **The first argument** to `useEffect` is the effect function, where you put the code that performs the side effect.
- **The second argument** is the dependencies array, which controls when the effect runs. This array tells React to re-run the effect only when certain values (props or state) change. If you pass an empty array `[]`, the effect will only run **once** after the initial render.
- **Optional Cleanup**: If your side effect needs cleanup (e.g., unsubscribing from a WebSocket, clearing intervals), `useEffect` allows you to return a function that React will call when the component unmounts or before re-running the effect.

### To Recap:
useEffect is a Hook that lets you perform side effects in functional components. It can be used for data fetching, subscriptions, or manually changing the DOM.

![App Screenshot](https://res.cloudinary.com/sameerkhan/image/upload/v1733654379/files%20for%20readmi%20file/Screenshot_2024-10-09_at_11.48.14_PM_wmtalj.png)

### Linkedin like top bar:
```javascript
import { useEffect, useState } from "react";

function App() {
  const [currentTab, setCurrentTab] = useState(1);
  const [tabData, setTabData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(function() {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
      .then(async res => {
        const json = await res.json();
        setTabData(json);
        setLoading(false);
      });

  }, [])
  
  return <div>
    <button onClick={function() {
      setCurrentTab(1)
    }} style={{color: currentTab == 1 ? "red" : "black"}}>Todo #1</button>
    <button onClick={function() {
      setCurrentTab(2)
    }} style={{color: currentTab == 2 ? "red" : "black"}}>Todo #2</button>
    <button onClick={function() {
      setCurrentTab(3)
    }} style={{color: currentTab == 3 ? "red" : "black"}}>Todo #3</button>
    <button onClick={function() {
      setCurrentTab(4)
    }} style={{color: currentTab == 4 ? "red" : "black"}}>Todo #4</button>
<br /> 
    {loading ? "Loading..." : tabData.title}
  </div>
}

export default App
```
![App Screenshot](https://res.cloudinary.com/sameerkhan/image/upload/v1733654519/files%20for%20readmi%20file/Screenshot_2024-10-10_at_1.20.42_AM_py2o0n.png)

### fetching data
```javascript
import React, { useState, useEffect } from 'react';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Empty dependency array means this runs once when the component mounts.

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
};

export default UserList;

```

``

### Vite:
the built in tool for the web . vite is blazing fast frontend build tool powering the next generation of web applications.

Vite (French word for "quick", pronounced `/vit/`, like "veet") is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:

- A dev server that provides [**rich feature enhancements**](https://vite.dev/guide/features) over [**native ES modules**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), for example extremely fast [**Hot Module Replacement (HMR)**](https://vite.dev/guide/features#hot-module-replacement).
- A build command that bundles your code with [**Rollup**](https://rollupjs.org/), pre-configured to output highly optimized static assets for production.

Initializing a react project
```javascript
npm create vite@latest
```

### Components:
In React, components are the building blocks of the user interface. They allow you to split the UI into independent, reusable pieces that can be thought of as custom, self-contained HTML elements.

### how pass css:
 ```javascript
 <div style={{width:200}}></div> //here we are giving object in style

const style={width:200,backgroundColor:"white",borderRadius:10,borderColor:"grey"}
or
const style={"width":200,"background-color":"white","border-radius":10,borderColor:"grey"}
<div style={style}></div> //we can it as.
```

### Conditional Rendering

Conditional Rendering:based on condition,render a component.
```javascript
{counterVisible?<counter/>}

or

{counterVisible && <counter/>}

or


<button style={{color:currentTAb=="fedd"?"red":"yellow"}}></button>

-----------------------------------

import React, { useState } from 'react';

const ToggleMessage = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                Toggle Message
            </button>
            {isVisible && <p>This message is conditionally rendered!</p>}
        </div>
    );
};


```

### Props:
Props are the way to pass data from one component to another in React.
```javascript
import React from 'react';

const Greeting = ({ name }) => {
    return <h1>Hello, {name}!</h1>;
};

const App = () => {
    return <Greeting name="Alice" />;
};
```


### children

The `children` prop allows you to pass elements or components as props to other components.

### Lists and Keys
When rendering lists, each item should have a unique key prop for React to track changes efficiently.

```javascript
import React from 'react';

const ItemList = ({ items }) => {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
};

const App = () => {
    const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ];

    return <ItemList items={items} />;
};
```

### Class based vs functional components
Earlier, React code was written using `Class based` components. Slowly functional components were introduced and today they are the ones you’ll se everywhere.

Ref - https://github.com/processing/p5.js-web-editor/issues/2358

Class components are  classes that extend `React.Component`, while functional components are simpler and can use Hooks.

**Class based components**
```javascript
import React, { Component } from 'react';

class ClassCounter extends Component {
    state = { count: 0 };

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}
```

**Functional components**
```javascript
import React, { useState } from 'react';

const FunctionalCounter = () => {
    const [count, setCount] = useState(0);
    
    function increment() {
	    setCount(count => count + 1)
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
};
```

### Lifecycle events
In React, lifecycle events (or lifecycle methods) refer to the specific points in a component's life where you can execute code in response to changes or actions. These events help you manage tasks such as data fetching, subscriptions, and cleaning up resources.

### Class-Based Lifecycle Methods

In class components, lifecycle methods are divided into three main phases:

1. **Mounting**: When the component is being inserted into the DOM.
    - `constructor()`: Called when the component is initialized.
    - `componentDidMount()`: Called immediately after the component is mounted. Ideal for data fetching.
2. **Updating**: When the component is being re-rendered due to changes in props or state.
    - `componentDidUpdate(prevProps, prevState)`: Called after the component has updated. Good for operations based on prop/state changes.
3. **Unmounting**: When the component is being removed from the DOM.
    - `componentWillUnmount()`: Ideal for cleanup tasks, like invalidating timers or canceling network requests.

  code:
  ```javascript
  class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component updated');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
```

  Functional component lifecycle events
  ```javascript
  import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted or count updated');

  }, [count]); // Runs on mount and when count changes

	useEffect(() => {
		    console.log('Component mounted');
    return () => {
      console.log('Component will unmount');
    };
	}, [])

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### Fragment
In React, a component can return a single parent element, but it can contain multiple children within that single parent 

**WRONG CODE**
```javascript
const MyComponent = () => {
    return (
        <h1>Hello</h1>
        <p>World</p> // This line will cause an error
    );
};
```

**Right Code**
```javascript
const MyComponent = () => {
    return (
        <>
            <h1>Hello</h1>
            <p>World</p>
        </>
    );
};
```

### Single page applications, routing
Single Page Applications (SPAs) are web applications that load a single HTML page and dynamically update that page as the user interacts with the app. This approach allows for a smoother user experience compared to traditional multi-page applications (MPAs), where each interaction often requires a full page reload.
Library to use for routing - https://reactrouter.com/en/main
```javascript
Install react-router-dom
npm i react-router-dom
```
Update App.jsx with the respective routes
```javascript
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
	    <Routes>
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```
**Code from class**
```javascript

import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {

  return <div>
    <BrowserRouter>
      <Link to="/">Allen</Link>
      | 
      <Link to="/neet/online-coaching-class-11">Class 11</Link> 
      | 
      <Link to="/neet/online-coaching-class-12">Class 12</Link>
      <Routes>
        <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
        <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </div>
}

function Landing() {
  return <div>
    Welcome to allen
  </div>
}

function Class11Program() {
  return <div>
      NEET programs for Class 11th
  </div>
}

function Class12Program() {
  return <div>
      NEET programs for Class 12th
  </div>
}

export default App
```

### Layouts
Layouts let you wrap every route inside a certain component (think headers and footers)

```javascript
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

### Outlets
In React, an Outlet is a component used in conjunction with React Router to render nested routes. It acts as a placeholder or container where the child routes are rendered within the parent route.

**Key Points about Outlet:**

- **Purpose:**
The Outlet component allows you to render child components dynamically depending on the current route.

- **Usage:**
Typically used when defining a route hierarchy, where a parent route has child routes. The Outlet ensures that the child components are displayed inside the parent route's layout.

- Example Structure:
Imagine you have a route structure like this:
```javascript
/dashboard
/dashboard/profile
/dashboard/settings
```
The `/dashboard` route may have a layout with a sidebar or header, and the content changes based on whether `/dashboard/profile` or `/dashboard/settings` is visited.

***Code Example:***

Here’s how you can implement it:
**Step 1: Define the Routes**
```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Settings from './Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
```
**Step 2: Use Outlet in the Parent Component**
```jsx
import { Outlet, Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="profile">Profile</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <hr />
      {/* Outlet renders the child route's component */}
      <Outlet />
    </div>
  );
}

export default Dashboard;
```
**Step 3: Child Components**
`Profile.js` and `Settings.js` will look like regular components:
```jsx
function Profile() {
  return <h2>Profile Page</h2>;
}

export default Profile;

function Settings() {
  return <h2>Settings Page</h2>;
}

export default Settings;
```

**How it Works:**
- When the user navigates to` /dashboard`, the Dashboard component renders.
- The Outlet inside Dashboard acts as a placeholder for child routes.
- Navigating to `/dashboard/profile` or `/dashboard/settings` renders the corresponding component inside the Outlet.

**Benefits:**
- **Reusable Layouts:** Common layouts like headers, sidebars, or footers can be defined in the parent route.
- **Dynamic Content:** Only the content inside the Outlet changes while keeping the parent structure intact.


## useRef:
In React, useRef is a hook that provides a way to create a reference to a value or a DOM element that persists across renders but does not trigger a re-render when the value changes.

**Key Characteristics of useRef:**
1. **Persistent Across Renders**: The value stored in `useRef` persists between component re-renders. This means the value of a `ref` does not get reset when the component re-renders, unlike regular variables.
2. **No Re-Renders on Change**: Changing the value of a `ref` (`ref.current`) does **not** cause a component to re-render. This is different from state (`useState`), which triggers a re-render when updated.

1. Focussing on an input box
```jsx
import React, { useRef } from 'react';

function FocusInput() {
  // Step 1: Create a ref to store the input element
  const inputRef = useRef(null);

  // Step 2: Define the function to focus the input
  const handleFocus = () => {
    // Access the DOM node and call the focus method
    inputRef.current.focus();
  };

  return (
    <div>
      {/* Step 3: Attach the ref to the input element */}
      <input ref={inputRef} type="text" placeholder="Click the button to focus me" />
      <button onClick={handleFocus}>Focus the input</button>
    </div>
  );
}

export default FocusInput;
```
2. Scroll to bottom
```jsx
import React, { useEffect, useRef, useState } from 'react';

function Chat() {
  const [messages, setMessages] = useState(["Hello!", "How are you?"]);
  const chatBoxRef = useRef(null);

  // Function to simulate adding new messages
  const addMessage = () => {
    setMessages((prevMessages) => [...prevMessages, "New message!"]);
  };

  // Scroll to the bottom whenever a new message is added
  useEffect(() => {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [messages]);

  return (
    <div>
      <div 
        ref={chatBoxRef} 
        style={{ height: "200px", overflowY: "scroll", border: "1px solid black" }}
      >
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <button onClick={addMessage}>Add Message</button>
    </div>
  );
}

export default Chat;
```
3. Clock with start and stop functionality
Notice the re-renders in both of the following cases - 

```jsx
// ugly code
import React, { useState } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null); // Use state to store the interval ID

  const startTimer = () => {
    if (intervalId !== null) return; // Already running, do nothing

    const newIntervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    
    // Store the interval ID in state (triggers re-render)
    setIntervalId(newIntervalId);
  };

  const stopTimer = () => {
    clearInterval(intervalId);

    // Clear the interval ID in state (triggers re-render)
    setIntervalId(null);
  };

  return (
    <div>
      <h1>Timer: {time}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default Stopwatch;
```

```jsx
// better code
import React, { useState, useRef } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current !== null) return; // Already running, do nothing

    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div>
      <h1>Timer: {time}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}
```
## Prop drilling
**Prop drilling** occurs when you need to pass data from a higher-level component down to a lower-level component that is several layers deep in the component tree. This often leads to the following issues:

- **Complexity:** You may have to pass props through many intermediate components that don’t use the props themselves, just to get them to the component that needs them.
- **Maintenance:** It can make the code harder to maintain, as changes in the props structure require updates in multiple components.

```javascript
import React, { useState } from 'react';

// LightBulb Component
const LightBulb = ({ isOn }) => {
  return <div>The light is {isOn ? 'ON' : 'OFF'}</div>;
};

// LightSwitch Component
const LightSwitch = ({ toggleLight }) => {
  return <button onClick={toggleLight}>Toggle Light</button>;
};

// App Component
const App = () => {
  const [isLightOn, setIsLightOn] = useState(false);

  const toggleLight = () => {
    setIsLightOn((prev) => !prev);
  };

  return (
    <div>
      <LightBulb isOn={isLightOn} />
      <LightSwitch toggleLight={toggleLight} />
    </div>
  );
};

export default App;
```

## Context API
The Context API is a powerful feature in React that enables you to manage state across your application more effectively, especially when dealing with deeply nested components.

The Context API provides a way to share values (state, functions, etc.) between components without having to pass props down manually at every level.

**Jargon**
- **Context**: This is created using `React.createContext()`. It serves as a container for the data you want to share.
- **Provider**: This component wraps part of your application and provides the context value to all its descendants. Any component that is a child of this Provider can access the context.
- **Consumer**: This component subscribes to context changes. It allows you to access the context value (using `useContext`  hook)

**Old code**
```javascript
import React, { useEffect, useState } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Incrase count={count} setCount={setCount} />
      <Decrease count={count} setCount={setCount} />
      <Value count={count} setCount={setCount} />
    </>
  );
}

function Decrease({ count, setCount }) {
  return <button onClick={() => setCount(count - 1)}>Decrease</button>;
}

function Incrase({ count, setCount }) {
  return <button onClick={() => setCount(count + 1)}>Increase</button>;
}

function Value({ count }) {
  return <p>Count: {count}</p>;
}

// App Component
const App = () => {
  return <div>
    <Parent />
  </div>
};

export default App;

```
**New code**
Create a new `CountContext`
```jsx
const CountContext = createContext();
```
Create a CountContextProvider

```javascript
function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return <CountContext.Provider value={{count, setCount}}>
    {children}
  </CountContext.Provider>
}
```
Wrap your app inside the CountContextProvider
```javascripthell
function Parent() {
  return (
    <CountContextProvider>
      <Incrase />
      <Decrease />
      <Value />
    </CountContextProvider>
  );
}
```
Consume the context in individual components
```javascript
function Decrease() {
  const {count, setCount} = useContext(CountContext);
  return <button onClick={() => setCount(count - 1)}>Decrease</button>;
}

function Incrase() {
  const {count, setCount} = useContext(CountContext);
  return <button onClick={() => setCount(count + 1)}>Increase</button>;
}

function Value() {
  const {count} = useContext(CountContext);
  return <p>Count: {count}</p>;
}
```
Export the App component which renders Parent
```javascript
const App = () => {
  return <div>
    <Parent />
  </div>
};
export default App;
```

### Custom Hooks
Custom Hook in react are a powerful features that allows you to encapsulate and reuse stateful logic across different components . they are essentially js functions that can be react hooks internally . by creating hooks, you can abstract away complex logic , making your components cleaner and more manageable .

**Why Use Custom Hooks?**
1. `Reusability`: if you find yourself usisng the same logic in multiple components, a custom hook can help you avoid code duplication.
2. `Separation of Concern:`they allow you to separate business logic from UI logic , making your components more focused and easier to understand .

**Common Custom Hooks**

**Point to notice**
- Start with `use` and use another hook.
- ex `useValue`,

---

`Custom Hook`
```jsx

function useValue(){
  const [value,setValue]=useState(1);

  return value;
}
```

---
`Component`

```jsx
function CounterHai(){
  const [value,setValue]=useState(1)
  return <div></div>
}
```

`bad practice for hook , never should be like that`
```jsx
function getValue(){
  const [value,setValue]=useState(1);
}





