import  nodemailer  from "nodemailer";

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const userData = await request.json();
        const { email } = userData;

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "alaminduc516@gmail.com",
                pass: "ixwdxtqkwkpqnddz",
            },
            tls: { rejectUnauthorized: false },
        });

        const mailOptions = {
            from: 'Next Music School <alaminduc516@gmail.com>',
            to: email,
            subject: "Sending email from Music School",
            text: `
            Thank for sending email!
            `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Message sent: %s", info.response);

        // Send success response
        return NextResponse.json({ success: true, message: "Email sent successfully" })
    } catch (error) {
        console.error("Error:", error);
        // Send error response
        return NextResponse.json({ success: false, message: "Internal server error, please try again" })

    }
}
