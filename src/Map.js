import React from 'react'
import leaflet from 'leaflet'

export default class Map extends React.Component {
  static propTypes = {
    latitude: React.PropTypes.number.isRequired,
    longitude: React.PropTypes.number.isRequired,
    zoomLevel: React.PropTypes.number.isRequired,
    children: React.PropTypes.element,
  }

  static defaultProps = {
    latitude: 51.505,
    longitude: -0.09,
    zoomLevel: 13,
  }

  state = {
    map: null,
  }

  componentDidMount () {
    const map = leaflet.map(
      this.mapDiv
    ).setView([
      this.props.latitude,
      this.props.longitude,
    ], this.props.zoomLevel
    )

    leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map)

    this.setState({ map })
  }

  bindMapDiv = (element) => {
    this.mapDiv = element
  }

  render () {
    let mappedChildren = this.props.children

    if (this.state.map) {
      mappedChildren = React.Children.map(
        this.props.children,
        (child) => {
          return React.cloneElement(
            child,
            {
              map: this.state.map,
            }
          )
        }
      )
    }

    return (
      <div
        ref={this.bindMapDiv}
        style={{height: '500px'}}
      >
        {mappedChildren}
      </div>
    )
  }
}
