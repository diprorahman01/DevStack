# Dev Stack

## Description

Dev Stack is a responsive website where users can explore different web development technologies and create their own technology stack. Users can view information about each technology and add their preferred technologies to the "Your Stack" section.

## Technologies Used

- React
- JavaScript
- JSX
- CSS
- JSON
- React Toastify
- React Icons
- Vite

## Features

1. **Explore Technologies**  
   Users can view different technologies with their icon, category, description, difficulty, rating, and badge.

2. **Build Your Own Stack**  
   Users can add technologies to their stack, remove individual technologies, or remove all selected technologies.

3. **Responsive Design**  
   The website works properly on desktop, tablet, and mobile devices with responsive technology cards and navigation.


## React Questions

1. What is JSX, and why is it used in React?
-- JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React components easier to read and create.

2. What is the difference between props and state?
-- Props are used to pass data from a parent component to a child component. State is used to store data inside a component that can change.

3. What does the useState hook do, and where did you use it in this project?
-- The useState (hook) is a built-in React function that allows us to add state variables to functional components.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
-- The useEffect hook is used for side effects such as fetching data.

5. Why does every item in a .map() list need a unique key prop?
-- A unique key helps React identify which specific items have changed, added or removed allowing it to re-render efficiently.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).
-- Conditional rendering is a programming concept where a user interface displays different elements or components based on specific conditions.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
-- I passed data from the parent to the child using props.