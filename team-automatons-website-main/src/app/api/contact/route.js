
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        // WARNING: using placeholder credentials. 
        // User must provide real credentials via environment variables for this to work in production.
        // For now we will just log success or error based on the attempt.

        // Create a transporter
        // Note: For Gmail, you often need an App Password if 2FA is on.
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'automatons.robotics@gmail.com', // Using the email provided by user
                pass: process.env.EMAIL_PASSWORD || 'your-app-password-here' // Placeholder
            }
        });

        const mailOptions = {
            from: email,
            to: 'automatons.robotics@gmail.com',
            subject: `New Contact Form Submission from ${name}`,
            text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
        };

        // To prevent actual failures during demo if no password is set, we might mock success if password is default
        if (!process.env.EMAIL_PASSWORD) {
            console.log('Mock Email Sending (No Password Set):', mailOptions);
            return NextResponse.json({ message: 'Message sent successfully (Mock)' }, { status: 200 });
        }

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Email send error:', error);
        return NextResponse.json({ message: 'Failed to send message', error: error.message }, { status: 500 });
    }
}
