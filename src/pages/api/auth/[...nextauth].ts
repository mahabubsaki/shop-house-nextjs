import NextAuth from 'next-auth';

import GoogleProvider from "next-auth/providers/google";

import { NextApiRequest, NextApiResponse } from "next";

const options = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        }),
    ],
    // Add any additional options here
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);