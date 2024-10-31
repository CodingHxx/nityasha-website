// pages/api/contact.ts
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

    const { name, email, subject, message } = req.body;

    // Validate incoming data
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    try {
        const db = await connectToDatabase();

        // Insert data into the 'contacts' table
        const query = `INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)`;
        const values = [name, email, subject, message];

        const [result] = await db.execute(query, values);
        await db.end();

        return res.status(200).json({ success: true, message: 'Contact submission successful', data: result });
    } catch (error) {
        console.error('Database error:', error);
        return res.status(500).json({ success: false, message: 'Operation failed' });
    }
}
