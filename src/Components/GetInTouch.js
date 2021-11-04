import React from "react"
import { useEffect, useState } from "react";
const { GoogleSpreadsheet } = require("google-spreadsheet");
const creds = require('../client_secret.json');
let doc = {};

const GetInTouch = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const makeInitialCall = async () => {
      doc = new GoogleSpreadsheet(
        "1vyeBYBOJ4XBZwqSNDGG_rzGQAwmW4UYwPiqGEFzDG2E"
      );
      await doc.useServiceAccountAuth(creds);
      await doc.loadInfo();
      let dataRows = await doc.sheetsByIndex[0].getRows();
      console.log(doc.sheetsByIndex[0]);
      console.log(dataRows);
    };
    useEffect(() => {
      makeInitialCall();
    }, []);

    const handleNameChange = (e) => {
      setName(e.target.value);
    };

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
      setMessage(e.target.value);
    };

    const handleSubmit = async () => {
      let newRow = {
        Name: name,
        Email: email,
        Message: message,
      };

      let sheet = await doc.sheetsByIndex[0];
      sheet.addRow(newRow);
    };

    return (
      <div className="contact-form">
        <h1>Let's Talk</h1>
        <input
          type="text"
          onChange={handleNameChange}
          value={name}
          placeholder="Name"
        />
        <input
          type="email"
          onChange={handleEmailChange}
          value={email}
          placeholder="Email"
        />
        <textarea
          type="text"
          onChange={handleMessageChange}
          value={message}
          placeholder="What's on your mind?"
        />
        <button onClick={handleSubmit}>submit</button>
      </div>
    );
}

export default GetInTouch