import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { useState, useEffect } from 'react'
import config from '../app.config'
import * as mapdata from '../lib/mapdata.json'
import Image from 'next/image'
import Link from 'next/link'

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 20.4,
    longitude: -86.9,
    width: "100vw",
    height: "100vh",
    zoom: 10
  })
  const [selectedMarker, setSelectedMarker] = useState(null)

  // Close popup if ESC is hit
  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedMarker(null)
      }
    }
    window.addEventListener("keydown", listener)

    return () => {
      window.removeEventListener("keydown", listener)
    }
  }, [])

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={config.map.accessToken}
      mapStyle="mapbox://styles/mapbox/dark-v10"
      // mapStyle="mapbox://styles/mapbox/satellite-v9"
      // mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {mapdata.features.map(f => {
        return (
          <Marker
            key={f.id}
            latitude={f.geometry.coordinates[1]}
            longitude={f.geometry.coordinates[0]}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault()
                setSelectedMarker(f)
              }}
            >
              <div className="w-8 h-8 text-brand">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
            </button>

          </Marker>
        )
      })}

      {selectedMarker ? (
        <Popup
          latitude={selectedMarker.geometry.coordinates[1]}
          longitude={selectedMarker.geometry.coordinates[0]}
          offsetLeft={16}
          offsetTop={13}
          onClose={() => {
            setSelectedMarker(null)
          }}
        >
          <div className="px-8 py-4 max-w-xs md:max-w-md lg:max-w-lg">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="my-0">{selectedMarker.properties.name}</h1>
                <h2>{selectedMarker.properties.subname}</h2>
              </div>
              <div>
                <Image
                  src={`/icons/business/${selectedMarker.properties.image}`}
                  alt="Business Image"
                  width="120"
                  height="120"
                />
              </div>
            </div>
            <div className="text-sm bg-gray-100 p-4 rounded">
              <p className="mb-2"><Link href={selectedMarker.properties.website}><a>Website</a></Link></p>
              <p className="mb-2"><a href={selectedMarker.properties.phone}>Call {selectedMarker.properties.name}</a></p>
              <p className="mb-2">Adress: {selectedMarker.properties.address}</p>
              <p className="mb-2">{selectedMarker.properties.description}</p>
            </div>
          </div>
        </Popup>
      ) : null}

    </ReactMapGL>
  )
}

export default Map
