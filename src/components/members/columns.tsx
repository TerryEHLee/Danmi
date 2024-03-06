"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Member = {
  id: string;
  name: string;
  status: "회원" | "만료회원";
  joinDate: string;
  classDay: string;
  remainClass: string;
  tutor: "원장님" | "은지T";
  phoneNumber: string;
  history: string;
};

export const columns: ColumnDef<Member>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "name",
    header: "이름",
  },
  {
    accessorKey: "remainClass",
    header: "잔여수업",
  },
  {
    accessorKey: "tutor",
    header: "담당선생님",
  },
  {
    accessorKey: "classDay",
    header: "수업일",
  },
  {
    accessorKey: "joinDate",
    header: "등록날짜",
  },
  {
    accessorKey: "phoneNumber",
    header: "number",
  },
  {
    accessorKey: "history",
    header: "히스토리",
  },
];
