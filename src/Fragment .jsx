function App() {
  // Functional component starts here

  return (
    <>
      {/* 
        This is a React Fragment.
        It allows returning multiple elements.
        It will NOT appear in the browser DOM.
      */}

      <h1>React Fragment Example</h1>
      {/* Heading element */}

      <p>
        Fragment helps us group elements without adding extra HTML nodes.
      </p>
      {/* Paragraph element */}

      <p>
        It keeps the DOM clean and improves layout structure.
      </p>
      {/* Another paragraph */}

    </>
  );
}

export default App;







// ✅ FINAL SUMMARY (Easy to Remember)

// Fragment = invisible wrapper

// No extra HTML element

// Improves DOM structure

// Use <> </> for normal cases

// Use <React.Fragment> when key is needed