import React from 'react'
import ReactDOM from 'react-dom'

import Map from './Map'
import Marker from './Marker'

ReactDOM.render(
  <div>
    <Map>
      <Marker />
    </Map>
  </div>
, document.getElementById('app'))
