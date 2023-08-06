// This contains main app components
import Header from "./components/Header";

function App() {
  const title = "Blog Post";
  const body = "This is my post";
  const comments = [
    { id: 1, text: "Comment 1" },
    { id: 2, text: "Comment 2" },
    { id: 3, text: "Comment 3" },
  ];

  return (
    <>
      <Header />
      <div className="container">
        <h1>{title}</h1>
        <p>{body}</p>

        <div className="comments"></div>
        <h2>Comments ({comments.length})</h2>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment.text}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
