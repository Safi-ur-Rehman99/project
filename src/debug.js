// debugReact.js
import React from "react";

const originalCreateElement = React.createElement;

React.createElement = (type, ...rest) => {
  if (typeof type !== "string" && typeof type !== "function") {
    console.error(
      "🚨 Invalid React element detected:",
      type,
      "\nProps:",
      rest[0],
      "\nStack trace:",
      new Error().stack
    );
  }
  return originalCreateElement(type, ...rest);
};

export * from "react";   // re‑export all named exports
export default React;    // default export for React.createElement patch
