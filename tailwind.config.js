/** @type {import('tailwindcss').Config} */
 

const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  // important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.ts",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        "9xl": "10rem",
      },
      letterSpacing: {
        tightest: "-.06em",
      },
      colors: {
        primary: {
          100: "#E7D5FE",
          200: "#CDABFE",
          300: "#B081FC",
          400: "#9761FA",
          500: "#6E2EF7",
          600: "#5421D4",
          700: "#3E17B1",
          800: "#2A0E8F",
          900: "#1D0876",
        },
        success: {
          100: "#F2FCCE",
          200: "#E2FA9F",
          300: "#CAF26E",
          400: "#B0E648",
          500: "#8BD613",
          600: "#6FB80D",
          700: "#579A09",
          800: "#407C06",
          900: "#316603",
        },

        info: {
          100: "#D4F8FF",
          200: "#AAEDFF",
          300: "#7FDDFF",
          400: "#60CBFF",
          500: "#2BADFF",
          600: "#1F87DB",
          700: "#1565B7",
          800: "#0D4793",
          900: "#08327A",
        },
        warning: {
          100: "#FFF9CC",
          200: "#FFF099",
          300: "#FFE666",
          400: "#FFDC3F",
          500: "#FFCC00",
          600: "#DBAA00",
          700: "#B78B00",
          800: "#936D00",
          900: "#7A5700",
        },
        danger: {
         100: "#FFEDD7",
         200: "#FFD7AF",
         300: "#FFBB87",
         400: "#FFA069",
         500: "#FF7338",
         600: "#DB5128",
         700: "#B7351C",
         800: "#931E11",
         900: "#7A0D0A",
        },

        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
        gray: colors.neutral,
       
      },
      gradientColorStops: {
        "gradient-1-start": "#007CF0",
        "gradient-1-end": "#00DFD8",
        "gradient-2-start": "#7928CA",
        "gradient-2-end": "#FF0080",
        // 'gradient-3-start': '#FF4D4D',
        // 'gradient-3-end': '#F9CB28',
        "gradient-3-start": "#A100F2",
        "gradient-3-end": "#2D00F7",
      },
      keyframes: {
        "gradient-foreground-1": {
          "from, 16.667%, to": {
            opacity: 1,
          },
          "33.333%, 83.333%": {
            opacity: 0,
          },
        },
        "gradient-background-1": {
          "from, 16.667%, to": {
            opacity: 0,
          },
          "25%, 91.667%": {
            opacity: 1,
          },
        },
        "gradient-foreground-2": {
          "from, to": {
            opacity: 0,
          },
          "33.333%, 50%": {
            opacity: 1,
          },
          "16.667%, 66.667%": {
            opacity: 0,
          },
        },
        "gradient-background-2": {
          "from, to": {
            opacity: 1,
          },
          "33.333%, 50%": {
            opacity: 0,
          },
          "25%, 58.333%": {
            opacity: 1,
          },
        },
        "gradient-foreground-3": {
          "from, 50%, to": {
            opacity: 0,
          },
          "66.667%, 83.333%": {
            opacity: 1,
          },
        },
        "gradient-background-3": {
          "from, 58.333%, 91.667%, to": {
            opacity: 1,
          },
          "66.667%, 83.333%": {
            opacity: 0,
          },
        },
      },
      animation: {
        "gradient-background-1": "gradient-background-1 8s infinite",
        "gradient-foreground-1": "gradient-foreground-1 8s infinite",
        "gradient-background-2": "gradient-background-2 8s infinite",
        "gradient-foreground-2": "gradient-foreground-2 8s infinite",
        "gradient-background-3": "gradient-background-3 8s infinite",
        "gradient-foreground-3": "gradient-foreground-3 8s infinite",
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            a: {
              color: theme("colors.primary.500"),
              "&:hover": {
                color: theme("colors.primary.900"),
              },
              code: { color: theme("colors.primary.400") },
            },
            p:{
              fontSize:"1.12rem",
            },
            h1: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.900"),
            },
            h2: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.900"),
            },
            h3: {
              fontWeight: "600",
              color: theme("colors.gray.900"),
            },
            h4: {
              fontSize:"1.25rem",
            },
            "h4,h5,h6": {
              color: theme("colors.gray.900"),
            },
             
            code: {
              color: theme("colors.gray.700"),
              backgroundColor: theme("colors.neutral.200"),      
              paddingLeft: "4px",
              paddingRight: "4px",
              paddingTop: "2px",
              paddingBottom: "2px",
              // borderRadius: "0.25rem",
              // borderColor: theme("colors.gray.400"),
              // borderWeight:'2px'
             
            },
            "code:before ":{
              content: "none",
            },
            "code:after": {
              content: "none",
            },
            hr: { borderColor: theme("colors.gray.200") },
            "ol li:before": {
              fontWeight: "600",
              color: theme("colors.gray.500"),
            },
            "ul li:before": {
              backgroundColor: theme("colors.gray.500"),
            },
            "ul li > :last-child": {
              margin: 0,
            },
            "ul li > :first-child": {
              margin: 0,
            },
            strong: { color: theme("colors.gray.600") },
            blockquote: {
              color: theme("colors.gray.900"),
              borderLeftColor: theme("colors.green.200"),
            },
          },
        },
        dark: {
          css: {           
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.primary.500"),
              "&:hover": {
                color: theme("colors.primary.400"),
              },
              code: { color: theme("colors.primary.800") },
            },
            h1: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.100"),
            },
            h2: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.100"),
            },
            h3: {
              fontWeight: "600",
              color: theme("colors.gray.100"),
            },
            "h4,h5,h6": {
              color: theme("colors.gray.100"),
            },
            
            code: {
              color: theme("colors.gray.300"),
              backgroundColor: theme("colors.neutral.800"),
            },
            hr: { borderColor: theme("colors.gray.700") },
            "ol li:before": {
              fontWeight: "600",
              color: theme("colors.gray.400"),
            },
            "ul li:before": {
              backgroundColor: theme("colors.gray.400"),
            },
            "ul li > :last-child": {
              margin: 0,
            },
            "ul li > :first-child": {
              margin: 0,
            },
            strong: { color: theme("colors.gray.100") },
            thead: {
              color: theme("colors.gray.100"),
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.gray.700"),
              },
            },
            blockquote: {
              color: theme("colors.gray.200"),
              borderLeftColor: theme("colors.green.800"),
            },
          
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
