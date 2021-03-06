import ReactMapGL, { Marker, Popup, FlyToInterpolator } from 'react-map-gl'
import useSupercluster from "use-supercluster";
import { useState, useEffect, useRef } from 'react'
import useSwr from "swr";
import config from '../app.config'
import Image from 'next/image'
import Link from 'next/link'

const fetcher = (...args) => fetch(...args).then(response => response.json());

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 20.4,
    longitude: -86.9,
    width: "100vw",
    height: "100vh",
    zoom: 7
  })
  const mapRef = useRef()
  const [selectedMarker, setSelectedMarker] = useState(null)

  const { data, error } = useSwr('/api/business', { fetcher });
  const locations = data && !error ? data : [];

  // Clustering - https://github.com/leighhalliday/mapbox-clustering/blob/master/src/App.js
  const points = locations.map(point => ({
    type: "Feature",
    properties: { ...point.properties, cluster: false, id: point._id, category: point.category },
    geometry: {
      type: "Point",
      coordinates: [
        point.geometry.coordinates[0],
        point.geometry.coordinates[1]
      ]
    }
  }))

  const bounds = mapRef.current
    ? mapRef.current
      .getMap()
      .getBounds()
      .toArray()
      .flat()
    : null;

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom: viewport.zoom,
    options: { radius: 75, maxZoom: 20 }
  });

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
      // mapStyle="mapbox://styles/mapbox/dark-v10"
      // mapStyle="mapbox://styles/mapbox/satellite-v9"
      // mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      ref={mapRef}
    >
      {clusters.map(cluster => {
        const [longitude, latitude] = cluster.geometry.coordinates;
        const {
          cluster: isCluster,
          point_count: pointCount
        } = cluster.properties;

        if (isCluster) {
          return (
            <Marker
              key={`cluster-${cluster.id}`}
              latitude={latitude}
              longitude={longitude}
            >
              <div
                className="text-white bg-brand rounded-full p-4 flex justify-center items-center z-10 cursor-pointer"
                style={{
                  width: `${10 + (pointCount / points.length) * 50}px`,
                  height: `${10 + (pointCount / points.length) * 50}px`
                }}
                onClick={() => {
                  const expansionZoom = Math.min(
                    supercluster.getClusterExpansionZoom(cluster.id),
                    20
                  );

                  setViewport({
                    ...viewport,
                    latitude,
                    longitude,
                    zoom: expansionZoom,
                    transitionInterpolator: new FlyToInterpolator({
                      speed: 2
                    }),
                    transitionDuration: "auto"
                  });
                }}
              >
                {pointCount}
              </div>
            </Marker>
          );
        }
        return (
          <Marker
            key={`crime-${cluster.properties.id}`}
            latitude={cluster.geometry.coordinates[1]}
            longitude={cluster.geometry.coordinates[0]}
          >
            <button
              className=""
              onClick={e => {
                e.preventDefault()
                setSelectedMarker(cluster)
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
          closeOnClick={false}
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
              <p className="mb-2"><Link href={selectedMarker.properties.website}><a target="_blank">Visit Website</a></Link></p>
              <p className="mb-2"><a href={`tel: ${selectedMarker.properties.phone}`}>Call {selectedMarker.properties.phone}</a></p>
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
