import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(12);

  const onClickCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center gap-8">
      <div>Count: {count}</div>
      <button
        className="bg-white border-2 border-black w-8 h-8 rounded-lg"
        onClick={onClickCount}
      >
        +
      </button>
    </div>
  );
};

export default App;
