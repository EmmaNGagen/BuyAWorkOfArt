import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer>
      <Link to="/" className="login">
        Log in
      </Link>

      <p>Copyright 2022 | Hangit</p>
    </footer>
  );
};
