import { NextResponse } from 'next/server';

const errorHandler = (error: Error) => {
    console.error('Internal server error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ message: `Internal server error`,  error: errorMessage }, {
        status: 500
    });
};

export default errorHandler;