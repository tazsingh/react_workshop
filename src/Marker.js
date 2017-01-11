import React from 'react'
import leaflet from 'leaflet'

export default class Marker extends React.Component {
  static propTypes = {
    latitude: React.PropTypes.number.isRequired,
    longitude: React.PropTypes.number.isRequired,
    // map: React.PropTypes.object,
  }

  static defaultProps = {
    latitude: 51.5,
    longitude: -0.09,
  }

  static contextTypes = {
    map: React.PropTypes.object,
  }

  state = {
    marker: null,
  }

  componentDidMount () {
    const marker = leaflet.marker([
      this.props.latitude,
      this.props.longitude,
    ]).addTo(this.context.map)

    this.setState({
      marker,
    })
  }

  componentWillReceiveProps ({ latitude, longitude }) {
    if (
      this.props.latitude !== latitude ||
        this.props.longitude !== longitude
    ) {
      // update lat/lng on marker
      this.state.marker.setLatLng(
        leaflet.latLng(latitude, longitude)
      )
    }
  }

  render () {
    return null
  }
}
