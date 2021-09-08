import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://nextjsuser:tG8axRtrjiBmpb8s@cluster0.wrscn.mongodb.net/auth-demo?retryWrites=true&w=majority',{ useUnifiedTopology: true }
  );

  return client;
}
