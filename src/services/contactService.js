// Integração futura com um serviço de formulários (ex.: Formspree, Getform,
// função serverless própria). Defina VITE_CONTACT_ENDPOINT no arquivo .env
// para ativar o envio. Sem essa variável, o formulário permanece demonstrativo.
const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

export const isContactServiceEnabled = Boolean(endpoint);

export async function sendContactMessage(data) {
  if (!isContactServiceEnabled) {
    throw new Error('Serviço de envio não configurado.');
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Falha no envio (status ${response.status}).`);
  }
}
