---
title: 'Design Patterns in React'
date: '2019-12-09T22:43:17.889Z'
category: ['React', 'Design Patterns']
cover: '/images/blog/design-patterns-in-react/cover.jpg'
thumb: '/images/blog/design-patterns-in-react/cover-sm.jpg'
slug: '/design-patterns-in-react'
---

## Design Patterns in React

### 1. Introduction

After diving into "Head First Design Patterns", it becomes apparent that many of these patterns are not only relevant in today's development landscape but are also actively utilized in popular libraries like React. In this article, we'll explore how core design patterns are applied in React and React Native, accompanied by practical code examples.

React is a JavaScript library designed for crafting user interfaces. It empowers developers to build large web applications that can update without page reloads, making them swift and responsive. On the flip side, React Native embraces the same philosophy and approaches, but tailored for mobile application development.

### 2. The Component Approach in React and the "Composite" Pattern

#### Essence of the Component Approach:

At the core of React lies the idea of segmenting the interface into numerous small, independent, and reusable components. These components can be nested within each other, forming intricate but manageable structures.

**Code Sample:**

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

In the provided sample, we have two components: `Welcome` and `App`. The `App` component encompasses two instances of the `Welcome` component.

#### Comparison with the "Composite" Pattern:

The "Composite" pattern from the book "Head First Design Patterns" delineates objects arranged in tree-like structures to represent whole/part hierarchies. Similarly, in React, components can be envisioned as a tree, where each component can encompass other components.

### 3. Virtual DOM and the "Proxy" Pattern

#### What is Virtual DOM and its benefits:

Virtual DOM is a lightweight representation of the real DOM in memory. The core concept behind Virtual DOM is to perform high-level diffing and then efficiently apply minimal changes to the actual DOM.

Benefits of Virtual DOM:

1. **Efficiency**: Instead of updating the entire DOM tree, React refreshes only the parts that have changed.
2. **Performance**: Interacting with the actual DOM is slow due to recalculations and redraws. The Virtual DOM minimizes accesses to the real DOM.
3. **Abstraction**: Virtual DOM offers a convenient programming approach, eliminating the need for direct interactions with the real DOM.

Code example:

```jsx
// Describe a change in the Virtual DOM
const virtualNode = {
  type: 'h1',
  props: { title: 'Hello, World!' },
};

// React updates the actual DOM based on differences with the previous Virtual DOM
ReactDOM.render(virtualNode, document.getElementById('root'));
```

#### Comparison with the "Proxy" Pattern:

The "Proxy" pattern involves an object that controls access to another object. The Virtual DOM acts as a proxy for the real DOM. Instead of directly interacting with the real DOM, developers engage with the Virtual DOM. Once changes are ready for deployment, React optimizes and applies them to the actual DOM. In this manner, the Virtual DOM serves as a proxy, minimizing and optimizing interactions with the real DOM.

### 4. State and Props in React and the "Strategy" Pattern

#### Characteristics of State and Props:

**State**: These are data that can change during a component's lifecycle. State is used to track changes in the component and to re-render it when necessary.

**Props**: These are arguments passed into a component from its parent. They allow data or callbacks to be passed down to child components.

Code example:

```jsx
class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  handleClick = () => {
    this.setState({ clicked: true });
  };

  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        {this.state.clicked ? (
          <p>Clicked!</p>
        ) : (
          <button onClick={this.handleClick}>Click me</button>
        )}
      </div>
    );
  }
}

// Using the component
<Welcome name="Alice" />;
```

#### Comparison with the "Strategy" Pattern:

The "Strategy" pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. In the context of React, `props` can be viewed as a strategy that the parent component passes to the child. The child component can modify its behavior based on the received `props` without changing its internal logic.

### 5. Higher-Order Components (HOC) and the "Decorator" Pattern

#### How HOC works:

A Higher-Order Component (HOC) is a function that takes a component and returns a new component with added or modified functionality. Primarily, HOCs are used to reuse component logic without meddling with its internal details.

Example code:

```jsx
function withLogging(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} has mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.name} will unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

class MyComponent extends React.Component {
  render() {
    return <div>Hello from MyComponent</div>;
  }
}

const MyComponentWithLogging = withLogging(MyComponent);
```

In the provided example, the HOC `withLogging` adds logging during the mounting and unmounting of the component.

#### Comparison with the "Decorator" Pattern:

The "Decorator" pattern offers a way to dynamically add responsibilities to objects. The HOC is very similar to the "Decorator" pattern: it "wraps" a component and adds or modifies its functionality without the need to change the original component.

In the example above, `withLogging` decorates `MyComponent` by adding logging, yet it doesn't alter `MyComponent` itself.

### 6. Hooks and the "Command" Pattern

#### Explaining the Principles of Hooks:

Hooks are a recent addition to React that allow the use of state and other React features without writing classes. With hooks, additional logic can be "attached" to functional components.

**Code Example:**

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

In this example, the `useState` hook is utilized to introduce state into a functional component.

#### Comparison with the "Command" Pattern:

