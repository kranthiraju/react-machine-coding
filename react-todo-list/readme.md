# Todo List Component

## Features

* Add a new todo item.
* Mark a todo as completed.
* Delete a todo item.
* View the list of all todos.

## Requirements

* The component should maintain a list of todos in its state.
* Each todo should have:

  * `id`
  * `text`
  * `completed` (boolean)
* An input box with the placeholder **"Enter todo"** to type a new todo.
* A button labeled **"Add"** to add a todo.
* Each todo should display:

  * Its text
  * A checkbox to toggle completion
* Each todo should have a **"Delete"** button to remove it.
* Completed todos should be displayed with a **strikethrough** style.

## Constraints & Edge Cases

* Todo text must not be empty.
* Case-insensitive duplicate entries are allowed.
* Deleting a todo should not affect the remaining items.
* All operations should update the UI immediately.

## Reference UI

A sample UI includes:

* An input field with placeholder **"Enter todo"**
* An **"Add"** button
* A list of todos
* Each todo containing:

  * A checkbox
  * Todo text
  * A **"Delete"** button
* Completed todos shown with a strikethrough effect.


https://do6gp1uxl3luu.cloudfront.net/question-gif/todoList.gif