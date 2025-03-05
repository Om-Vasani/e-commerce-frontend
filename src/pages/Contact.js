import { useState } from "react";
import { TextField, Button, Container, Typography, Alert } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Contact = () => {
  const [message, setMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().min(3, "Too short!").required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      phone: Yup.string().matches(/^\d{10}$/, "Must be 10 digits").required("Required"),
      message: Yup.string().min(10, "Too short!").required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post("http://localhost:5000/api/contact", values);
        setMessage({ type: "success", text: response.data.message });
        resetForm();
      } catch (error) {
        setMessage({ type: "error", text: "Something went wrong!" });
      }
    },
  });

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Contact Us</Typography>
      {message && <Alert severity={message.type}>{message.text}</Alert>}
      <form onSubmit={formik.handleSubmit}>
        <TextField fullWidth label="Full Name" name="fullName" {...formik.getFieldProps("fullName")} margin="normal" error={formik.touched.fullName && Boolean(formik.errors.fullName)} helperText={formik.touched.fullName && formik.errors.fullName} />
        <TextField fullWidth label="Email" name="email" {...formik.getFieldProps("email")} margin="normal" error={formik.touched.email && Boolean(formik.errors.email)} helperText={formik.touched.email && formik.errors.email} />
        <TextField fullWidth label="Phone" name="phone" {...formik.getFieldProps("phone")} margin="normal" error={formik.touched.phone && Boolean(formik.errors.phone)} helperText={formik.touched.phone && formik.errors.phone} />
        <TextField fullWidth label="Message" name="message" {...formik.getFieldProps("message")} margin="normal" multiline rows={4} error={formik.touched.message && Boolean(formik.errors.message)} helperText={formik.touched.message && formik.errors.message} />
        <Button variant="contained" color="primary" type="submit">Submit</Button>
      </form>
    </Container>
  );
};

export default Contact;
