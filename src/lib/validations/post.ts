import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(3, "Title is required"),
  slug: z
    .string()
    .min(3, "Slug is required")
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use lowercase letters, numbers, and hyphens"),
  excerpt: z.string().min(10, "Excerpt must be at least 10 characters"),
  content: z.string().min(20, "Content must be at least 20 characters"),
  status: z.enum(["draft", "published", "archived"]),
  categoryId: z.string().uuid().optional().or(z.literal("")),
  coverImageUrl: z
    .string()
    .optional()
    .refine((v) => !v || v.startsWith("http"), "Must be a valid URL"),
  readTimeMin: z.coerce.number().int().min(1).max(120).optional(),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
});

export type PostFormInput = z.infer<typeof postSchema>;

export type PostActionState = {
  success: boolean;
  message: string;
  postId?: string;
  errors?: Partial<Record<keyof PostFormInput, string[]>>;
};

export const initialPostState: PostActionState = {
  success: false,
  message: "",
};
