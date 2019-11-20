import React from "react";
import Button from "../Button";
import Text from "../Text";

export default function FormVerifyEmail({ onSubmit, loading }) {
  return (
    <React.Fragment>
      <Text>
        Verify EmailUse the link below to verify your email and start enjoying
        NoLimit Dashboard
      </Text>
      <Button
        variant="contained"
        color="primary"
        size="medium"
        aria-label="add"
        onClick={onSubmit}
        disabled={loading}
        fullWidth
      >
        Verify Email
      </Button>
    </React.Fragment>
  );
}
