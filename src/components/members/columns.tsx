"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Member = {
  id: string;
  name: string;
  status: "회원" | "만료회원";
  joinDate: string;
  endDate: string;
  remainClass: string;
  tutor: "이연지T" | "이은지T";
  phoneNumber: string;
  history: string;
};

export const columns: ColumnDef<Member>[] = [
  {
    accessorKey: "status",
    header: "구분",
  },
  {
    accessorKey: "name",
    header: "이름",
  },
  {
    accessorKey: "phoneNumber",
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
