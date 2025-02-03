import ParadoxAnimation from "./page/ParadoxAnimation";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Zeno&apos;s Paradox: Achilles and the Tortoise</h1>

      <ParadoxAnimation />
    </div>
  );
}

export default App;
