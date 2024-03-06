import { ComboboxDemo } from "@/components/comboBox";
import { Member, columns } from "@/components/members/columns";
import { DataTable } from "@/components/members/data-table";

async function getData(): Promise<Member[]> {
  // Fetch data from your API here.
  return [
    {
      id: "a001",
      name: "회원0",
      status: "회원",
      joinDate: "03.13",
      classDay: "화, 목",
      remainClass: "개인:1, 그룹:10",
      tutor: "원장님",
      phoneNumber: "01012345656",
      history: "03.13. 화 19:00 원장님 chairroom 그룹",
    },
  ];
}

const member = async () => {
  const data = await getData();

  return (
    <>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
      <div>회원관리</div>
    </>
  );
};

export default member;
