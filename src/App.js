import './assets/App.css';
import { Route, Routes } from 'react-router-dom';
import Feed from './pages/Feed/Feed';
import { QueryClient, QueryClientProvider } from 'react-query'
import Comments from './pages/Comments/Comments';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';

function App() {
  const queryClient = new QueryClient();

  const [subreddit, setSubreddit] = useState('r/all');
  const subreddits = ['r/all', 'r/funny', 'r/AskReddit', 'r/gaming', 'r/aww', 'r/Music', 'r/pics', 'r/science', 'r/worldnews', 'r/Art']

  const [searchTerm, setSearchTerm] = useState('')

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} subreddit={subreddit} setSubreddit={setSubreddit} subreddits={subreddits} />
        <Routes>
          <Route path='/' element={<Feed searchTerm={searchTerm} setSearchTerm={setSearchTerm} subreddit={subreddit} setSubreddit={setSubreddit} />} />
          <Route path='/comments/:permalink' element={<Comments></Comments>} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
