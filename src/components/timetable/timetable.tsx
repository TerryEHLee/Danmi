"use client";
import React, { use, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { string } from "zod";

export default function Timetable() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [room, setRoom] = useState("");
  const [time, setTime] = useState(0);
  const [classAt, setClassAt] = useState("");
  async function createClass() {
    try {
      const response = await fetch("http://localhost:4000/classes", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("Authorization") ?? "",
        },
        body: JSON.stringify({ room, time, classAt }),
      });
      if (response.ok) {
        alert("수업 추가가 정상적으로 이루어졌습니다.");
      } else {
        alert("오류가 발생하였습니다.");
      }
      const result = response.json();
    } catch (error) {
      alert(error);
    }
  }

  function handleDateClick(arg: any): void {
    type Converter = {
      [key: string]: number;
    };
    const timeTableConverter: Converter = {
      "09:00:00": 1,
      "09:30:00": 2,
      "10:00:00": 3,
      "10:30:00": 4,
      "11:00:00": 5,
      "11:30:00": 6,
      "12:00:00": 7,
      "12:30:00": 8,
      "13:00:00": 9,
      "13:30:00": 10,
      "14:00:00": 11,
      "14:30:00": 12,
      "15:00:00": 13,
      "15:30:00": 14,
      "16:00:00": 15,
      "16:30:00": 16,
      "17:00:00": 17,
      "17:30:00": 18,
      "18:00:00": 19,
      "18:30:00": 20,
      "19:00:00": 21,
      "19:30:00": 22,
      "20:00:00": 23,
      "20:30:00": 24,
      "21:00:00": 25,
      "21:30:00": 26,
      "22:00:00": 27,
      "22:30:00": 28,
    };

    const dateString = arg.dateStr.split("T");
    const timeString: string = dateString[1].split("+")[0];
    setTime(timeTableConverter[timeString]);
    setClassAt(dateString[0] + "T00:00:00Z");
    setModalIsOpen(true);
  }

  return (
    <div className="calendar-container" style={{ zIndex: -1 }}>
      <FullCalendar
        plugins={[
          resourceTimelinePlugin,
          dayGridPlugin,
          interactionPlugin,
          timeGridPlugin,
        ]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "timeGridWeek,dayGridMonth",
        }}
        initialView="timeGridWeek"
        dateClick={handleDateClick}
        nowIndicator={true}
        editable={true}
        selectable={true}
        selectMirror={true}
        slotMinTime="09:00:00"
        slotMaxTime="23:00:00"
        allDaySlot={false}
        contentHeight="auto"
      />

      {modalIsOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 199,
          }}
        >
          <Card
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              overflow: "visible",
            }}
          >
            <CardHeader>
              <CardTitle>New Class</CardTitle>
            </CardHeader>
            <CardContent>
              <Select
                onValueChange={(value) => {
                  setRoom(value);
                }}
                value={room}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Room" />
                </SelectTrigger>
                <SelectContent style={{ zIndex: 10000 }}>
                  <SelectItem value="privateRoom">Private</SelectItem>
                  <SelectItem value="chairRoom">Chair</SelectItem>
                  <SelectItem value="combiRoom">Combi</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
            <CardFooter>
              <Button onClick={() => createClass()}> Create </Button>
              <Button variant="secondary" onClick={() => setModalIsOpen(false)}>
                Close
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
}
