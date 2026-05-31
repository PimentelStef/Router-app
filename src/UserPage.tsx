import { useNavigate, useParams } from "react-router-dom";

export default function UserPage() {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  return (
    <>
      <h2>User ID: {id}</h2>

      <button onClick={() => navigate(-1)}>
        Back to Users
      </button>
    </>
  );
}