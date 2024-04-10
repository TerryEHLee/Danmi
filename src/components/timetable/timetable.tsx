"use client";
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import timeGridPlugin from "@fullcalendar/timegrid";
import Modal from "react-modal";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { set } from "date-fns";
import { AlignJustify } from "lucide-react";

export default function Timetable() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="calendar-container">
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
        // slotDuration="01:00:00"

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
            zIndex: 9999,
          }}
        >
          <Card
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
          >
            <CardHeader>
              <CardTitle>Hello</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Some description here...</CardDescription>
            </CardContent>
            <CardFooter>
              <button onClick={() => setModalIsOpen(false)}>Close</button>
            </CardFooter>
          </Card>
        </div>
      )}

      {/* <Modal
        isOpen={modalIsOpen}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            position: "absolute",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
          },
        }}
        onRequestClose={() => setModalIsOpen(false)}
            >
        <h2>Hello</h2>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
            </Modal> */}
    </div>
  );
}
