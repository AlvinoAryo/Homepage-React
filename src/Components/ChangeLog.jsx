import { useState } from "react";
var axios = require("axios");

const ChangeLog = () => {
  const [commitMessage, setCM] = useState([]);
  const [commitAuthor, setCA] = useState([]);
  const [commitEmail, setCE] = useState([]);
  const [commitDate, setCD] = useState([]);
  axios({
    method: "get",
    url: `https://api.github.com/repos/AlvinoAryo/Homepage-React/commits`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/vnd.github.mercy-preview+json", // MUST ADD TO INCLUDE TOPICS
    },
  })
    .then((response) => {
      for (let i = 0; i < response.data.length; i++) {
        setCM(commitMessage.concat(response.data[i].commit.message));
        setCA(commitAuthor.concat(response.data[i].commit.author.name));
        setCE(commitEmail.concat(response.data[i].commit.author.email));
        setCD(commitDate.concat(response.data[i].commit.author.date));
        console.log(commitMessage);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <>
    </>
  );
};

export default ChangeLog;
