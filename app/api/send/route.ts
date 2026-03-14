import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Datos recibidos en la API:", body); // Esto aparecerá en tu terminal

    // Usamos los nombres que vienen de tu formulario
    const { nombre, email, asunto, mensaje } = body;

    const { data, error } = await resend.emails.send({
      from: 'Forestagro Web <onboarding@resend.dev>',
      to: ['nicomohr86@gmail.com'], // ASEGURATE QUE SEA TU MAIL DE REGISTRO
      subject: asunto || "Consulta desde la Web",
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>Nueva consulta de ${nombre}</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${mensaje}</p>
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