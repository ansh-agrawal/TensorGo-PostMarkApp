// routes/email.js
const express = require("express");
const { sendEmail } = require("../services/postmark");
const router = express.Router();

router.get("/sendEmail", async (req, res) => {
    try {
        const response = await sendEmail(
            "ansh.agrawal2021a@vitstudent.ac.in",
            "ansh.agrawal2021a@vitstudent.ac.in",
            "Hello from Postmark",
            "<strong>Hello</strong> dear Postmark user.",
            "Hello from Postmark!"
        );
        res.status(200).send("Email sent successfully!");
    } catch (error) {
        res.status(500).send(`Failed to send email: ${error.message}`);
    }
});

module.exports = router;
