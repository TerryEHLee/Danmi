"use client";

import { Member, columns } from "@/components/members/columns";
import { DataTable } from "@/components/members/data-table";
import { Button } from "@/components/ui/button";
import { AddMember } from "@/components/members/adding-member";
import React, { useEffect, useState } from "react";

const MemberPage = () => {
  const [data, setData] = useState<Member[]>([]);
  const [isBtnClicked, setIsBtnClicked] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await fetch("http://localhost:7777/memberInfo");
        const memberInfo = await resp.json();
        setData(memberInfo);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [isBtnClicked]);

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

export default MemberPage;
