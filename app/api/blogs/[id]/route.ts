import { getPostById, updatePostById } from "@/lib/data";
import { NextResponse } from "next/server";
import  errorHandler  from "@/utils/errorHandler";

export async function GET(req: Request, res: Response) {
    try {
        const id = req.url.split(`blogs/`)[1];
        const post = getPostById(id);
        if (post) {
            return NextResponse.json({ message: `OK`, post }, {
            status: 200
         });
        }
        return NextResponse.json({ message: `Post with ID ${id} not found` }, {
            status: 404
        });
    } catch (error) {
        errorHandler(error as Error);
    }
};

export async function PUT(req: Request, res: Response) {
    try {
        const id = req.url.split(`blogs/`)[1];
        const reqBody = await req.json();
        const post = updatePostById(id, reqBody);
        if (post) {
            return NextResponse.json({ message: `OK`, post }, {
            status: 200
         });
        }
        return NextResponse.json({ message: `Post with ID ${id} not found` }, {
            status: 404
        });
    } catch (error) {
        errorHandler(error as Error);
    }
};