"use client";

import { Member, columns } from "@/components/members/columns";
import { DataTable } from "@/components/members/data-table";
import { Button } from "@/components/ui/button";
import { AddMember } from "@/components/members/adding-member";
import React, { useEffect, useState } from "react";

async function getData(): Promise<Member[]> {
  // Fetch data from your API here.
  return [
    {
      id: "a001",
      name: "은은한",
      status: "회원",
      joinDate: "03.13",
      endDate: "12.13",
      remainClass: "개인:1, 그룹:10",
      tutor: "이연지T",
      phoneNumber: "01012345656",
      history: "03.13. 화 19:00 이연지T chair 그룹",
    },
  ];
}

const member = () => {
  const [data, setData] = useState<Member[]>([]);
  const [isBtnClicked, setIsBtnClicked] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
    }
    fetchData();
  }, []);

  function closeModal() {
    setIsBtnClicked(false);
  }

  return (
    <>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
      <div className="container mx-auto py-10">
        <Button variant="outline" onClick={() => setIsBtnClicked(true)}>
          회원추가
        </Button>
      </div>
      <div className="fixed top-1/2 left-1/2 transform-translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg">
        {isBtnClicked && <AddMember onClose={closeModal} />}
      </div>
    </>
  );
};

export default member;
