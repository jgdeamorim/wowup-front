import { draftMode } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    // Verificar se o token secreto foi fornecido
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get('secret');
    
    // Validar token secreto
    if (!secret) {
      return new NextResponse('Missing secret parameter', { status: 400 });
    }
    
    if (secret !== process.env.DRAFT_SECRET_TOKEN) {
      return new NextResponse('Invalid token', { status: 401 });
    }

    // Habilitar o Draft Mode
    const draft = draftMode();
    draft.enable();

    // Obter URL de redirecionamento
    const redirectUrl = searchParams.get('redirect') || '/';
    
    // Validar URL de redirecionamento
    let redirectTo: string;
    try {
      const url = new URL(redirectUrl, request.url);
      redirectTo = url.pathname + url.search;
    } catch {
      redirectTo = '/';
    }
    
    // Redirecionar com Draft Mode habilitado
    return NextResponse.redirect(new URL(redirectTo, request.url));
  } catch (error) {
    console.error('Error enabling draft mode:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

// Método POST para APIs que preferem POST
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { secret, redirect } = body;
    
    // Validar token secreto
    if (!secret) {
      return NextResponse.json({ error: 'Missing secret' }, { status: 400 });
    }
    
    if (secret !== process.env.DRAFT_SECRET_TOKEN) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    // Habilitar o Draft Mode
    const draft = draftMode();
    draft.enable();

    return NextResponse.json({ 
      message: 'Draft mode enabled successfully',
      enabled: true,
      redirect: redirect || '/'
    });
  } catch (error) {
    console.error('Error enabling draft mode:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}
