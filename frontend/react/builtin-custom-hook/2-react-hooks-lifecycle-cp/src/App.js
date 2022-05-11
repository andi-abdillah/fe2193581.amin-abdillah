import React from "react";

export default function App() {
  return <RandomQuote />;
}

export function RandomQuote() {
  // TODO: answer here
  const [quote, setQuote] = React.useState('');
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    // TODO: answer here
    getQuote();
  }, []);

  function getQuote() {
    setLoading(true);
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .finally(() => setLoading(false));
  }

  // TODO: answer here
  return (
    <div className="wrapper">
      <h1 className="title" data-testid="title">
        Random Quote
      </h1>
      <br></br>
      <h1 className="quote" data-testid="quote">
        {loading ? "Loading..." : quote.content}
      </h1>
      <h3 className="author" data-testid="author">
        {loading ? "" : " - " + quote.author}
      </h3>
      <br></br>
      <button onClick={getQuote} className="button" data-testid="button" >
        Get another quote
      </button>
    </div>
  );
}
