import { user } from '@/util/db'; // Assuming user data is exported from '@/util/db'
import { NextResponse } from 'next/server';

export function GET(req, content) {
    const userData = user.filter((item) => item.id === content.params.id); // Corrected variable name and equality check
    return NextResponse.json(userData, { status: 200 });
}
