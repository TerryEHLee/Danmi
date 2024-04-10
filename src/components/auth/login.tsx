"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

  const loginHandler = async (name: string, password: string) => {
    try {
      const response = await fetch("http://localhost:4000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: "http://localhost:3000",
        },
        body: JSON.stringify({
          id: name,
          password: password,
        }),
      });

      if (response.ok) {
        alert("로그인 성공!");
      } else {
        alert("이름 또는 비밀번호가 일치하지 않습니다.");
      }
    } catch (error) {
      console.error("로그인 에러:", error);
      alert("로그인 중 오류가 발생했습니다.");
    }
  };

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
      loginHandler(data.name, data.password);
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
}
