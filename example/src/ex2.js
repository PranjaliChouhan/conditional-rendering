import React, { useState, useEffect } from 'react';

function Importance() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulating an API call
    fetchData()
      .then((response) => {
        setData(response);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  const fetchData = () => {
    return new Promise((resolve, reject) => {
      // Simulating API response
      setTimeout(() => {
        const responseData = ['Item 1', 'Item 2', 'Item 3'];
        resolve(responseData);
        // reject('Error: Failed to fetch data'); // Uncomment to simulate error
      }, 2000);
    });
  };

  // Importance 1: Handling Loading States
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Importance 2: Error Handling
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Importance 5: Conditional Styling
  const containerStyle = {
    background: isLoggedIn ? 'lightgreen' : 'lightgray',
    padding: '10px',
  };

  // Importance 6: Contextual Rendering
  const welcomeMessage = isLoggedIn ? 'Welcome, User!' : 'Please log in to continue.';

  return (
    <div style={containerStyle}>
      {/* Importance 4: Authentication and Authorization */}
      {isLoggedIn ? (
        <div>{welcomeMessage}</div>
      ) : (
        <div>
          {welcomeMessage}
          <button onClick={() => setIsLoggedIn(true)}>Log In</button>
        </div>
      )}

      {/* Importance 3: Conditional rendering for list */}
      {data.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

export default Importance;
