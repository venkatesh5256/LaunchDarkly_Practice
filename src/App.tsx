import { useBoolVariation, useJsonVariation } from "@launchdarkly/react-sdk";
import "./App.css";

function App() {
  // flag key, default value if LaunchDarkly can't be reached
  const showBanner = useBoolVariation("show-new-banner", false);
  const showVenkateshMsg = useBoolVariation("show-venkatesh-msg", false);
  const flagValue = useJsonVariation("selected-customers", {});
  return (
    <main className="app">
      <h1>LaunchDarkly Practice</h1>
      <p className="app-subtitle">Feature flags powered by LaunchDarkly</p>

      <section className={`flag-card ${showBanner ? "on" : "off"}`}>
        <div className="flag-card-header">
          <code className="flag-key">show-new-banner</code>
          <span className="status-pill">{showBanner ? "ON" : "OFF"}</span>
        </div>
        {showBanner && (
          <img
            className="flag-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ4wT5enpOqxSnQDP_DCU-3wnOqbGgovR_98dvdZzZmm5LyjzBlwORfwA&s=10"
            alt="New feature"
          />
        )}
      </section>
      <section className={`flag-card ${showVenkateshMsg ? "on" : "off"}`}>
        <div className="flag-card-header">
          <code className="flag-key">show-venkatesh-msg</code>
          <span className="status-pill">{showVenkateshMsg ? "ON" : "OFF"}</span>
        </div>
        {showVenkateshMsg && (
          <p>
            The best time to plant a tree was 20 years ago. The second best time
            is now
          </p>
        )}
      </section>
      {JSON.stringify(flagValue)}
    </main>
  );
}

export default App;