The "Command" pattern encapsulates a request as an object, thereby allowing for parameterization of clients with different requests, queueing of commands, logging of the operations, and supporting reversible operations. In React, each hook can be viewed as a "command" that adds specific functionality or behavior to a component. In the provided example, the `useState` command bestows the functionality of state.

### 7. Context API and the "Singleton" Pattern

#### How the Context API works:

The Context API provides a means to pass data through the component tree without having to manually pass props at every level. This can be beneficial for data like localization settings, themes, or an authenticated user.

Code example:

```jsx
import React, { createContext, useContext } from 'react';

// Create a context
const ThemeContext = createContext('light');

function ThemedButton() {
  // Use the context
  const theme = useContext(ThemeContext);
  return <button theme={theme}>Click me</button>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}
```

In this example, a `ThemeContext` is created using `createContext()`. The context is then utilized in the `ThemedButton` component with the help of the `useContext` hook.

#### Comparison with the "Singleton" Pattern:

The "Singleton" pattern ensures that a class has only one instance and provides a global point of access to this instance. React's Context API operates in a similar manner, offering a global access point to data for all components in the tree without the need to explicitly pass data through props.

In our example, the `ThemeContext` can be viewed as a "Singleton" as it offers a single source of truth for the theme throughout the component tree.

### 8. React Native and Adapting Design Patterns for Mobile Applications

#### Features of React Native:

React Native is a framework for building mobile applications using the same principles and approaches as React. The main distinction is that React Native employs native components for UI rendering, rather than DOM elements.

- **Native Components:** Instead of HTML tags, React Native utilizes native components like `<View>`, `<Text>`, and `<Image>`.
- **Bridge between JavaScript and Native Code:** React Native uses a special "bridge" to allow JavaScript code to interact with native modules and components.
- **Modularity:** Just as in React, in React Native you create modular and reusable components.

Code Example:

```jsx
import React from 'react';
import { View, Text, Button } from 'react-native';

function App() {
  return (
    <View>
      <Text>Hello, React Native!</Text>
      <Button title="Click me" onPress={() => alert('Button clicked!')} />
    </View>
  );
}
```

#### Applying Design Patterns in Mobile Development:

Many of the design patterns discussed earlier are also applicable to React Native:

- **Composite:** Just like in the web version of React, you build applications from a myriad of nested components.
- **Proxy:** In some cases, when you wish to optimize the interaction between JavaScript and native code, you can use the "Proxy" pattern to minimize the data transferred.
- **Strategy:** You can implement various strategies to define component behavior depending on the platform (iOS or Android).
- **Decorator and HOC:** Just like in React, you can employ Higher-Order Components to augment functionality.
- **Command:** Through hooks and callbacks, you define actions that will be executed in response to various events.
- **Singleton:** Contexts and global states can be implemented using the "Singleton" pattern.

### 9. Conclusion

After delving deep into the world of React and React Native, it becomes evident that modern frontend technologies aren't entirely novel or detached from traditional programming. In fact, they actively leverage design patterns that were established and documented decades ago.

React introduces a fresh way of thinking about user interface construction, yet at its core lie the same time-tested principles and patterns that developers have embraced for many years. This not only makes React and React Native appealing to seasoned developers but also aids beginners in acclimating faster, especially if they're already familiar with traditional design patterns.

React Native, despite its distinctiveness in mobile development, also ardently employs the same patterns as its sibling, React, offering a consistent approach to both web and mobile app development.

In wrapping up, it's fair to say that diving into design patterns, such as those presented in "Head First Design Patterns", is undeniably worthwhile. They won't just enhance your skills in traditional programming languages but also facilitate development in modern platforms and frameworks like React and React Native.

### 10. References and Links

1. **Freeman, E., & Robson, E. (2004).** Head First Design Patterns. O'Reilly Media.
   - A classic introduction to design patterns with understandable examples and illustrations.
2. **React - Main Documentation**
   - [Official React Documentation](https://reactjs.org/docs/getting-started.html)
   - A comprehensive guide to React, its components, states, props, and other core concepts.
3. **React Native - Main Documentation**
   - [Official React Native Documentation](https://reactnative.dev/docs/getting-started)
   - A resource for those looking to delve into mobile app development using React Native.
4. **React Patterns**
   - [reactpatterns.com](https://reactpatterns.com/)
   - A collection of popular design patterns used in React.
5. **Context API**
   - [Introduction to Context API](https://reactjs.org/docs/context.html)
   - A guide on utilizing the Context API in React for managing global states.
6. **Hooks in React**
   - [Official Guide to Hooks](https://reactjs.org/docs/hooks-intro.html)
   - Understanding and implementing hooks in React to enhance code structure and component state management.
7. **Design Patterns: Elements of Reusable Object-Oriented Software.** Gamma, E., Helm, R., Johnson, R., & Vlissides, J.
   - Another classic book on design patterns that provides a deep understanding of the subject.

This list offers a foundational understanding and resources for further exploration of design patterns in the context of React and programming at large. It's always beneficial to have reliable resources at hand for reference and learning.
