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
    const products = db.collection('products');

    const { method, productId, productData } = await req.json();

    let result;

    switch (method) {
      case 'GET_ALL':
        result = await products.find({}).toArray();
        break;

      case 'GET_BY_ID':
        result = await products.findOne({ _id: new ObjectId(productId) });
        break;

      case 'GET_BY_CATEGORY':
        const { category } = productData;
        result = await products.find({ category }).toArray();
        break;

      case 'CREATE':
        result = await products.insertOne(productData);
        break;

      case 'UPDATE':
        result = await products.updateOne(
          { _id: new ObjectId(productId) },
          { $set: productData }
        );
        break;

      case 'DELETE':
        result = await products.deleteOne({ _id: new ObjectId(productId) });
        break;

      default:
        throw new Error('Invalid method');
    }

    client.close();

    return new Response(JSON.stringify({ success: true, data: result }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in products function:', error);
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
