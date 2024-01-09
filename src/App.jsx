import './App.css';

function App() {
  // window.open(`http://www.google.com/search?q=${search}`, '_blank')

  const searchSubmit = (event) => {
    window.open(`http://www.google.com/search?q=${event}`, '_blank')
  }

  return (
    <div className="App">
      <div class="Search">
        <form class="Search__form">
          <div class="SearchIcon SearchIcon--google"></div>
          <input class="Search__input" type="text" placeholder="Search with Google" 
            onKeyPress={event => {
              if (event.key === 'Enter') {
                console.log(this.search())
              }
            }} /></form></div>
    </div>
  );
}

export default App;
