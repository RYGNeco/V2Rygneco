import 'dotenv/config';

export function loadEnv() {
  const PORT = Number(process.env.PORT ?? 4000);
  const MONGO_URI = process.env.MONGO_URI || '';
  // if (!MONGO_URI) throw new Error('MONGO_URI is required');
  return { PORT, MONGO_URI };
}
