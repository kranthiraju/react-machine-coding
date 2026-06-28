# Infinite Scroll Product List

## Problem Statement

Build a React application that displays a list of products using **Infinite Scrolling**. Products should be loaded in batches as the user scrolls down. The application should also **lazy load product images** and be optimized to handle a large dataset efficiently.

---

## Requirements

### Functional Requirements

- Display a list of product cards.
- Initially load the first batch of products.
- Automatically load the next batch when the user reaches the bottom.
- Stop fetching when all products are loaded.
- Show loading and error states.
- Prevent duplicate API requests.

### Performance Requirements

- Implement Infinite Scroll using `IntersectionObserver`.
- Lazy load images using `IntersectionObserver` (or `loading="lazy"`).
- Avoid unnecessary re-renders.
- Keep scrolling smooth for large datasets.

---

## Application Flow

```
Application Loads
        │
        ▼
Fetch First Batch
        │
        ▼
Render Product Cards
        │
        ▼
Observe Bottom Sentinel
        │
        ▼
User Scrolls
        │
        ▼
Sentinel Intersects Viewport
        │
        ▼
Fetch Next Batch
        │
        ▼
Append Products
        │
        ▼
Repeat Until No More Data
```

---

# Infinite Scroll Implementation
### Intersection Observer

```jsx
useEffect(() => {
  if (!loaderRef.current) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (
        entry.isIntersecting &&
        !loading
      ) {
        setPage(prev => prev + 1);
      }
    },
    {
      threshold: 1,
    }
  );

  observer.observe(loaderRef.current);

  return () => observer.disconnect();
}, [loading]);
```

---

# Lazy Loading Images

Instead of loading every image immediately, each image is observed individually.

### LazyImage Component

```jsx
function LazyImage({ src, alt }) {
  const imgRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageSrc(src);
          observer.disconnect();
        }
      },
      {
        threshold: 1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      loading="lazy"
    />
  );
}
```
---

## Key Concepts

- **IntersectionObserver** detects when elements enter the viewport without expensive scroll listeners.
- **Infinite Scroll** loads additional products as the user reaches the end of the list.
- **Lazy Loading** delays image downloads until they are about to become visible.
- **`loading`** ensures only one request is in flight at a time, avoiding duplicate fetches.
