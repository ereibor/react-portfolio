import Button from "./components/ui/Button";
import { GithubIcon } from "./helpers/svg";

function App() {
  return (
    <>
      <div className="flex items-center  justify-center gap-4">
        <h1 className="text-3xl font-bold underline text-red-500 ">
          Hello world !
        </h1>
        <span>{GithubIcon()}</span>
      </div>
      <div className="text-center mt-4">
        <Button variant="secondary">Click me</Button>
      </div>
    </>
  );
}

export default App;
