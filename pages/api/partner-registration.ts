import type { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';

// Connect to MySQL
async function connectToDatabase() {
    return await mysql.createConnection({
        host: "apex.herosite.pro",
        user: 'kzzuezbs_31aa9913123139jmasr',
        password: 'N4(I9_P9>!lPo:vmT0',
        database: 'kzzuezbs_31aa9913123139jmasr',
    });
}

// API Route Handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    const { name, fullName, email, password, mobileNumber } = req.body;

    try {
        // Connect to the database
        const db = await connectToDatabase();

        // Insert data into the 'partners' table
        const query = `INSERT INTO partners (name, fullName, email, password, mobileNumber) VALUES (?, ?, ?, ?, ?)`;
        const values = [name, fullName, email, password, mobileNumber];

        const [result] = await db.execute(query, values);

        // Close the connection
        await db.end();

        // Respond with success message
        return res.status(200).json({ success: true, message: 'Registration successful', data: result });
    } catch (error) {
        console.error('Database error:', error);
        return res.status(500).json({ success: false, message: 'Registration failed' });
    }
}
