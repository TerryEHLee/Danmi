"use client";
import React, { useState } from "react";
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

export default function Timetable() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
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

      {selectedValue && <div className="selected-value">{selectedValue}</div>}
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
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="ClassForm" />
                </SelectTrigger>
                <SelectContent style={{ zIndex: 10000 }}>
                  <SelectItem value="privateClass">Private</SelectItem>
                  <SelectItem value="duetClass">Duet</SelectItem>
                  <SelectItem value="groupClass">Grop</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Teacher" />
                </SelectTrigger>
                <SelectContent style={{ zIndex: 10000 }}>
                  <SelectItem value="yj">연지T</SelectItem>
                  <SelectItem value="ej">은지T</SelectItem>
                </SelectContent>
              </Select>

              <Select>
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
              <Button> Create </Button>
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
