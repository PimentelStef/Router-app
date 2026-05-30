import { useParams } from "react-router-dom";

export default function UserPage() {
  const { id } = useParams<{ id: string }>();
  return <h1>User ID: {id}</h1>;
}
