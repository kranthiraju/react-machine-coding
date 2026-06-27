# React Accordion Component

## Problem Statement

Build a React Accordion component that allows users to expand and collapse sections of content. When a section is clicked, it should toggle its visibility. If a new section is clicked, it should expand while the others collapse (i.e., only one section is open at a time).

## Requirements

1. Display a list of accordion items, each with a title and content.
2. Clicking on a title expands its content and collapses any previously opened item.
3. If an already open item is clicked, it should collapse.
4. The component should accept an array of items as props. Each item contains:

   * `title`: The heading of the accordion item.
   * `content`: The details inside the accordion item.
5. Handle edge cases such as an empty list or invalid input by displaying the message:

   * **"No items available."**

## Constraints & Edge Cases

* The `items` prop should be an array of objects:

  ```js
  {
    title: string,
    content: string
  }
  ```
* If `items` is empty or invalid, display:

  ```
  No items available.
  ```
* Use React's `useState` hook and conditional rendering for state management and performance.

## Example Input

```jsx
const items = [
  {
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces."
  },
  {
    title: "What is an Accordion?",
    content: "An accordion is a UI component that expands and collapses content."
  },
  {
    title: "Why use useState?",
    content: "useState lets you add state to functional components."
  }
];
```

## Expected Behavior

* Initially, all accordion items are collapsed.
* Clicking an item's title expands its content.
* Clicking another title closes the currently open item and opens the selected one.
* Clicking an already expanded title collapses it.
* If no valid items are provided, display:

  ```
  No items available.
  ```
