import React, { useState } from 'react';
import axios from 'axios';
import './views/chatbot.css';

function App() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const res = await axios.post('http://localhost:5001/query', { query });
      setResponse(res.data.result);
    } catch (error) {
      console.error('Error:', error);
      setError(`Error: ${error.response?.data?.error || 'Sorry, there was an error processing your request.'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chcontainers">
      <h1>CHAT BOT</h1>
      <div className="container">
        <div className="chat-container">
          <div className="message sender">{query}</div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="query"
              id="query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type your query here..."
              disabled={loading} // Disable input while loading
            />
            <button className='button' type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </form>
          <div className="message receiver">
            {error ? <span className="error">{error}</span> : response}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
