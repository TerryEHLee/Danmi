"use client";

import { ColumnDef } from "@tanstack/react-table";

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
];
