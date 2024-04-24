import { useEffect, useState } from "react";
import { createPerson, deleteItem, getItems } from "../../app/services/people";

const Firebase = () => {
  const [userName, setUserName] = useState("");
  const [userIdToDelete, setUserIdToDelete] = useState("");
  const [users, setUsers] = useState([]);
  // RECIBE COMO PARAMETROS DE ENTRADA LA ID DE LO QUE QUEREMOS MODIFICAR Y UN OBJETO CON LOS NUEVOS VALORES.
  useEffect(() => {
    consult();
  }, []);

  const consult = () => {
    getItems().then((deletedPerson) => {
      setUsers(deletedPerson);
    });
  };

  const handleAddPerson = async () => {
    await createPerson({ userName: userName });
    consult();
    setUserName("");
  };

  const handleDeleteById = async () => {
    await deleteItem(userIdToDelete);
    consult();
    setUserIdToDelete("");
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleAddPerson}>ADD PERSON</button>
        <input
          type="text"
          placeholder="Enter User ID to delete"
          value={userIdToDelete}
          onChange={(e) => setUserIdToDelete(e.target.value)}
        />
        <button onClick={handleDeleteById}>DELETE USER BY ID</button>
      </div>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            {user.userName}__________________________________________________
            {user.id}
          </div>
        ))}
      </div>
    </>
  );
};

export default Firebase;
