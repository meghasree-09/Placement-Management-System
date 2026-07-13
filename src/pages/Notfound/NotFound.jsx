import "./NotFound.css";

function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for doesn't exist.</p>

      <a href="/">Back to Home</a>
    </div>
  );
}

export default NotFound;