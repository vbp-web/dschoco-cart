import { supabase } from "@/integrations/supabase/client";

export const mongoAPI = {
  // Products
  async getAllProducts() {
    const { data, error } = await supabase.functions.invoke('products', {
      body: { method: 'GET_ALL' }
    });
    if (error) throw error;
    return data;
  },

  async getProductById(productId: string) {
    const { data, error } = await supabase.functions.invoke('products', {
      body: { method: 'GET_BY_ID', productId }
    });
    if (error) throw error;
    return data;
  },

  async getProductsByCategory(category: string) {
    const { data, error } = await supabase.functions.invoke('products', {
      body: { method: 'GET_BY_CATEGORY', productData: { category } }
    });
    if (error) throw error;
    return data;
  },

  async createProduct(productData: any) {
    const { data, error } = await supabase.functions.invoke('products', {
      body: { method: 'CREATE', productData }
    });
    if (error) throw error;
    return data;
  },

  async updateProduct(productId: string, productData: any) {
    const { data, error } = await supabase.functions.invoke('products', {
      body: { method: 'UPDATE', productId, productData }
    });
    if (error) throw error;
    return data;
  },

  async deleteProduct(productId: string) {
    const { data, error } = await supabase.functions.invoke('products', {
      body: { method: 'DELETE', productId }
    });
    if (error) throw error;
    return data;
  },

  // Orders
  async createOrder(orderData: any) {
    const { data, error } = await supabase.functions.invoke('orders', {
      body: { method: 'CREATE', orderData }
    });
    if (error) throw error;
    return data;
  },

  async getAllOrders() {
    const { data, error } = await supabase.functions.invoke('orders', {
      body: { method: 'GET_ALL' }
    });
    if (error) throw error;
    return data;
  },

  async getOrderById(orderId: string) {
    const { data, error } = await supabase.functions.invoke('orders', {
      body: { method: 'GET_BY_ID', orderId }
    });
    if (error) throw error;
    return data;
  },

  async updateOrderStatus(orderId: string, status: string) {
    const { data, error } = await supabase.functions.invoke('orders', {
      body: { method: 'UPDATE_STATUS', orderId, orderData: { status } }
    });
    if (error) throw error;
    return data;
  },

  async deleteOrder(orderId: string) {
    const { data, error } = await supabase.functions.invoke('orders', {
      body: { method: 'DELETE', orderId }
    });
    if (error) throw error;
    return data;
  },
};
