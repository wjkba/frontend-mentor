import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <div style={{ display: "grid", placeItems: "center", minHeight: "50vh" }}>
        <div
          style={{
            padding: "2rem",
            backgroundColor: "white",
          }}
        >
          <h1>404 Not Found</h1>
          <Link to="/">Go back home</Link>
        </div>
      </div>
    </>
  );
}
