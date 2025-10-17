import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { MongoClient, ObjectId } from "https://deno.land/x/mongo@v0.32.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const mongoUri = Deno.env.get('MONGODB_URI');
    if (!mongoUri) {
      throw new Error('MongoDB URI not configured');
    }

    const client = new MongoClient();
    await client.connect(mongoUri);
    
    const db = client.database('dchocobliss');
    const orders = db.collection('orders');

    const { method, orderId, orderData } = await req.json();

    let result;

    switch (method) {
      case 'CREATE':
        const newOrder = {
          ...orderData,
          createdAt: new Date(),
          status: 'pending',
        };
        result = await orders.insertOne(newOrder);
        break;

      case 'GET_ALL':
        result = await orders.find({}).sort({ createdAt: -1 }).toArray();
        break;

      case 'GET_BY_ID':
        result = await orders.findOne({ _id: new ObjectId(orderId) });
        break;

      case 'UPDATE_STATUS':
        result = await orders.updateOne(
          { _id: new ObjectId(orderId) },
          { $set: { status: orderData.status } }
        );
        break;

      case 'DELETE':
        result = await orders.deleteOne({ _id: new ObjectId(orderId) });
        break;

      default:
        throw new Error('Invalid method');
    }

    client.close();

    return new Response(JSON.stringify({ success: true, data: result }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in orders function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
