export default function NotFound() {
  return (
    <div className="container">
      <p
        className="text-center p_about"
        style={{ marginTop: "15vh" }}
      >
        Sorry, the page you&apos;re looking for, seems to have been misplaced.
        I guess?
      </p>
      <div className="text-center mt-3 p_about">
        Want to go back to{" "}
        <a href="/" style={{ textDecoration: "none" }}>
          Home
        </a>{" "}
        perhaps..?
      </div>
    </div>
  );
}

