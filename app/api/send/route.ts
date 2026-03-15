import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nombre, email, asunto, mensaje } = body;

    const { data, error } = await resend.emails.send({
      from: 'Forestagro Web <onboarding@resend.dev>',
      // Cambiamos a la casilla de Mariano únicamente
      to: ['forestagro.contacto@gmail.com'], 
      subject: `🌳 Nueva Consulta: ${asunto || "General"}`,
      replyTo: email,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
          <div style="background-color: #166534; padding: 25px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Nueva Consulta Web</h1>
          </div>
          <div style="padding: 30px; background-color: #ffffff;">
            <p style="font-size: 16px; color: #475569;">Has recibido un nuevo mensaje desde el formulario de contacto:</p>
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #166534;">
              <p style="margin: 0 0 10px 0;"><strong>Nombre:</strong> ${nombre}</p>
              <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 0 0 10px 0;"><strong>Asunto:</strong> ${asunto}</p>
              <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 15px 0;" />
              <p style="margin: 0 0 10px 0;"><strong>Mensaje:</strong></p>
              <p style="color: #1e293b; line-height: 1.6; white-space: pre-wrap; margin: 0;">${mensaje}</p>
            </div>
            <a href="mailto:${email}" style="display: inline-block; background-color: #166534; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; margin-top: 10px;">
              Responder al cliente
            </a>
          </div>
          <div style="background-color: #f1f5f9; padding: 15px; text-align: center; font-size: 12px; color: #64748b;">
            Este es un mensaje automático enviado desde forestagro.com.ar
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Error de Resend:", error);
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error crítico en la API:", error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}