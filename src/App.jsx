function App({ state }) {
  return (
    <svg width="100%" height="100%">
      {[...Array(state.numCircles)].map((_, index) => (
        <circle
          key={index}
          cx={Math.floor(10 + Math.random() * 85) + "%"}
          cy={Math.floor(10 + Math.random() * 75) + "%"}
          r={Math.floor(Math.random() * 100)}
          fill={`hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`}
        />
      ))}
    </svg>
  );
}

export default App;
