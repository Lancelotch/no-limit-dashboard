import React from "react";
import Button from "../Button";
import { useFormik } from "formik";
import Text from "../Text";
import TextButton from "../TextButton";
import InputOtp from "../InputOtp";

export default function FormVerifyConfirm({ onSubmit, loading }) {
  const formik = useFormik({
    initialValues: {
      otpValue: ""
    },
    onSubmit: values => {
      onSubmit(values);
    }
  });
  const { handleSubmit, setFieldValue } = formik;
  const handleChangeOtp = function(value) {
    setFieldValue("otpValue", value);
  };
  return (
    <React.Fragment>
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <Text>Please type the verification code sent to +6285712347651</Text>
        <InputOtp OTPLength={4} onChange={handleChangeOtp} />
        <Button
          variant="contained"
          color="primary"
          size="medium"
          aria-label="add"
          type="submit"
          disabled={loading}
          fullWidth
        >
          Confirm
        </Button>
      </form>
      <TextButton>Resend Code</TextButton>
    </React.Fragment>
  );
}
