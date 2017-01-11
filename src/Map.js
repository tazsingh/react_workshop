import React from 'react'
import leaflet from 'leaflet'

export default class Map extends React.Component {
  static propTypes = {
    latitude: React.PropTypes.number.isRequired,
    longitude: React.PropTypes.number.isRequired,
    zoomLevel: React.PropTypes.number.isRequired,
  }

  static defaultProps = {
    latitude: 51.505,
    longitude: -0.09,
    zoomLevel: 13,
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
  }

  bindMapDiv = (element) => {
    this.mapDiv = element
  }

  render () {
    return (
      <div
        ref={this.bindMapDiv}
        style={{height: '500px'}}
      />
    )
  }
}
