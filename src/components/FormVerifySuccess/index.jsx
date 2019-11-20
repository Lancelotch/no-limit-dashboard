import React from "react";
import Button from "../Button";
import Text from "../Text";

export default function FormVerifySuccess({ onClick }) {
  return (
    <React.Fragment>
      <Text>You have successfully verified the account</Text>
      <Button
        variant="contained"
        color="primary"
        size="medium"
        aria-label="add"
        onClick={onClick}
        fullWidth
      >
        Next
      </Button>
    </React.Fragment>
  );
}
