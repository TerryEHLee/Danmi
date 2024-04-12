"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Member, columns } from "@/components/members/columns";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { registerSchema } from "@/validators/auth";
import { useForm } from "react-hook-form";
import React, { useState } from "react";

type RegisterInput = z.infer<typeof registerSchema>;

export function AddMember({
  onClose,
  setSelectedRole,
}: {
  onClose: () => void;
  setSelectedRole: React.Dispatch<React.SetStateAction<String>>;
}) {
  const form = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      phone: "",
      role: "",
      name: "",
      birthday: "",
      gender: "",
      tutor: "",
      joinDate: "",
      endDate: "",
      remainClass: "",
      history: "",
    },
  });

  const [showTutorForm, setShowTutorForm] = useState(false);
  const [members, setMembers] = useState<Member[]>([]);
  const [isBtnClicked, setIsBtnClicked] = useState(false);

  function onSubmit(data: RegisterInput) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch("http://localhost:7777/memberInfo", options)
      .then((resp) => resp.json())
      .then((result) => {
        const lastid = result.id;
        setMembers([...members, data]);
        onClose();
        setIsBtnClicked(false);
      });
  }

  function onCancel() {
    onClose();
  }

  return (
    <>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>회원 추가</CardTitle>
        </CardHeader>
        <CardContent>
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
                      <FormLabel>이름</FormLabel>
                      <FormControl>
                        <Input placeholder="이름을 입력하세요" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>전화번호</FormLabel>
                      <FormControl>
                        <Input placeholder="전화번호를 입력하세요" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="birthday"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>생년월일</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="생년월일을 입력하세요(000000)"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>성별</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="성별을 선택해주세요" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="female">남성</SelectItem>
                          <SelectItem value="male">여성</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>역할</FormLabel>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value);
                          setSelectedRole(value);
                          setShowTutorForm(value === "회원");
                        }}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="역할을 선택해주세요" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="회원">회원</SelectItem>
                          <SelectItem value="강사">강사</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {showTutorForm && (
                  <FormField
                    control={form.control}
                    name="tutor"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>강사</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="강사를 선택해주세요" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="이연지T">이연지T</SelectItem>
                            <SelectItem value="이은지T">이은지T</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={onCancel}>
            취소
          </Button>
          <Button
            onClick={() => {
              form.trigger([
                "phone",
                "birthday",
                "name",
                "role",
                "gender",
                "tutor",
              ]);

              const phoneState = form.getFieldState("phone");
              const birthdayState = form.getFieldState("birthday");
              const nameState = form.getFieldState("name");
              const roleState = form.getFieldState("role");
              const genderState = form.getFieldState("gender");
              const joinDateState = "";

              if (!phoneState.isDirty || phoneState.invalid) return;
              if (!birthdayState.isDirty || birthdayState.invalid) return;
              if (!nameState.isDirty || nameState.invalid) return;
              if (!roleState.isDirty || roleState.invalid) return;
              if (!genderState.isDirty || genderState.invalid) return;

              const formData = form.getValues();
              onSubmit(formData);
            }}
          >
            등록
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
