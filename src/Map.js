import React from 'react'
import leaflet from 'leaflet'

export default class Map extends React.Component {
  componentDidMount () {
    leaflet.map(this.mapDiv).setView([51.505, -0.09], 13)
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
