import { createRoot } from "react-dom/client";
import "./index.css";

// Load single responsive app for all devices
const loadApp = async () => {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    console.error("Root element not found!");
    return;
  }

  try {
    console.log("Loading responsive app...");
    const { default: App } = await import("./App.tsx");
    createRoot(rootElement).render(<App />);
  } catch (error) {
    console.error("Failed to load app:", error);
    // Simple fallback
    rootElement.innerHTML = '<div style="padding: 2rem; text-align: center; font-family: Inter, sans-serif;"><h1>VMC Media</h1><p>Loading...</p></div>';
  }
};

loadApp();
