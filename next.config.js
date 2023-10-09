const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  experimental: { appDir: true, serverActions: true },

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
  },
});
