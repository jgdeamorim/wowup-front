import { draftMode } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    // Desabilitar o Draft Mode
    const draft = draftMode();
    draft.disable();

    // Obter URL de redirecionamento
    const { searchParams } = new URL(request.url);
    const redirectUrl = searchParams.get('redirect') || '/';
    
    // Validar URL de redirecionamento
    let redirectTo: string;
    try {
      const url = new URL(redirectUrl, request.url);
      redirectTo = url.pathname + url.search;
    } catch {
      redirectTo = '/';
    }
    
    // Redirecionar com Draft Mode desabilitado
    return NextResponse.redirect(new URL(redirectTo, request.url));
  } catch (error) {
    console.error('Error disabling draft mode:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
