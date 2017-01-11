import React from 'react'
import leaflet from 'leaflet'

export default class Marker extends React.Component {
  static propTypes = {
    latitude: React.PropTypes.number.isRequired,
    longitude: React.PropTypes.number.isRequired,
  }

  static defaultProps = {
    latitude: 51.5,
    longitude: -0.09,
  }

  componentDidMount () {
    // map

    leaflet.marker([
      this.props.latitude,
      this.props.longitude,
    ]) // .addTo(map)
  }

  render () {
    return (
      <div />
    )
  }
}
