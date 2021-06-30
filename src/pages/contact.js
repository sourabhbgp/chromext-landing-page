import React, { useState } from "react";
import { Box, Container, Grid, Button, Input, Heading, Text } from "theme-ui";
import axios from "axios";

const Contact = () => {
  const [status, setStatus] = useState(null);

  const onMessage = (data) => {
    axios
      .post(
        `https://tweksen-backend-3aav2.ondigitalocean.app/api/web/contact`,
        data
      )
      .then((data) => setStatus(true))
      .catch((err) => setStatus(false));
  };

  return (
    <Box sx={styles.contact} id="contact">
      <Container sx={styles.container}>
        <Text as="h1">Contact us</Text>

        {status === null ? (
          <>
            <Text as="p">
              Is there is anything we could do to help you, Please let us know.
              We will try to reach you as soon as possible.
            </Text>
            <Box
              as="form"
              sx={styles.formBox}
              onSubmit={(e) => {
                e.preventDefault();

                let data = {
                  email: e.target.email.value,
                  message: e.target.message.value,
                };

                onMessage(data);
              }}
            >
              <Input
                as="input"
                type="email"
                name="email"
                placeholder="Email"
                style={{ marginBottom: "16px" }}
                required={true}
              />
              <Input
                rows={5}
                name="message"
                as="textarea"
                placeholder="How can we help you?"
                style={{ marginBottom: "16px" }}
                required={true}
              />
              <Button type="submit">Submit</Button>
            </Box>
          </>
        ) : (
          <>
            {status ? (
              <Text as="p">
                Message Send. We will reach you as soon as possible.
              </Text>
            ) : (
              <Text as="p" style={{ color: "red" }}>
                Error. Server issue. Please after sometime or contact us on
                sourabh@chromext.app
              </Text>
            )}
          </>
        )}
      </Container>
    </Box>
  );
};

export default Contact;

const styles = {
  contact: {
    pt: ["80px", null, null, null, "100px", "150px"],
    pb: ["50px", null, null, null, "60px", null, "0"],
    overflow: "hidden",
  },
  container: {
    width: [null, null, null, null, null, null, "1390px"],

    h1: {
      fontSize: [6, null, null, "36px"],
      mb: ["15px", null, null, null, "20px"],
    },

    p: {
      fontSize: ["14px", null, null, "18px"],
      mb: ["8px", null, null, , "10px"],
    },
  },

  formBox: {
    width: ["100%", "100%", "100%", "50%", "50%", "50%", "50%"],
    mt: ["20px", "20px", null, null, "40px"],
  },
};
