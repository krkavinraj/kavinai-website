import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function POST(req: Request) {
    const { email, industry, reason } = await req.json();
  
    if (!email || !industry || !reason) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }
  
    try {
      const connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
      });
  
      await connection.execute(
        "INSERT INTO waitlist (email, industry, reason) VALUES (?, ?, ?)",
        [email, industry, reason]
      );
  
      await connection.end();
  
      return NextResponse.json({ message: "Successfully joined the waitlist!" }, { status: 200 });
    } catch (error) {
      console.error("Database Error:", error);
      return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
  }
  