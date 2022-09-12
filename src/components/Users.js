import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="bg-img p-2">
      <h3 className="text-white text-center">Our Users!</h3>
      <div className="ps-5 pe-5">
        <h5 className="mb-2 text-white text-center">
          This is a table with all our users!
        </h5>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">City</th>
              <th scope="col">Phone number</th>
              <th scope="col">Company</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.address.city}</td>
                  <td>{user.phone}</td>
                  <td>{user.company.name}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Users;
