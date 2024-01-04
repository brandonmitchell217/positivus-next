/** @type {import('next').NextConfig} */
const config = {
  images: {
    remotePatterns: [{ hostname: 'cdn.sanity.io' }],
    dangerouslyAllowSVG: true,
  },
}

export default config
