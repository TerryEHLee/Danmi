import React, { useState } from "react";
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

export type Member = {
  id: string;
  username: string;
  birthday: string;
  role: "회원" | "만료회원" | "강사";
  joinDate: string;
  endDate: string;
  remainClass: string;
  tutor: "이연지T" | "이은지T";
  phone: string;
  history: string;
};

export const columns: ColumnDef<Member>[] = [
  {
    accessorKey: "role",
    header: "구분",
  },
  {
    accessorKey: "username",
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
                <DialogContent>ㅇㅇ</DialogContent>
              </Dialog>

              <DropdownMenuItem>회원권등록</DropdownMenuItem>
              <DropdownMenuItem>쿠폰등록</DropdownMenuItem>
              <DropdownMenuItem>포인트등록</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      );
    },
  },
];
