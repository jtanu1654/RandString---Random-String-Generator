import React, { useState, useCallback, useEffect } from 'react';

const App = () => {
  // useState hook to manage the state of the random string and its length
  const [randomString, setRandomString] = useState('');
  const [length, setLength] = useState(10); // Default length is 10

  // useCallback hook to memoize the string generation function.
  // This is useful for performance, preventing the function from being recreated on every render.
  const generateRandomString = useCallback(() => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setRandomString(result);
  }, [length]); // The function is recreated only when 'length' changes

  // useEffect hook to generate a new string when the component first mounts
  // or whenever the 'length' value changes.
  useEffect(() => {
    generateRandomString();
  }, [length, generateRandomString]); // Dependency array includes 'length' and the memoized function

  // Function to handle the button click and manually generate a new string
  const handleGenerateClick = () => {
    generateRandomString();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-6 text-indigo-400">RandString</h1>
        
        {/* Input for string length */}
        <div className="mb-6">
          <label htmlFor="length" className="block text-gray-400 mb-2">
            String Length:
          </label>
          <input
            type="number"
            id="length"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            min="1"
            max="100"
          />
        </div>
        
        {/* Button to generate a new string */}
        <button
          onClick={handleGenerateClick}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Generate New String
        </button>
        
        {/* Display area for the generated string */}
        <div className="mt-8 bg-gray-700 p-6 rounded-lg break-words">
          <h2 className="text-lg text-gray-400 mb-2">Generated String:</h2>
          <p className="font-mono text-xl md:text-2xl text-yellow-300">
            {randomString}
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
