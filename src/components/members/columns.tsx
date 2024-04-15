/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useState, useEffect } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Value } from "@radix-ui/react-select";
import { Input } from "@/components/ui/input";

export type Member = {
  id: string;
  name: string;
  phone: string;
  password: string; //생년월일
  mainTutor: string;
  type: "admin" | "tutor" | "member";
  credit: 0;
  // role: "회원" | "만료회원" | "강사";
  // joinDate: string;
  // endDate: string;
  // remainClass: string;
  // history: string;
};

interface ColumnsProps {
  setSelectedRole: React.Dispatch<React.SetStateAction<string>>;
}

export const columns: ColumnDef<Member>[] = [
  {
    accessorKey: "role",
    header: "구분",
  },
  {
    accessorKey: "name",
    header: "이름",
  },
  {
    accessorKey: "phone",
    header: "전화번호",
  },
  {
    accessorKey: "remainClass",
    header: "잔여수업",
  },
  {
    accessorKey: "tutor",
    header: "담당강사",
  },
  {
    accessorKey: "joinDate",
    header: "등록일",
  },
  {
    accessorKey: "endDate",
    header: "만료일",
  },
  {
    accessorKey: "history",
    header: "히스토리",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;
      const [selectedRole, setSelectedRole] = useState("");
      const [coupon, setCoupon] = useState("");
      const [point, setPoint] = useState("");
      const [remainClass, setRemainClass] = useState("");
      const [isDialogOpen, setIsDialogOpen] = useState(false);

      const updateRole = (role: string) => {
        fetch(`http://localhost:7777/memberInfo/${payment.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ role }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("server", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      };

      const updateClass = () => {
        fetch(`http://localhost:7777/memberInfo/${payment.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ remainClass }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("server", data);
            setIsDialogOpen(false);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      };

      const handleCouponRegistration = () => {
        fetch(`http://localhost:7777/memberInfo/${payment.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ coupon }),
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log("server", data);
            setIsDialogOpen(false);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      };

      const handlePointRegistration = () => {
        fetch(`http://localhost:7777/memberInfo/${payment.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ point }),
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log("server", data);
            setIsDialogOpen(false);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      };

      const handleCouponChange = (event: any) => {
        setCoupon(event.target.value);
      };

      const handlePointChange = (event: any) => {
        setPoint(event.target.value);
      };

      const handleClassChange = (event: any) => {
        setRemainClass(event.target.value);
      };

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <Dialog>
                <DialogTrigger asChild>
                  <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                    회원상태변경
                  </DropdownMenuItem>
                </DialogTrigger>
                <DialogContent>
                  <Select
                    onValueChange={(value) => {
                      setSelectedRole(value);
                      updateRole(value);
                    }}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="상태변경" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="회원">회원</SelectItem>
                      <SelectItem value="만료회원">휴면회원</SelectItem>
                      <SelectItem value="강사">강사</SelectItem>
                    </SelectContent>
                  </Select>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                    회원권등록
                  </DropdownMenuItem>
                </DialogTrigger>
                <DialogContent>
                  <Input
                    placeholder="부여할 수업을 입력하세요"
                    onChange={handleClassChange}
                    value={remainClass}
                  />
                  <Button variant="outline" onClick={updateClass}>
                    회원권등록
                  </Button>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                    쿠폰등록
                  </DropdownMenuItem>
                </DialogTrigger>
                <DialogContent>
                  <Input
                    placeholder="부여할 쿠폰값을 입력하세요"
                    onChange={handleCouponChange}
                    value={coupon}
                  />
                  <Button variant="outline" onClick={handleCouponRegistration}>
                    쿠폰등록
                  </Button>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                    포인트부여
                  </DropdownMenuItem>
                </DialogTrigger>
                <DialogContent>
                  <Input
                    placeholder="부여할 포인트를 입력하세요"
                    onChange={handlePointChange}
                    value={point}
                  />
                  <Button variant="outline" onClick={handlePointRegistration}>
                    포인트부여
                  </Button>
                </DialogContent>
              </Dialog>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      );
    },
  },
];
