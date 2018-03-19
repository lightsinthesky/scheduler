// Vendor Libraries
import React from "react";
import PropTypes from "prop-types";
import { DragSource } from "react-dnd";
import { connect } from "react-redux";

// Local Libraries
import { moveEvent, updateEventDuration } from "./actions/events";
import { ItemTypes } from "./constants";

import Link from "./link";

// Styles
import { eventHandleStyles, eventStyles, resizerStyles, boxStyles } from "./styles";

/* globals document */

const eventSource = {
  beginDrag(props) {
    return {
      resource: props.resource,
      date: props.startDate,
      id: props.id
    };
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) return;

    component.props.dispatch(moveEvent(props, monitor.getDropResult(), props.eventChanged));
  },
  canDrag(props) {
    return !props.disabled;
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
    connectDragPreview: connect.dragPreview()
  };
}

@DragSource(ItemTypes.EVENT, eventSource, collect)
class Event extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    resource: PropTypes.string.isRequired,
    dispatch: PropTypes.func,
    eventChanged: PropTypes.func.isRequired,
    eventResized: PropTypes.func.isRequired,
    eventClicked: PropTypes.func.isRequired,
    cellWidth: PropTypes.number,
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    styles: PropTypes.object,
    isDragging: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    connectDragPreview: PropTypes.func.isRequired,
    rowHeight: PropTypes.number.isRequired,
    children: PropTypes.node
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    const { duration, cellWidth } = this.props,
      width = duration * cellWidth === 0 ? cellWidth : duration * cellWidth - duration - 9;

    this.setState({ cellWidth, width, startWidth: width });
  }

  componentDidMount() {
    this.refs.resizer.addEventListener("mousedown", this.initDrag, false);
  }

  componentWillReceiveProps(nextProps) {
    const { duration, cellWidth } = nextProps,
      width = duration * cellWidth === 0 ? cellWidth : duration * cellWidth - duration - 9;

    this.setState({ duration, width, startWidth: width });
  }

  initDrag = ev => {
    ev.stopPropagation();

    this.setState({
      startX: ev.clientX
    });

    document.documentElement.addEventListener("mousemove", this.doDrag, false);
    document.documentElement.addEventListener("mouseup", this.stopDrag, false);
  };

  doDrag = ev => {
    ev.stopPropagation();
    const { startWidth, startX } = this.state,
      newWidth = startWidth + ev.clientX - startX;

    this.setState({ width: newWidth });
  };

  stopDrag = ev => {
    ev.stopPropagation();
    const { eventResized, disabled, dispatch, id, title, startDate, resource, styles } = this.props,
      { width } = this.state,
      newDuration = this.roundToNearest(width);

    dispatch(
      updateEventDuration(
        { disabled, id, title, startDate, resource, styles },
        newDuration,
        eventResized
      )
    );

    document.documentElement.removeEventListener("mousemove", this.doDrag, false);
    document.documentElement.removeEventListener("mouseup", this.stopDrag, false);
  };

  roundToNearest(numToRound) {
    return Math.ceil(numToRound / this.props.cellWidth);
  }

  dispatchEventClick(ev) {
    ev.stopPropagation();
    this.props.eventClicked(this.props);
  }

  render() {
    const {
      styles,
      isDragging,
      connectDragSource,
      connectDragPreview,
      id,
      title,
      children,
      rowHeight,
      color,
      renderer,
      link,
      ...rest
    } = this.props;

    const { width } = this.state;

    let resizerStyleMerge = Object.assign({ height: "100%" }, resizerStyles);
    let defaultStyles = { color: "#fff", backgroundColor: color };
    let eventStyleMerge = Object.assign({ width }, styles || defaultStyles, eventStyles);
    let opacity = isDragging ? 0 : 1;
    let boxStyleMerge = Object.assign({ width, opacity }, boxStyles);

    // link to - how?

    return (
      <div className="event-box" style={boxStyleMerge}>
        {isDragging
          ? null
          : connectDragPreview(
              <div
                key={id}
                className="event"
                style={eventStyleMerge}
                onClick={::this.dispatchEventClick}
              >
                {connectDragSource(<span style={eventHandleStyles} className="event-handle" />)}
                {renderer(this.props)}
              </div>
            )}
        <span className="resizer" style={resizerStyleMerge} ref="resizer" />
        {link && (
          <div style={{ position: "absolute", top: 10, right: -1 }}>
            <Link />
          </div>
        )}
      </div>
    );
  }
}

export default connect()(Event);
