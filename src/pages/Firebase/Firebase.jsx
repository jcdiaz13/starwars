import { useEffect, useState } from "react";
import {
  createPerson,
  deleteItem,
  getItems,
  updateItem,
} from "../../app/services/people";
import { Box, Container, Row } from "./Firebase.styles";

const Firebase = () => {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [users, setUsers] = useState([]);
  // RECIBE COMO PARAMETROS DE ENTRADA LA ID DE LO QUE QUEREMOS MODIFICAR Y UN OBJETO CON LOS NUEVOS VALORES.
  useEffect(() => {
    consult();
  }, []);

  const consult = () => {
    // getItems().then(setUsers) Forma simplificada
    getItems().then((response) => {
      setUsers(response);
    });
  };

  const handleAddPerson = async () => {
    await createPerson({ userName: userName });
    consult();
    setUserName("");
  };

  const handleDeleteById = async () => {
    await deleteItem(userId);
    consult();
    setUserId("");
  };

  const handleUpdateById = async () => {
    await updateItem(userId, { userName: userName });
    consult();
    setUserName("");
    setUserId("");
  };

  return (
    <Container>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button onClick={handleAddPerson}>ADD PERSON</button>
        <button onClick={handleDeleteById}>DELETE USER BY ID</button>
        <button onClick={handleUpdateById}>UPDATE USER BY ID</button>
      </div>
      <Box>
        {users?.map((user) => (
          <div key={user.id}>
            <Row>
              <p>{user.userName}</p>
              <p>{user.id}</p>
            </Row>
          </div>
        ))}
      </Box>
    </Container>
  );
};

export default Firebase;
