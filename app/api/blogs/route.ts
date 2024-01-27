import { createHandler, errorHandler, successHandler } from "@/utils/handler";
import { addPost, getPosts } from "@/lib/data";

export async function GET(req: Request, res: Response) {
    try {
        const posts = getPosts();
        return successHandler(posts);
    } catch (error) {
        return errorHandler(error as Error);
    }
}

export async function POST(req: Request, res: Response) {
    try {
        const reqBody = await req.json();
        const post = addPost(reqBody);
        return createHandler(post);
    } catch (error) {
        return errorHandler(error as Error);
    }
}
