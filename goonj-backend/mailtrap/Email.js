const {
    VERIFICATION_EMAIL_TEMPLATE,
} = require("./EmailTemplate.js");
const { mailtrapClient, sender } = require("../mailtrap/Mail.config.js");

const sendVerificationEmail = async (email, verificationToken) => {
    // Validate inputs
    if (!email || !verificationToken) {
        throw new Error("Email and verification token are required.");
    }

    if (!VERIFICATION_EMAIL_TEMPLATE || typeof VERIFICATION_EMAIL_TEMPLATE !== "string") {
        throw new Error("VERIFICATION_EMAIL_TEMPLATE is undefined or not a valid string.");
    }

    const recipient = [{ email }];

    try {
        const emailBody = VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken);

        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify your email",
            html: emailBody,
            category: "Email Verification",
        });

        console.log("Email sent successfully", response);
    } catch (error) {
        console.error(`Error sending verification email`, error);
        throw new Error(`Error sending verification email: ${error.message || error}`);
    }
};

const sendWelcomeEmail = async (email, name) => {

    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "c9ed18dc-297f-4412-8f4e-af02497fe58a", // Ensure this UUID is correct
            template_variables: {
                company_info_name: "Goonj",
                name: name,
            },
        });

        console.log("Welcome email sent successfully", response);
    } catch (error) {
        console.error(`Error sending welcome email`, error);
        throw new Error(`Error sending welcome email: ${error.message || error}`);
    }
};

module.exports = { sendVerificationEmail, sendWelcomeEmail };
