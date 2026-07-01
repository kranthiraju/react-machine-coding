# Build a React component that renders a table from given data with **pagination** and **page size selection**.

Users should be able to:

* View tabular data.
* Navigate between pages.
* Change how many rows are shown per page.

### **Requirements**

1. Accept a list of objects as a prop called `data`.

* `data`: An array of objects, where each object has `id`, `name`, and `age`.

2. **Table Structure**

* Display headers: `"id"`, `"name"`, and `"age"`.
* Render data rows based on the current page and selected page size.

3. **Pagination**

* Show a **"Next"** and **"Previous"** button.
* Initially display 5 rows per page.
* Clicking **"Next"** should move to the next page of data.
* Clicking **"Previous"** should go back one page.
* The **"Previous"** button should be disabled on the first page.

4. **Page Size Selector**

* The default page size must be 5.
* Provide a dropdown to change page size (e.g., 5, 10, 20).
* Selecting a new size should update the number of rows shown accordingly.

### **Constraints & Edge Cases**

* Changing page size should reset the current page to 1.
* Do not allow navigating beyond available pages.

## **Reference UI**

![dataTable](https://do6gp1uxl3luu.cloudfront.net/question-gif/dataTable.gif)
