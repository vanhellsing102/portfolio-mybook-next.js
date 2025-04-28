import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request){
    try {
        const {name, email, message} = await request.json();
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.NEXT_PUBLIC_USER_EMAIL,
                pass: process.env.NEXT_PUBLIC_USER_PASS
            }
        })
        await transporter.sendMail({
            from: process.env.NEXT_PUBLIC_USER_EMAIL,
            to: email,
            subject: `Message send by ${name}`,
            text: message,

        })
        return NextResponse.json({message: "Message Send Successfully"}, {status: 200});
    } catch (error) {
        console.log(error);
        // res.status(401).json({message: error});
    }
}