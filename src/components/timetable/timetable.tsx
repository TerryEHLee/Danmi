"use client";
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Badge } from "@/components/ui/badge";
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
import { z } from "zod";
import Modal from "react-modal";
import ReactSelect from "react-select";

export default function Timetable() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const options = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "system", label: "System" },
  ];
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
        nowIndicator={true}
        editable={true}
        selectable={true}
        selectMirror={true}
        slotMinTime="09:00:00"
        slotMaxTime="23:00:00"
        allDaySlot={false}
        contentHeight="auto"
        select={() => setModalIsOpen(true)}
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
              <Badge>수업형태: 1:1 | 2:1 | 4:1</Badge>
              <Badge>Teacher</Badge>
              <Badge>Room</Badge>

              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="수업형태" />
                </SelectTrigger>
                <SelectContent style={{ zIndex: 10000 }}>
                  <SelectItem value="light">private</SelectItem>
                  <SelectItem value="dark">duet</SelectItem>
                  <SelectItem value="system">Grop</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
            <CardFooter>
              <button onClick={() => setModalIsOpen(false)}>Close</button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
}
