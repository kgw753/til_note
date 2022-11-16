import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useFormAction } from "react-router-dom";
import { CREATE_USER } from "../graphql/Mutation";
import { GET_USERS } from "../graphql/Query";

const AddUser = () => {
  const [addUser] = useMutation(CREATE_USER);
  const [user, setUser] = useState({
    name: "",
    phone: "",
  });

  const createUser = () => {
    addUser({
      variables: {
        name: user.name,
        phone: user.phone,
      },
      refetchQueries: [{ query: GET_USERS }],
    });
  };

  const handleChange = (e: any) => {
    console.log(">> ", e.target.name);
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  console.log();
  return (
    <form>
      <div className="mb-3">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="enter name"
          name="name"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Phone</label>
        <input
          type="text"
          className="form-control"
          placeholder="enter phone"
          name="phone"
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={createUser}>
        Add
      </button>
    </form>
  );
};

export default AddUser;
