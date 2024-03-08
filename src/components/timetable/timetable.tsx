"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import timeGridPlugin from "@fullcalendar/timegrid";

export default function Timetable() {
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
        // resources={[
        //   { id: "a", title: "Auditorium A" },
        //   { id: "b", title: "Auditorium B", eventColor: "green" },
        //   { id: "c", title: "Auditorium C", eventColor: "orange" },
        // ]}
        initialEvents={[
          { title: "nice event", start: new Date(), resourceId: "a" },
        ]}
      />
    </div>
  );
}
