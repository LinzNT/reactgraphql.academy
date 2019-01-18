---
title: React is all about <br/>composition
date: Jan 7
subtitle: Understanding React Hooks, Render Props, HoCs, and the React composition model
author: alex
imageUrl: https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fcomposition%2Fzen-stones.jpeg?alt=media
---

Software development is, in essence, the process of breaking a problem down into smaller problems, implementing solutions for those smaller problems, and then **composing** those solutions to form partial solutions, and so on, until eventually completing the whole solution.

What do React components do? Components break down the UI into smaller independent components. Components are **composed with** other components to create greater components, and so on until they eventually complete the whole UI.

## What is composition?

**Composition is the act of combining parts or elements to form a whole**.

Components are the UI building blocks in React applications, like [pure functions](/blog/unit-testing-fundamentals-explained-using-javascript#pure-functions) are the building blocks of function composition.

## Function composition <a name="function-composition"></a>

Function composition is the act of applying a function to the output of another function. In algebra, given two functions, f and g, (f ∘ g)(x) = f(g(x)). The circle is the composition operator and it's commonly pronounced "f composed with g" or "f after g". I pronounce it "composed with", maybe because in React I often see code like the following where I literally read “compose with”:

```
export default compose(
	withRouter,
	withApollo,
	withEtcEtc,
)(Component)
```

You can compose functions as long as the output of one function is the expected input of the next function. You can’t compose two functions if one returns an array and the next one’s input expects a string. We can illustrate this idea with the following image:

![diagram function composition](https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fcomposition%2Ffunction-composition.png?alt=media)

Considering that the output of g is the input of f, which function do you think is executed first, f or g? g is executed first. Imagine you are the JS runtime and try to run the following code f(g(x)). You can’t run f until you resolve its argument.

```runkit
function f() {
    console.log("f")
}
function g() {
    console.log("g")
}
// run the following code to see which
// console.log is displayed first, f or g?
f(g())
```

We can use a compose function to declaratively compose (f ∘ g)(x)

```
h = compose(f,g)
```

One of the fundamental concepts in React is the declarative approach. Functional programming can be very declarative, but as in many cases, it's up to us. We could also code some imperative composition (don’t do it). Example:

```
// don’t do this!
const compose = Component => {
 const afterG = withRouter(Component);
 const afterF = withApollo(afterG);
 return afterF;
};
```

When we use **declarative composition `h = compose(f,g)` we can state that f doesn't know g exists and g doesn't know f exists**.

You can apply composition in pure JavaScript code in your React real-world applications. For example to compose the validators of a form field. We use [composition to validate forms in this website](https://github.com/reactjsacademy/reactjsacademy/blob/master/src/components/payment/checkout/CheckoutForm.js#L230). Applying composition in your real-world JavaScript projects is very powerful. Composition is not an academic or theoretical concept that you can’t explicitly apply in your JavaScript code. We also cover this in our hand-on training [TODO ADD LINK TO ADVANCED PATTERNS COMPOSITION]

## React composition model <a name="react-composition-model"></a>

In React there is the notion of a tree made up of components. In this tree of components the following rules define the components’ relationship:

- The parent may or may not know who the children are ahead of time.
- Children never know who is the parent
- Children never know who are the siblings
- The relationship has a well-defined interface, AKA props.

Since function composition uses a circle as operator, I'm also going to use circles to represent this composition model. There are two different perspectives I can think of to illustrate it:

### Side perspective with many children

![React component tree side perspective many children](https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fcomposition%2Fside-perspective-many-children-min.png?alt=media)

### Top perspective with many children

![React component tree top perspective many children](https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fcomposition%2Ftop-perspective-many-children-min.png?alt=media)

I guess the first one makes more sense in this case because every parent has more than one child. But, what if parents have only one child?

### Side perspective with one children

![React component tree side perspective one children](https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fcomposition%2Fside-perspective-min.png?alt=media)

### Top perspective with one children

![React component tree top perspective one children](https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fcomposition%2Fconcentric-hoc-fun.png?alt=media)

To me, in this case, the first image (concentric circles) illustrates better the case.

Common sense tip. Looking from different perspectives when trying to understand something is very useful. Using the same lens is likely to show the same views.

### Well defined interfaces

Components have well-defined interfaces that enable explicit interactions between components. Those well-defined interfaces are called props. Props are the mechanism a component has to interact with the outer world - by outer world I mean the parent component.

### props.children

Components have a prop called children. Because it is a prop, given this component `const User = (props) => <p>{props.children}</p>`, we can do either:

```
<User children="@alex_lobera" />
```

or

```
<User>@alex_lobera"</User>
```

You can see the later as syntactic sugar of the former. Of course, you can also do this (or any prop name variation you can think of)

```
const User = (props) => <p>{props.name}</p>
```

and so

```
<User name="@alex_lobera" />
```

Based on my experience teaching React at the ReactJS Academy, I've seen many developers missing part of what the React composition model is and misunderstanding the “children” prop.

If we look at this code

```
const TwitterProfile = (props) => (
  <section>
    <Text>
      	Username
    </Text>
    <Text>
	@alex_lobera
    </Text>
  </section>
)
```

we can state:

- TwitterProfile has one child, section. We can also say TwitterProfile is composed with a section.
- section has two children, Text and Text. We can also say section is composed with two Text components.
- The first Text has one child, "username". We can also say Text one is composed with the string "username"
- The second Text has one child, "@alex_lobera". We can also say Text two is composed with the string "@alex_lobera"
- We don't know who is TwitterProfile's parent.

If we look at this component in isolation

```
const Text = (props) => <p>{props.children}</p>
```

we can state:

- Text has one child, p.
- p has one child.. many children? we don't know ahead of time who is p's children from the Text perspective.
- We don't know who is Text's parent.

ADD SCREENSHOT REACT DEV TOOLS ABOUT THIS CASE

There is something very nice about “children”, it makes composition more declarative in the component tree.

<tweet id="1021850499618955272"></tweet>

## Composition via Higher-Order components (HoCs) <a name="composition-via-hocs"></a>

HoCs is a pattern for reusing component logic. **Component logic means logic that has to do with lifecycle methods and/ or state and/or context**.

Heads up! You don’t need a HoC if the logic you want to reuse doesn’t use lifecycle methods and/or component state and/or context.

A typical use case for using HoCs is fetching some data on componentDidMount and store it in the state. Here there is [an example called withData that we use in our advanced material](https://advanced-react-patterns.reactjs.academy/#higher-order-components)

HoCs are functions that receive a component as an argument and return a new component.

In the following example withRouter is the HoC function and Threads is the component we are enhancing

```
export default withRouter(Threads)
```

You can compose a component with as many HoCs as you need, for instance:

```
export default withRouter(
    withApollo(QUERY)(
        connect(mapStateToProps)(Threads)
    )
)
```

If you find it hard to read the previous example, you can rewrite it using a compose function as follows:

```
export default compose(
	withRouter,
	withApollo(QUERY),
    connect(mapStateToProps),
)(Threads)
```

There are many libraries, like recompose or react-apollo, that implement a compose function. The compose function is very simple, you can implement it yourself with a few keystrokes:

```
export const compose = (...functions) => component =>
  functions.reduceRight(
    (enhancedComponet, func) => func(enhancedComponet),
    component
  );
```

Notice the reduceRight in the compose function. **Composition goes from right to left, or you can also see it as from inside out**. connect’s input is the Threads component. The output of connect is a new component which is the input of withApollo. The output of withApollo is a new component that is the input of withRouter. The output of withRouter is a new component composed with the previous components. That’s the reason we need to reduce the arguments of the compose function in the reverse order, and for that purpose we used reduceRight.

HoCs return one component, that's why concentric circles is the prefered way by many people to illustrate the previous example.

![React component tree top perspective one children](https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fcomposition%2Fconcentric-hoc-fun.png?alt=media)

Notice the previous concentric circles represent the higher-order component functions but not the output of those functions (meaning the components that are rendered). We said that a higher-order component is a function that returns a new component, but that new component can contain other new components itself. That’s the case of withRouter and withApollo.

###withApollo added two new components in the hierarchy

![withApollo added two new components in the hierarchy](https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fcomposition%2Fapollo-min.png?alt=media)

###withRouter added two new components in the hierarchy

![withRouter added two new components in the hierarchy](https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fcomposition%2FwithRouter-min.png?alt=media)

###connect only added a new component in the hierarchy

![connect only added a new 1 component in the hierarchy](https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fcomposition%2Fconnect-min.png?alt=media)

###Threads is the enhanced component.

![Threads is the enhanced component](https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fcomposition%2FThreads-min.png?alt=media)

Wait, HoCs are functions, not components so how can we compose them? Same as the function composition we explained at the beginning of the article, although in this case the input & output of all the HoCs are always components:

![HoC composition](https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/blog%20post%20images%2Fcomposition%2Fhoc-composition.png?alt=media)

Do you think the order of the HoCs matter? For instance, do the following two cases work the same:

Case A

```
export default compose(
	withRouter,
	withApollo(QUERY),
    connect(mapStateToProps),
)(Threads)
```

Case B

```
export default compose(
    connect(mapStateToProps),
	withRouter,
	withApollo(QUERY),
)(Threads)
```

From a composition perspective both cases are the same since all the HoCs’ input & output are components. Now from a React implementation perspective there are a few considerations:
Prop name collision, meaning two HoCs inject a prop with the same name. In the previous example it doesn’t happen.
Performance. Imagine Threads is a form connected to ReduxForm. Everytime the user press a key it would cause a rerender of all the components in case B but not in case A. The reason is props need to be propagated down the composition to Threads through all the components inbetween.

We cover these and similar cases in more detail in any of the in-person React trainings we run, such as the [bootcamp](/react-redux-graphql-bootcamp/), [advanced training](/advanced-react-redux-graphql-bootcamp/), [part-time course](/react-redux-graphql-part-time-course/), and of course the [private on-site corporate training](/corporate-team-training/). If you are interested you can see here some of the exercises we do in this part as our materials are open source. [TODO LINK TO ADVANCED PATTERNS EXERCISE WEBSITE]

## Composition via Render Props <a name="composition-via-render-props"></a>

Render Props, like HoC, help us reusing component logic (again! **only logic that has to do with lifecycle methods and/or component state and/or context**). The different is in the way they do it.

With HoCs composition happens all in one place, typically at the bottom of the file where we define the component:

```
export default withRouter(
    withApollo(QUERY)(
        connect(mapStateToProps)(Threads)
    )
)
```

A problem some people observe with HoCs is that composition doesn’t look very declarative from a React perspective. In React we tend to declare intent using components in JSX. In some cases, Render Props can make the code more readable. For instance:

TODO EXAMPLE CODE MEASURE RENDER PROPS

TODO EXAMPLE CODE MEASURE HOC

With Render props we are composing with the logic we want to reuse, just for the components that are interested in that concern. In the previous example, only the image is composed with the Mesure logic. The HoC approach is composing the entire set of components with the mesure logic.

Render Props is defined inside a method that is rendered, this means **composition with Render Props happens at render time, not at run time like HoCs**. This feature gives composition via Render Props access to props out of the box, which is very powerful. In HoC to get access to props you need to implement some code yourself to handle that case. You can see an [example in connect from react-redux](https://react-redux.js.org/api/connect#the-arity-of-maptoprops-functions) with the called ‘ownProps’.

## Composition via React Hooks <a name="composition-via-react-hooks"></a>

Before Hooks, composition in React happened only vertically (bottom-up) between components in the tree. Heads up, I'm specifically talking about composition in the tree and not data flow. Data flow in the component tree is top-down

[TODO ADD IMAGE TREE AND ARROW TOP-DOWN FOR DATA-FLOW, BOTTOM-UP FOR COMPOSITION]

> Hooks allows composition perpendicular to the tree. - Sebastian Markbåge (author of the Hooks proposal)

<tweet id="1057392329739296768"></tweet>

[TODO ADD IMAGE TREE AND PERPENDICULAR ARROW LEFT-RIGHT AND RIGHT-LEFT]

Composition perpendicular to the tree means that now we can **reuse component logic inside different components**. This is genius.

I find brilliant the atom and electron analogy that Dan Abramov used to describe React Components and React Hooks.

> When scientists discovered the atom they thought they were the smallest thing we are going to find. But later they discover the electron, which is a **smaller part inside the atom**. It turns out that the electrons explain a lot about **how atoms work**. - Dan Abramov.

There are countless advantages of using Hooks compared to HoC and Render Props. Here are some that I find very relevant for the subject of this article:
Hooks don’t create new components in the three. This make our tree more readable and performant (bye bye wrapper hell!) since Hooks don’t change your component hierarchy when you use them.
Hooks let you split one component into smaller functions that can be reused across different components.
Hooks remove the cognitive overhead that [Render Props](#composition-via-render-props) and [HoC](#composition-via-higher-order-components) add when reusing component logic.

If you are excited about React Hooks (you probably should) and you want to learn more about it, I recommend you watching my colleague Richard’s video about useState

[TODO CREATE MARKDOWN VIDEO COMPONENT]
https://www.youtube.com/watch?v=8ejtnaOxXQE&t=25s

## Composition versus inheritance in React <a name="composition-vs-inheritance-in-react"></a>

The principles behind composition and inheritance in React don’t differ from composition and inheritance in general software development terms. That being said, there are some small considerations in React, for instance the bundle size which would not matter much in a server-side environment.

Inheritance is a rigid, [tightly-coupled](/blog/unit-testing-fundamentals-explained-using-javascript#coupling) approach. Every ancestor in the hierarchy adds a coupling layer.

When we reuse a use case of a given class by inheriting from it, we also bring all the implicit code from the ancestors, even the code from the use cases we don’t use. In JavaScript that means more code to bundle. This extra code is also more difficult to optimize and reduce the size by for instance reducing the number of characters of method names or class properties.

Due to tight coupling, changes to the base class could potentially break any of the descendant classes. The probability of a breaking changes increases when you extend a class implemented by a third-party author. That’s the reason **you should never extend a class that extends React.Component; your component extends React.Component and inheritance should stop there.**

## Recap

- [Pure functions](/blog/unit-testing-fundamentals-explained-using-javascript#pure-functions) are the building block of [function composition](#function-composition). Components are the building block of the UI composition model in React.

- Components can be composed with one or many other components.

- Components never know who are their parents.

- In the [React composition model](#react-composition-model) some components don't know who are their children ahead of time (we could also say at implementation time). The children prop enhances the React declarative approach.

- Composition in React is everywhere, not only when we "compose" higher-order components.

- With HoC composition happens at runtime, with Render Props composition happens at render time. Render Props gives you access to the component props out of the box

- React Hooks allow composition perpendicular to the tree by enabling reusing component logic inside different components. This way, we don’t change the component hierarchy when reusing component logic.

- React Hooks let you split one component into smaller functions that can be reused across different components.

- React Hooks remove the cognitive overhead that [Render Props](#composition-via-render-props) and [HoC](#composition-via-higher-order-components) add when reusing component logic.

- Composition will make your code more reusable, easier to maintain, and easier to test. Long live composition!
