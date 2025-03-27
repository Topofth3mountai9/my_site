// Create a new component called ScrollDebugger.jsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ScrollDebugger = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <DebugContainer>
      <p>Scroll Y: {scrollY}px</p>
      <button onClick={() => console.log("Current scroll:", window.scrollY)}>
        Log Scroll
      </button>
    </DebugContainer>
  );
};

const DebugContainer = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  z-index: 9999;
  font-size: 14px;
`;

export default ScrollDebugger;
