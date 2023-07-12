
import './App.css';



function MyComponent({ isLoggedIn }) {
  if (isLoggedIn) {
    return <div>Welcome, user!</div>;
  } else {
    return <div>Please log in to continue.</div>;
  }
}



function TernaryOperator({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <div>Welcome, user!</div>
      ) : (
        <div>Please log in to continue.</div>
      )}
    </div>
  );
}


function App() {
  return (
   <>
   <MyComponent/>
   <TernaryOperator/>
   
   </>
  );
}

export default App;
