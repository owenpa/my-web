function App() {
  return (
    <div className="App">
      <h1>professionally wip (work in progress)</h1>
      <div className="buttonContainer">
              {/* open github/linkedin in new page */}
            <button className="githubButton" onClick={() => { window.open('https://github.com/owenpa', '_blank') }}><i class="fa-brands fa-github"></i></button>
            <button className="githubButton" onClick={() => { window.open('https://linkedin.com/in/on-hill/', '_blank')}}><i class="fa-brands fa-linkedin"></i></button>
      </div>
    </div>
  );
}

export default App;
