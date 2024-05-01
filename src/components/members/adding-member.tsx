"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
import { z } from "zod";
import { registerSchema } from "@/validators/auth";
import React, { useState } from "react";

export function AddMember({ onClose }: { onClose: () => void }) {
  const [showTutorForm, setShowTutorForm] = useState(false);

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("member");
  const [mainTutor, setMainTutor] = useState("");
  const [credit, setCredit] = useState(0);
  const [confirm, setConfirm] = useState("");

  async function onSubmit() {
    try {
      registerSchema.parse({
        id,
        password,
        name,
        phone,
        type,
        mainTutor,
        credit,
      });

      if (password !== confirm) {
        alert("비밀번호와 확인 비밀번호가 일치하지 않습니다.");
        setConfirm("");
        return;
      }
      const response = await fetch("http://localhost:4000/users/signup", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("Authorization") ?? "",
        },
        body: JSON.stringify({
          id,
          password,
          name,
          phone,
          type,
          mainTutor,
          credit,
        }),
      });
      if (response.ok) {
        alert("회원 가입이 정상적으로 이루어졌습니다.");
        onCancel();
      } else {
        alert("오류가 발생하였습니다.");
      }
      const result = response.json();
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach((err) => {
          alert(err.message);
        });
      }
    }
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
          <div className="relative space-y-3 overflow-x-hidden">
            <div className="grid w-full items-center gap-4">
              <Input
                placeholder="아이디를 입력하세요"
                value={id}
                onChange={(e) => {
                  setId(e.target.value);
                }}
              />
              <Input
                type="password"
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Input
                type="password"
                placeholder="확인 비밀번호를 입력하세요"
                value={confirm}
                onChange={(e) => {
                  setConfirm(e.target.value);
                }}
              />
              <Input
                placeholder="이름을 입력하세요"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <Input
                placeholder="전화번호를 입력하세요"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />

              <Label>역할</Label>
              <Select
                onValueChange={(value) => {
                  setShowTutorForm(value === "회원");
                  setType(value);
                }}
                defaultValue={type}
                value={type}
              >
                <SelectTrigger>
                  <SelectValue placeholder="역할을 선택해주세요" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="member">회원</SelectItem>
                  <SelectItem value="tutor">강사</SelectItem>
                </SelectContent>
              </Select>

              {showTutorForm && (
                <>
                  <Label>강사</Label>
                  <Select
                    value={mainTutor}
                    defaultValue={mainTutor}
                    onValueChange={(value) => {
                      setMainTutor(value);
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="강사를 선택해주세요" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="이연지T">이연지T</SelectItem>
                      <SelectItem value="이은지T">이은지T</SelectItem>
                    </SelectContent>
                  </Select>
                </>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={onCancel}>
            취소
          </Button>
          <Button
            onClick={() => {
              onSubmit();
            }}
          >
            등록
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
