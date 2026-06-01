"use client";

import { useActionState, useEffect, useState } from "react";
import Link from "next/link";
import { createPost, updatePost } from "@/app/actions/posts";
import { initialPostState } from "@/lib/validations/post";
import { ImageUpload } from "@/components/admin/image-upload";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { buttonVariants } from "@/components/ui/button";
import { slugify } from "@/lib/utils/slugify";
import { cn } from "@/lib/utils/cn";
import type { PostActionState } from "@/lib/validations/post";

export type PostFormData = {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  status: "draft" | "published" | "archived";
  categoryId: string;
  coverImageUrl: string;
  readTimeMin: number;
  metaTitle: string;
  metaDescription: string;
};

type Category = { id: string; name: string };

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1 text-sm text-red-600" role="alert">
      {message}
    </p>
  );
}

export function PostForm({
  post,
  categories,
  mode,
}: {
  post?: PostFormData;
  categories: Category[];
  mode: "create" | "edit";
}) {
  const boundUpdate = post?.id
    ? updatePost.bind(null, post.id)
    : undefined;

  const [state, action, pending] = useActionState(
    mode === "create" ? createPost : boundUpdate!,
    initialPostState,
  );

  const [title, setTitle] = useState(post?.title ?? "");
  const [slug, setSlug] = useState(post?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(Boolean(post?.slug));

  useEffect(() => {
    if (!slugTouched && title) {
      setSlug(slugify(title));
    }
  }, [title, slugTouched]);

  return (
    <form action={action} className="space-y-6 rounded-xl border border-neutral-200 bg-white p-6 md:p-8">
      {state.message && mode === "edit" ? (
        <p
          role="status"
          className={cn(
            "rounded-lg px-4 py-3 text-sm",
            state.success
              ? "bg-forest/10 text-forest"
              : "bg-red-50 text-red-700",
          )}
        >
          {state.message}
        </p>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2">
        <div className="md:col-span-2">
          <Label htmlFor="title">Title *</Label>
          <Input
            id="title"
            name="title"
            variant="light"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={pending}
            className="mt-1.5"
          />
          <FieldError message={state.errors?.title?.[0]} />
        </div>

        <div>
          <Label htmlFor="slug">Slug *</Label>
          <Input
            id="slug"
            name="slug"
            variant="light"
            required
            value={slug}
            onChange={(e) => {
              setSlugTouched(true);
              setSlug(e.target.value);
            }}
            disabled={pending}
            className="mt-1.5"
          />
          <FieldError message={state.errors?.slug?.[0]} />
        </div>

        <div>
          <Label htmlFor="status">Status *</Label>
          <select
            id="status"
            name="status"
            defaultValue={post?.status ?? "draft"}
            disabled={pending}
            className="mt-1.5 h-12 w-full rounded-xl border border-neutral-200 bg-white px-4 text-sm"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="archived">Archived</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="excerpt">Excerpt *</Label>
          <Textarea
            id="excerpt"
            name="excerpt"
            variant="light"
            required
            defaultValue={post?.excerpt}
            disabled={pending}
            className="mt-1.5 min-h-[80px]"
          />
          <FieldError message={state.errors?.excerpt?.[0]} />
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="content">Content *</Label>
          <p className="text-xs text-muted">Separate paragraphs with a blank line.</p>
          <Textarea
            id="content"
            name="content"
            variant="light"
            required
            defaultValue={post?.content}
            disabled={pending}
            className="mt-1.5 min-h-[240px] font-mono text-sm"
          />
          <FieldError message={state.errors?.content?.[0]} />
        </div>

        <div>
          <Label htmlFor="categoryId">Category</Label>
          <select
            id="categoryId"
            name="categoryId"
            defaultValue={post?.categoryId ?? ""}
            disabled={pending}
            className="mt-1.5 h-12 w-full rounded-xl border border-neutral-200 bg-white px-4 text-sm"
          >
            <option value="">None</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor="readTimeMin">Read time (minutes)</Label>
          <Input
            id="readTimeMin"
            name="readTimeMin"
            type="number"
            min={1}
            variant="light"
            defaultValue={post?.readTimeMin ?? ""}
            placeholder="Auto"
            disabled={pending}
            className="mt-1.5"
          />
        </div>

        <div className="md:col-span-2">
          <ImageUpload
            defaultUrl={post?.coverImageUrl ?? ""}
          />
        </div>

        <div>
          <Label htmlFor="metaTitle">SEO title</Label>
          <Input
            id="metaTitle"
            name="metaTitle"
            variant="light"
            defaultValue={post?.metaTitle}
            disabled={pending}
            className="mt-1.5"
          />
        </div>

        <div>
          <Label htmlFor="metaDescription">SEO description</Label>
          <Input
            id="metaDescription"
            name="metaDescription"
            variant="light"
            defaultValue={post?.metaDescription}
            disabled={pending}
            className="mt-1.5"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-3 border-t border-neutral-100 pt-6">
        <button
          type="submit"
          disabled={pending}
          className={cn(buttonVariants({ variant: "dark", size: "lg" }))}
        >
          {pending
            ? "Saving…"
            : mode === "create"
              ? "Create post"
              : "Save changes"}
        </button>
        <Link
          href="/admin/posts"
          className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "text-forest")}
        >
          Cancel
        </Link>
        {mode === "edit" && post?.slug && post.status === "published" ? (
          <Link
            href={`/insights/${post.slug}`}
            target="_blank"
            className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "text-forest")}
          >
            View live →
          </Link>
        ) : null}
      </div>

      {state.message && mode === "create" && !state.success ? (
        <p className="text-sm text-red-600">{state.message}</p>
      ) : null}
    </form>
  );
}
