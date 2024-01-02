const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

const CHAT_ENGINE_PROJECT_ID = "a4e1f4a2-1386-43b9-a4d0-5923018d7e94";
const CHAT_ENGINE_PRIVATE_KEY = "0e51aaad-d677-4a84-a4f1-07c2cbc2f6d0";

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    // Store a user-copy on Chat Engine!
    // Docs at rest.chatengine.io
    try {
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            { username: username, secret: username, first_name: username },
            { headers: { "Private-Key": CHAT_ENGINE_PRIVATE_KEY } }
        );
        console.log(r.data);
        return res.status(r.status).json(r.data);
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }
});

// app.post("/login", async (req, res) => {
//     const { username, secret } = req.body;

//     // Fetch this user from Chat Engine in this project!
//     // Docs at rest.chatengine.io
//     try {
//         const r = await axios.get("https://api.chatengine.io/users/me/", {
//             headers: {
//                 "Project-ID": CHAT_ENGINE_PROJECT_ID,
//                 "User-Name": { username },
//                 "User-Secret": { secret },
//             },
//         });
//         console.log(r.data);
//         return res.status(r.status).json(r.data);
//     } catch (e) {
//         return res.status(e.response.status).json(e.response.data);
//     }
// });

// vvv On port 3001!
app.listen(3001);