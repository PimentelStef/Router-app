import { useSearchParams } from "react-router-dom";

export default function SearchPage() {
  const [params] = useSearchParams();
  const keyword = params.get("keyword");

  return <p>Searching for: {keyword}</p>;
}