import React from "react";
import { render } from "react-dom";
import Scheduler from "../src/scheduler";
import RangeDate from "../src/range_date";
import DateRange from "../src/date_range";
import { whyDidYouUpdate } from "why-did-you-update";

// Uncomment this to examine where you can get performance boosts
//whyDidYouUpdate(React);

var resources = [
    {
      id: "0",
      label: "Discovery",
      icon: "location_searching",
      color: "#72d4f9",
      tasks: 18,
      tasksComplete: 7
    },
    {
      id: "1",
      label: "Pre Production",
      icon: "speaker_notes",
      color: "#f98c71",
      tasks: 18,
      tasksComplete: 0
    },
    {
      id: "2",
      label: "Design UI/UX",
      icon: "view_quilt",
      color: "#f7b84f",
      tasks: 18,
      tasksComplete: 3
    },
    {
      id: "3",
      label: "Content Development",
      icon: "low_priority",
      color: "#a871f9",
      tasks: 18,
      tasksComplete: 4
    },
    {
      id: "4",
      label: "Engineering",
      icon: "code",
      color: "#a7e56d",
      tasks: 18,
      tasksComplete: 3
    },
    {
      id: "5",
      label: "Quality",
      icon: "youtube_searched_for",
      color: "#71d4f9",
      tasks: 18,
      tasksComplete: 0
    },
    {
      id: "6",
      label: "Deployment",
      icon: "present_to_all",
      color: "#ff71c7",
      tasks: 18,
      tasksComplete: 0
    },
    {
      id: "7",
      label: "Support",
      icon: "supervisor_account",
      color: "#72d4f9",
      tasks: 18,
      tasksComplete: 1
    },
    {
      id: "8",
      label: "Admin",
      icon: "announcement",
      color: "#72d4f9",
      tasks: 18,
      tasksComplete: 1
    }
  ],
  today = new RangeDate(new Date()),
  events = [
    {
      id: "foobar",
      title: "Do this",
      startDate: today.advance("days", 1).toRef(),
      duration: 2,
      resource: "0",
      link: "1"
    },
    {
      id: "barfoo",
      title: "Do that",
      startDate: today.advance("days", 3).toRef(),
      duration: 4,
      resource: "1"
    },
    {
      id: "barfoobaz",
      title: "I am disabled",
      startDate: today.advance("days", 2).toRef(),
      duration: 7,
      resource: "2",
      disabled: true
    },
    {
      id: "foobah",
      title: "Do another thing",
      startDate: today.advance("days", 6).toRef(),
      duration: 14,
      resource: "6"
    },
    {
      id: "foobaz",
      title: "Do another thing next month",
      startDate: today.advance("days", 36).toRef(),
      duration: 14,
      resource: "6"
    }
  ];

class Basic extends React.Component {
  constructor(props) {
    super(props);
    let from = new RangeDate();
    let to = from.advance("weeks", 5);

    this.state = {
      events: props.events,
      range: new DateRange(from, to)
    };
  }

  eventChanged(props) {
    const index = this.state.events.findIndex(event => event.id === props.id);
    const newEvents = this.state.events;
    newEvents[index] = props;
    this.setState({ ...props, events: newEvents });
    console.log(props);
  }

  eventResized(props) {
    const index = this.state.events.findIndex(event => event.id === props.id);
    const newEvents = this.state.events;
    newEvents[index] = props;
    this.setState({ ...props, events: newEvents });
    console.log(props);
  }

  eventClicked(props) {
    alert(`${props.title} clicked!`);
    console.log(props);
  }

  cellClicked(resource, date) {
    alert(`You clicked on ${resource} - ${date}`);
    console.log(resource, date);
  }

  rangeChanged(range) {
    this.setState({ range: range });
  }

  eventHeaderRenderer({ date }) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontWeight: "bold",
          color: "#696969",
          backgroundColor: "white"
        }}
      >
        {date.toCal()}
      </div>
    );
  }

  resourceRender({ resource }) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          textAlign: "left",
          borderLeft: `solid 3px ${resource.color}`
        }}
      >
        <i className="material-icons" style={{ color: "#a6b7c0", marginLeft: 10 }}>
          {resource.icon}
        </i>
        <strong style={{ marginLeft: 10 }}>{resource.label}</strong>
      </div>
    );
  }

  eventRenderer({ title, partial, event, resource }) {
    return <div>{title}</div>;
  }

  resourceHeaderRenderer() {
    return (
      <div
        style={{
          backgroundColor: "white",
          height: "100%",
          color: "#9eafba",
          paddingTop: 0,
          paddingLeft: 2,
          borderLeft: `solid 3px white`,
          textAlign: "left"
        }}
      >
        <strong style={{ marginLeft: 10 }}>Task List</strong>
      </div>
    );
  }

  /*
  resourceHeaderRenderer
  eventRenderer
  */
  render() {
    const { events, range, title, startDate, duration, resource } = this.state,
      { from, to } = range;

    return (
      <div style={{ padding: "50px 50px 100px 50px" }}>
        <Scheduler
          from={from}
          to={to}
          resources={resources}
          events={events}
          width={800}
          height={330}
          resourceWidth={200}
          rowHeight={50}
          headerHeight={50}
          cellWidth={100}
          onEventChanged={::this.eventChanged}
          onEventResized={::this.eventResized}
          onEventClicked={::this.eventClicked}
          onCellClicked={::this.cellClicked}
          onRangeChanged={::this.rangeChanged}
          resourceRenderer={opts => this.resourceRender(opts)}
          resourceHeaderRenderer={() => this.resourceHeaderRenderer()}
          eventHeaderRenderer={opts => this.eventHeaderRenderer(opts)}
          eventRenderer={opts => this.eventRenderer(opts)}
          style={{
            boxShadow:
              "inset 0 4px 7px 1px #fff, inset 0 -5px 20px rgba(173,186,204,.25), 0 2px 6px rgba(0,21,64,.14), 0 10px 20px rgba(0,21,64,.05)"
          }}
        />
      </div>
    );
  }
}

require("../src/css/default.scss");
render(<Basic resources={resources} events={events} />, document.getElementById("react"));
