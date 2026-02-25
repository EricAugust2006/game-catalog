import { useLocation } from "react-router-dom";

export default function Details() {
  const url = useLocation();

  return <div>Hello World, Page: {url.pathname}</div>;
}
