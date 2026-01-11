import React from 'react'

type GoogleMapProps = {
  query?: string
  src?: string
  title?: string
  className?: string
  loading?: 'lazy' | 'eager'
}

const GoogleMap: React.FC<GoogleMapProps> = ({
  query,
  src,
  title = 'Google Map',
  className = 'w-full h-full h-72 sm:h-96',
  loading = 'lazy',
}) => {
  const mapSrc = src ?? (query ? `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed` : 'about:blank')

  return <iframe title={title} src={mapSrc} className={className} loading={loading} referrerPolicy={'no-referrer-when-downgrade'} />
}

export default GoogleMap
