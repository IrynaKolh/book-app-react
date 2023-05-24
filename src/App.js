import './App.css';
import Search from './components/Search';
import BooksList from './components/BooksList';
import BookDetails from './components/BookDetails';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="app">
    <Search setSearch={setSearch} />
    <BooksList search={search} onSelectBook={setSelectedBook} />

    {selectedBook && <BookDetails bookId={selectedBook} />}
  </div>
  );
}

export default App;
