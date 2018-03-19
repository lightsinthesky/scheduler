// Vendor Libraries
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "legit-rubyfill/array/equals";

// Local Libraries
import Chart from "./chart";
import Header from "./header";
import Resources from "./resources";
import RangeSelector from "./range_selector";

class Layout extends Component {
  static propTypes = {
    resources: PropTypes.array.isRequired,
    range: PropTypes.object.isRequired,
    events: PropTypes.array.isRequired,
    cells: PropTypes.object.isRequired,
    eventChanged: PropTypes.func.isRequired,
    eventResized: PropTypes.func.isRequired,
    eventClicked: PropTypes.func.isRequired,
    cellClicked: PropTypes.func.isRequired,
    rangeChanged: PropTypes.func.isRequired,
    rangeDidChange: PropTypes.bool.isRequired,
    width: PropTypes.number.isRequired,
    rowHeight: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      scrollLeft: 0
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    let shouldUpdate = true;

    //if (nextProps.resources.equals(this.props.resources)) { shouldUpdate = false }
    //if (nextProps.events.length !== this.props.events.length) { shouldUpdate = true }

    return shouldUpdate;
  }

  handleScroll(e) {
    this.setState({ scrollLeft: e });
  }

  render() {
    const {
      rangeDidChange,
      rangeChanged,
      width,
      range,
      resources,
      rowHeight,
      resourceWidth,
      headerHeight,
      eventHeaderRenderer,
      resourceHeaderRenderer,
      resourceRenderer,
      cellWidth,
      style
    } = this.props;

    let { scrollLeft } = this.state;

    /**<Header
            range={range}
            height={headerHeight}
            width={width}
            cellWidth={cellWidth}
            renderer={eventHeaderRenderer}
            resourceRenderer={resourceHeaderRenderer}
            resourceWidth={resourceWidth}
            scrollLeft={scrollLeft}
          /> */
    let shadowOpacity = scrollLeft;
    return (
      <div style={Object.assign({}, style, { width: width, overflow: "hidden" })}>
        {/*<RangeSelector range={range} rangeChanged={rangeChanged} rangeDidChange={rangeDidChange} />*/}
        <div className="layout-wrapper" style={{ width: width }}>
          <div
            className="chart-wrapper"
            style={{ display: "flex", width: width, position: "relative" }}
          >
            <Resources
              height={rowHeight}
              width={resourceWidth}
              resources={resources}
              renderer={resourceRenderer}
              headerRenderer={resourceHeaderRenderer}
            />
            <Chart {...this.props} scroll={e => this.handleScroll(e)} />
            <div
              style={{
                width: 10,
                height: 500,
                backgroundColor: "red",
                position: "absolute",
                top: 0,
                left: resourceWidth,
                zIndex: 9000,
                background: "-webkit-linear-gradient(left, rgba(0,0,0,0.10) 0%,rgba(0,0,0,0) 100%)"
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => {
  const { rangeDidChange, range } = state.range.toJS();
  const { resources, events } = state.event.toJS();
  const { cells } = state.cells.toJS();
  return { rangeDidChange, cells, range, resources, events };
})(Layout);
