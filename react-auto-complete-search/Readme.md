# Autocomplete Search Bar

## Problem Statement

Build an Autocomplete Search Bar that fetches search suggestions from an API as the user types. The component should display matching suggestions in a dropdown while minimizing unnecessary API requests using debouncing and client-side caching.

---

## Requirements

* Search input with placeholder **"Search..."**
* Fetch suggestions from an API based on the user's input
* Display matching suggestions in a dropdown
* Hide suggestions when the input is empty
* Show **"No results found"** when there are no matches
* Update the UI immediately after receiving results
* Highlight the searched text in results

---

## Application Flow

1. User enters text into the search input.
2. Input changes trigger a debounced search.
3. Before making an API request, check if the query exists in the local cache.
4. If cached, display the cached results immediately.
5. Otherwise, fetch suggestions from the API.
6. Store the API response in the cache for future searches.
7. Render the suggestions in the dropdown.

---

## Debouncing

To prevent excessive API requests, the search is debounced by **300 ms**.

Without debouncing:

```text
h
he
hel
hell
hello
```

Results in **5 API requests**.

With debouncing:

```text
hello
```

Only **1 API request** is sent after the user pauses typing.

---

## API Result Caching

The application caches API responses using an object keyed by the search query.

Example:

```javascript
{
  "ch": [...],
  "chi": [...],
  "chicken": [...]
}
```

Before making an API request:

* Check if the query already exists in the cache.
* If found, return the cached results.
* Otherwise, fetch from the API and store the response in the cache.
