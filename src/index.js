import React from 'react'
import ReactDOM from 'react-dom'

import Map from './Map'
import Marker from './Marker'

const appElement = document.getElementById('app')

ReactDOM.render(
  <div>
    <Map>
      <Marker />
    </Map>
  </div>
, appElement)

setTimeout(() => {
  ReactDOM.render(
    <div>
      <Map>
        <Marker />
        <Marker
          latitude={51.52}
          longitude={-0.09}
        />
      </Map>
    </div>
  , appElement)

  setTimeout(() => {
    ReactDOM.render(
      <div>
        <Map>
          <Marker
            latitude={51.49}
            longitude={-0.09}
          />
          <Marker
            latitude={51.52}
            longitude={-0.09}
          />
        </Map>
      </div>
    , appElement)
  }, 2000)
}, 2000)
