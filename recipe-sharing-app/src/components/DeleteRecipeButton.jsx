import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = () => {
  const navigate = useNavigate();

  const handleDelete = () => {
    navigate("/");
  };

  return (
    <button onClick={handleDelete}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;

