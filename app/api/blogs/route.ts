import { addPost, getPosts } from "@/lib/data";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: Response) {
    try {
        const posts = getPosts();
        return NextResponse.json({ message: `OK`, posts }, {
            status: 200
        });
    } catch (error) {
        return NextResponse.json({ message: `Internal server error`, error }, {
            status: 500
        });
    }
}

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const reqJson = await req.json();
        const post = addPost(reqJson);
        return NextResponse.json({ message: `OK`, post }, {
            status: 201
        });
    } catch (error) {
        return NextResponse.json({ message: `Internal server error`, error }, {
            status: 500
        });
    }
}
