
import React from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  DragAndDrop,
  Resize
} from "@syncfusion/ej2-react-schedule";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { MultiSelectComponent } from " ";

export default function App() {
  let data = [
    {
      Id: "3oui8lvblatvv8dn0mqsssri7c",
      Subject: "Meeting",
      StartTime: new Date(2022, 1, 15, 10, 0),
      EndTime: new Date(2022, 1, 15, 12, 30),
      IsAllDay: false,
      Status: "Completed",
      Priority: "High"
    }
  ];
  let ownerData = [
    { OwnerText: "Nancy", Id: 1, OwnerColor: "#ffaa00" },
    { OwnerText: "Steven", Id: 2, OwnerColor: "#f8a398" },
    { OwnerText: "Michael", Id: 3, OwnerColor: "#7499e1" }
  ];
  let fields = { text: "OwnerText", value: "Id" };

  function onActionComplete(args) {
    if (args.requestType === "eventCreated") {
      console.log(args.addedRecords[0]);
    }
  }
  function editorTemplate(props) {
    return props !== undefined && Object.keys(props).length > 0 ? (
      <table
        className="custom-event-editor"
        style={{ width: "100%", padding: "5" }}
      >
        <tbody>
          <tr>
            <td className="e-textlabel">Summary</td>
            <td colSpan={4}>
              <input
                id="Summary"
                className="e-field e-input"
                type="text"
                name="Subject"
                style={{ width: "100%" }}
              />
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">Owner</td>
            <td colSpan={4}>
              <MultiSelectComponent
                className="e-field"
                placeholder="Choose owner"
                data-name="OwnerId"
                dataSource={ownerData}
                fields={fields}
                value={ownerData.OwnerId}
              />
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">From</td>
            <td colSpan={4}>
              <DateTimePickerComponent
                format="dd/MM/yy hh:mm a"
                id="StartTime"
                data-name="StartTime"
                value={new Date(props.startTime || props.StartTime)}
                className="e-field"
              ></DateTimePickerComponent>
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">To</td>
            <td colSpan={4}>
              <DateTimePickerComponent
                format="dd/MM/yy hh:mm a"
                id="EndTime"
                data-name="EndTime"
                value={new Date(props.endTime || props.EndTime)}
                className="e-field"
              ></DateTimePickerComponent>
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">Reason</td>
            <td colSpan={4}>
              <textarea
                id="Description"
                className="e-field e-input"
                name="Description"
                rows={3}
                cols={50}
                style={{
                  width: "100%",
                  height: "60px !important",
                  resize: "vertical"
                }}
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table>
    ) : (
      <div></div>
    );
  }

  return (
    <div>
      <div className="calendar">
        <ScheduleComponent
          height="550px"
          selectedDate={Date.now()}
          eventSettings={{ dataSource: data }}
          currentView="Month"
          actionComplete={onActionComplete}
          editorTemplate={editorTemplate}
        >
          <Inject
            services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]}
          />
        </ScheduleComponent>
      </div>
    </div>
  );
}
