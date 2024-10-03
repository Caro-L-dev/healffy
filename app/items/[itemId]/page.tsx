"use client";

import { User } from "lucide-react";

import { useForm } from "react-hook-form";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { CATEGORIES } from "@/lib/data/categories";

import { getId } from "@/lib/id";
import { setItem } from "@/lib/items/set-item";
import { useUserStore } from "@/lib/store/use-user-store";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { StrongText } from "@/components/common/title/StrongText";
import { Wrapper } from "@/components/common/wrapper/Wrapper";
import { ImageInput } from "@/components/features/images/image-input";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  id: z.string().min(2).max(50).optional(),
  name: z.string().min(2).max(50),
  category: z.string().min(2).max(50),
  price: z.coerce.number().min(0).max(1000),
  image: z.any(),
});
export default function ItemIdPage() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  const isAdmin = useUserStore((s) => s.isAdmin);
  const router = useRouter();
  function onSubmit(values) {
    setItem(getId(values.name), {
      name: values.name,
      price: values.price * 100,
      category: values.category,
      image: values.image,
    });
    router.push("/");
  }
  if (!isAdmin) {
    return (
      <Alert>
        <User size={12} />
        <AlertTitle>
          Vous n&apos;êtes pas autorisé à consulter cette page.
        </AlertTitle>
        <AlertDescription>Seuls les admins sont autorisés.</AlertDescription>
      </Alert>
    );
  }
  return (
    <Wrapper>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 space-y-4">
          <StrongText>Ajouter un nouveau produit :</StrongText>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Categorie</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez une catégorie" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {CATEGORIES.map((category) => (
                      <SelectItem value={category.id} key={category.id}>
                        <div className="flex items-center gap-2">
                          <Image
                            src={category.logo}
                            width={24}
                            height={24}
                            alt={category.title}
                          />
                          <span>{category.title}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prix</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="22.2" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <ImageInput value={field.value} onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="w-full"
            disabled={form.formState.isSubmitting}
            type="submit"
          >
            Ajouter au catalogue
          </Button>
        </form>
      </Form>
    </Wrapper>
  );
}
