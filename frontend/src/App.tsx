import { Btn } from "./components/btn.tsx";
import "./App.css";
interface info {
  age: number;
  name: string;
}

const data: info[] = [{ name: "leo", age: 1 }];

function App() {
  return (
    <>
      {data.map((x) => (
        <ul>
          <li key={x.name}>{x.name}</li>
        </ul>
      ))}
      ;
      <Btn />
    </>
  );
}

export default App;
