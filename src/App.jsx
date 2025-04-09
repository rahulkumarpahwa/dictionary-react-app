import Body from "./components/Body";
import Toggle from "./components/Toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faBook} className="text-blue-500 text-3xl" />
            <h1 className="text-2xl font-bold">Dictionary App</h1>
          </div>
          <Toggle />
        </div>
        <Body />
      </div>
    </div>
  );
}

export default App;
