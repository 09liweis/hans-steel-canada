import React from 'react'

type GoogleMapProps = {
  query?: string
  src?: string
  title?: string
  className?: string
  loading?: 'lazy' | 'eager'
  referrerPolicy?: string
}

const GoogleMap: React.FC<GoogleMapProps> = ({
  query,
  src,
  title = 'Google Map',
  className = 'w-full h-full',
  loading = 'lazy',
  referrerPolicy = 'no-referrer-when-downgrade',
}) => {
  const mapSrc = src ?? (query ? `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed` : 'about:blank')

  return <iframe title={title} src={mapSrc} className={className} loading={loading} referrerPolicy={referrerPolicy} />
}

export default GoogleMap
