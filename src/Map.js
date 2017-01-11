import React from 'react'
import leaflet from 'leaflet'

export default class Map extends React.Component {
  componentDidMount () {
    const map = leaflet.map(this.mapDiv).setView([51.505, -0.09], 13)

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
