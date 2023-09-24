import { useRef } from "react";
export default function useIntersectionObserver(callback, deps) {
  const observer = useRef(null);

  const ref = function (node) {
    if (deps.every(Boolean)) {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) callback();
      });
      if (node) observer.current.observe(node);
    }
  };

  return ref;
}
