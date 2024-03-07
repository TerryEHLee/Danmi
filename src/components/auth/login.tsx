"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
<<<<<<< HEAD
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/validators/auth";
import { useForm } from "react-hook-form";
import React, { useState } from "react";

type LoginInput = z.infer<typeof loginSchema>;

export function Login() {
  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      name: "",
      password: "",
    },
  });

  function onSubmit(data: LoginInput) {
    form.trigger(["name", "password"]);

    const nameState = form.getFieldState("name");
    const passwordState = form.getFieldState("password");

    if (
      nameState.isDirty &&
      !nameState.invalid &&
      passwordState.isDirty &&
      !passwordState.invalid
    ) {
      alert(JSON.stringify(data, null, 4));
    }
  }

  return (
    <>
      <Card className="w-[380px] mt-10">
        <CardContent className="mt-7">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="relative space-y-3 overflow-x-hidden"
            >
              <div className="grid w-full items-center gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="이름을 입력하세요" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="비밀번호를 입력하세요"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex items-center">
          <Button
            variant="outline"
            type="submit"
            onClick={() => onSubmit(form.getValues())}
          >
            로그인
          </Button>
        </CardFooter>
      </Card>
    </>
  );
=======

export function Login() {
  return <>Login</>;
>>>>>>> bb459a2 (for change branch)
}
