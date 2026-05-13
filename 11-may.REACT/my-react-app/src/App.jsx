import { useState } from "react";
import "./App.css";

function UserCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>{props.age} yosh</p>
      <p>{props.job}</p>
    </div>
  );
}

function App() {
  // 1
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // 3
  const [bgColor, setBgColor] = useState("white");

  // 4
  const [showText, setShowText] = useState(true);

  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      {/* 1 */}
      <section>
        <h2>Counter Application</h2>
        
        <div className="counter">
          <button onClick={decrease}>-</button>

          <h1>{count}</h1>

          <button onClick={increase}>+</button>
        </div>
      </section>

      {/* 2 */}
      <section>
        <h2>2. User Card Component</h2>

        <div className="cards">
          <UserCard
            name="Ali"
            age="22"
            job="Frontend Developer"
          />

          <UserCard
            name="Vali"
            age="25"
            job="Backend Developer"
          />

          <UserCard
            name="Sardor"
            age="20"
            job="Designer"
          />
        </div>
      </section>

      {/* 3 */}
      <section>
        <h2>3. Background Color Changer</h2>

        <div className="buttons">
          <button onClick={() => setBgColor("red")}>
            Red
          </button>

          <button onClick={() => setBgColor("blue")}>
            Blue
          </button>

          <button onClick={() => setBgColor("green")}>
            Green
          </button>

          <button onClick={() => setBgColor("white")}>
            Reset
          </button>
        </div>
      </section>

      {/* 4 */}
      <section>
        <h2>4. Show / Hide Text</h2>

        <div className="buttons">
          <button onClick={() => setShowText(true)}>
            Show
          </button>

          <button onClick={() => setShowText(false)}>
            Hide
          </button>
        </div>

        {showText && (
          <p className="text">
            React juda qiziqarli library
          </p>
        )}
      </section>
    </div>
  );
}

export default App;