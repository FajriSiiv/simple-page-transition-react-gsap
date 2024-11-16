import { useEffect } from "react";
import { animatePageIn } from "./utils/animation";

export default function Template({ children }) {
  useEffect(() => {
    animatePageIn();
  }, []);
  return (
    <div>
      <div
        id="banner-1"
        className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-0 w-full origin-top"
      />

      {children}
    </div>
  );
}
