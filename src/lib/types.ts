import { z } from "zod";

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string().min(2, "Name must be at least 2 characters string"),
  slug: z.string(),
  description: z.string(),
  price: z.number().positive(),
  imageUrl: z.string().url(),
  categoryId: z.string(),
  isPopular: z.boolean().default(false),
});

export type Product = z.infer<typeof ProductSchema>;

export const CategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  description: z.string().nullable(),
});

export type Category = z.infer<typeof CategorySchema>;

export const OrderSchema = z.object({
  items: z.array(
    z.object({
      id: z.string(),
      quantity: z.number().int().positive(),
    })
  ).min(1, "Order must contain at least one item"),
  customerName: z.string().min(2, "Name required"),
  phone: z.string().min(8, "Valid phone number required"),
  instructions: z.string().optional(),
});

export type OrderInput = z.infer<typeof OrderSchema>;
