import React from "react";
import { Navigate } from "react-router-dom";

export default function Error() {
  return (
    <>
      <h2>OPS PAGE NOT FOUND</h2>
      <Navigate to="/"></Navigate>
    </>
  );
}
