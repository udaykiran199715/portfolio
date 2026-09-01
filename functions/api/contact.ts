import { Resend } from "resend";

interface Env {
  RESEND_API_KEY: string;
  CONTACT_TO_EMAIL: string;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const { name, email, message } = await request.json<{
    name?: string;
    email?: string;
    message?: string;
  }>();

  if (!name || !email || !message) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  // ponytail: no rate limiting, add Cloudflare Turnstile + KV-based throttling if spam shows up

  const resend = new Resend(env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: env.CONTACT_TO_EMAIL,
    replyTo: email,
    subject: `New message from ${name}`,
    html: `<p>${message}</p><p>From: ${name} &lt;${email}&gt;</p>`,
  });

  if (error) {
    return Response.json({ error: "Failed to send" }, { status: 502 });
  }

  return Response.json({ ok: true });
};
