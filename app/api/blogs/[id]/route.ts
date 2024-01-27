import { deletePostById, getPostById, updatePostById } from "@/lib/data";
import { errorHandler, notFoundHandler, successHandler } from "@/utils/handlers";

interface IRequestParams {
    id: string
};

export async function GET(req: Request, { params }: { params: IRequestParams } , res: Response) {
    try {
        const id = params.id.trim();
        const post = getPostById(id);
        if (post) {
            return successHandler(post);
        }
        return notFoundHandler(`Post with ID ${id} not found`);
    } catch (error) {
        return errorHandler(error as Error);
    }
};

export async function PUT(req: Request, { params }: { params: IRequestParams } , res: Response) {
    try {
        const id = params.id.trim();
        const reqBody = await req.json();
        const post = updatePostById(id, reqBody);
        if (post) {
            return successHandler(post);
        }
        return notFoundHandler(`Post with ID ${id} not found`);
    } catch (error) {
        return errorHandler(error as Error);
    }
};

export async function DELETE(req: Request, { params }: { params: IRequestParams } , res: Response) {
    try {
        const id = params.id.trim();
        const post = deletePostById(id);
        if (post) {
            return successHandler();
        }
        return notFoundHandler(`Post with ID ${id} not found`);
    } catch (error) {
        return errorHandler(error as Error);
    }
};