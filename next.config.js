const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  experimental: { serverActions: true },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        // hostname: "www.//the-vep.vercel.app",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
    deviceSizes: [320, 448, 640, 768, 896],
  },
});
