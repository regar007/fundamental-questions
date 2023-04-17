# React fundamentals
----------

**Q. What is React?**
It's a Library. It uses **virtual dom** which is a copy of **real dom** and whenever a state is changed and virtual dom is updated, react only re-renders that node of the real dom instead of complete dom.

**Q. What is JSX?**
It's a XML syntex for writing html in javascript file.

**Q. What are States and Props?**
**State** are the local data for a component and when a state is changed the html depending on the state re-renders. **Props** are properties received from the parent to child component.

**Q. How to update state in parent from child component?**
To update parent, a function from parent can be passed to child as a prop and child can trigger the function and function in parent can update the state when triggered. Similar to how callback works.

**Q. What are HOC?**
Higher Order Component are component which takes component as argument and returns a new component which added functionality. They are used in case when one logic is repeated twice or more at different components. HOC can have that logic and component can use it. Purpose is to dedupplicate the code and less bundle size and maintainability. 

**Q. What are custom hooks?**
Hooks in react are used in functional component, like `useState()` to create a state object. When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook. Custom Hooks start with "use". Example: useFetch.

```
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;
```
Usage:
```
const Home = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};
```

**Q. Class vs Functional Component?**
After react 16v, we can create states in function also using `useState`. And the lifecycle effects can be handled by `useEffect`. The only differency would be is that we can wite less code to achieve the same thing in functional component. And less code has its own advantages like better readablity, testing, less buggy.

**How does useEffect handle component lifecycle?**
There are basically three phases. Mounting, Updating, Unmounting. 
```
useEffect(() => {
    // data fetching
    return () => {
        // executes on unmounting
    }
}, []) // [] -> Optional dependency array
```
If we dont pass `[]` -> data fetching happens on every render. i.e., Mounting & Updating
If we pass `[]` -> data fetching happens only on first render. i.e., Mounting
if we pass `['state1', 'state2']` -> data fetching happens every time `state1` or `state2` updates. i.e., Mounting & Updating when `state1`, `state2` changes

**Q. What are error boundaries?**
Error boundries are used to render a fallback UI when an error happens while rendering of component. Only possible using class component. Wrap App component inside `ErrorBoundary`.
```
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}
```

**Q. How to improve Preformance?**
For starter to know what are the bottlenecks we should use ReactProfiler which will tell us which pages are rendering slower, why re-renders are happening and network latency. Few tachniques are listed down:
- **Webpack**: to create effiecient bundling chunks (code splitting) and thrid party library management
- **HOC**: reducing repetetive code
- **React.Lazy** with suspense to render component when they are ready and continue to render other parts of UI
- **Caching**: `useMemo` to memoize a havily computed value, `useCallback` to memoize a function and stop components re-renders which uses the function, `Memo` to meomize a component, `CDN` to cache large images to reduce network latency.
- **PureComponent**: use pure component when we want to render only when state value changes. This implements `shouldComponentUpdate`, which does shallow comparison with current and previous state.
- **Key Prop**: React uses key property on elements to track if they changed. Always use key prop for list itmes, so that react only renders the new items added to the list instead of re-rendering all items.
- **Small Component**: Breakdown the large components into small components and reuse whereever possible. This would stop re-rendering of components which dont need to, since state will affect its children. i.e., limitting the state local scope to minimal ui.

**Q. What consideration you would make to handle security?**
This is applicable to web security in general. Here are a few of them:
- **Secrets**: Always put app secrets in .env file and add it to .gitignore.
- **User credentials**: Never store user credentials in web storage. base64 encode and send to authentication api once and use tokens for future requests. Enforse strong password policy.
- **Cross-site scripting (XSS)**: Form submittion. the injected code enters the browser from the site, the code is reliable and can do things like sending the user’s site authorization cookie to the attacker.
- **SQL Injection**: Attacker can also send SQL qury in input fields. If it get executed on db without validation, they data could be stolen or currupted. Other similar attacks are CSRF, Phishing, Ransomware, Code Injection, Viruses and worms, Spyware. To handle SQL injection this frontend should validate input fields. To handle CSRF attack app should get CSRF token from server for making api call and send that as validation token for server. 
- **Denial of Service (DDOS)**: It happens when some attackers may flood you server with requests, which may crash the server. To handle this we should have rate limitting strategy implemeted at application layer.
- **Updated Software**: Always update libraries to get security updates.
- **Authorisation**: We Should have authorization for every request and every user for the resources to be accessed i.e., zero trust policy. This way, get request will never be able to write to db, but only read only a limited data.











