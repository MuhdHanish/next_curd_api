import { NextResponse } from "next/server";
import { addPost, getPosts } from "@/lib/data";
import  errorHandler  from "@/utils/errorHandler";

export async function GET(req: Request, res: Response) {
    try {
        const posts = getPosts();
        return NextResponse.json({ message: `OK`, posts }, {
            status: 200
        });
    } catch (error) {
        errorHandler(error as Error);
    }
}

export async function POST(req: Request, res: Response) {
    try {
        const reqJson = await req.json();
        const post = addPost(reqJson);
        return NextResponse.json({ message: `OK`, post }, {
            status: 201
        });
    } catch (error) {
        errorHandler(error as Error);
    }
}
