import {useEffect, useState} from "react";

function useSwipeDetection() {
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [swipeChangeTracker, setSwipeChangeTracker] = useState(null);
  const [startX, setStartX] = useState(null);
  const [startY, setStartY] = useState(null);

  useEffect(() => {
    const handleTouchStart = (e) => {
      setStartX(e.touches[0].clientX);
      setStartY(e.touches[0].clientY);
    };

    const handleTouchEnd = (e) => {
      if (startX === null || startY === null) {
        return;
      }

      const deltaX = e.changedTouches[0].clientX - startX;
      const deltaY = e.changedTouches[0].clientY - startY;

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        setSwipeDirection(deltaX > 0 ? "right" : "left");
      } else {
        setSwipeDirection(deltaY > 0 ? "down" : "up");
      }

      // Reset startX and startY to null after each swipe event
      setStartX(null);
      setStartY(null);
      setSwipeChangeTracker(Math.random());
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [startX, startY]);

  return {swipeDirection, swipeChangeTracker};
}

export default useSwipeDetection;
