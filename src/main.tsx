import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createLDReactProvider } from "@launchdarkly/react-sdk";
import type { LDContext } from "@launchdarkly/react-sdk";
import App from "./App";

// A "context" represents the user (or device, org, etc.) seeing the flags
const context: LDContext = {
  kind: "user",
  key: "user-123", // a unique ID for the user
  name: "Test User",
};

const LDProvider = createLDReactProvider(
  import.meta.env.VITE_LD_CLIENT_ID,
  context,
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LDProvider>
      <App />
    </LDProvider>
  </StrictMode>,
);
