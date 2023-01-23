import BookList from './components/book/BookList';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <Switch>
        <Route path="/books">
          <Link to="/">To Homepage...</Link>
          <BookList />
        </Route>

        <Route path="/">
          <h1>Welcome to Library</h1>
          <Link to="/books">To Library...</Link>
        </Route>
      </Switch>
    </main>
  );
}

export default App;
