/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}', './stories/*'],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        'd-hero': ['3.583rem', { lineHeight: '1.3', fontWeight: '900' }],
        'd-h1': ['2.986rem', { lineHeight: '1.3' }],
        'd-h2': ['2.488rem', { lineHeight: '1.3' }],
        'd-h3': ['2.074rem', { lineHeight: '1.3' }],
        'd-h4': ['1.728rem', { lineHeight: '1.3' }],
        'd-sub1': ['1.44rem'],
        'd-sub2': ['1.2rem'],
        'd-base': ['1rem', { lineHeight: '1.5' }],
        'd-copy': ['0.833rem'],
        'd-overline': ['0.694rem', { letterSpacing: '0.25rem', fontWeight: '700', textTransform: 'uppercase' }],
        'm-hero': ['2.281rem', { lineHeight: '1.75', fontWeight: '900' }],
        'm-h1': ['2.027rem', { lineHeight: '1.75' }],
        'm-h2': ['1.802rem', { lineHeight: '1.75' }],
        'm-h3': ['1.692rem', { lineHeight: '1.75' }],
        'm-h4': ['1.424rem', { lineHeight: '1.75' }],
        'm-sub1': ['1.266rem'],
        'm-sub2': ['1.125rem'],
        'm-base': ['1rem', { lineHeight: '1.5' }],
        'm-copy': ['0.889rem'],
        'm-overline': ['0.79rem', { letterSpacing: '0.25rem', fontWeight: '700', textTransform: 'uppercase' }]
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        amethyst: {
          "50": "rgb(247, 247, 255)",
          "100": "rgb(240, 239, 255)",
          "200": "rgb(217, 214, 255)",
          "300": "rgb(193, 189, 255)",
          "400": "rgb(147, 140, 255)",
          "500": "rgb(101, 91, 255)",
          "600": "rgb(91, 82, 230)",
          "700": "rgb(76, 68, 191)",
          "800": "rgb(61, 55, 153)",
          "900": "rgb(49, 45, 125)"
        },
        aqua: {
          "50": "rgb(242, 253, 255)",
          "100": "rgb(230, 251, 255)",
          "200": "rgb(191, 246, 255)",
          "300": "rgb(153, 240, 255)",
          "400": "rgb(77, 228, 255)",
          "500": "rgb(0, 217, 255)",
          "600": "rgb(0, 195, 230)",
          "700": "rgb(0, 163, 191)",
          "800": "rgb(0, 130, 153)",
          "900": "rgb(0, 106, 125)"
        },
        azure: {
          "50": "rgb(242, 248, 255)",
          "100": "rgb(230, 241, 255)",
          "200": "rgb(191, 221, 255)",
          "300": "rgb(153, 201, 255)",
          "400": "rgb(77, 160, 255)",
          "500": "rgb(0, 119, 255)",
          "600": "rgb(0, 107, 230)",
          "700": "rgb(0, 89, 191)",
          "800": "rgb(0, 71, 153)",
          "900": "rgb(0, 58, 125)"
        },
        bayoux: {
          "50": "rgb(246, 247, 248)",
          "100": "rgb(238, 240, 242)",
          "200": "rgb(212, 217, 221)",
          "300": "rgb(186, 195, 201)",
          "400": "rgb(135, 149, 161)",
          "500": "rgb(83, 104, 120)",
          "600": "rgb(75, 94, 108)",
          "700": "rgb(62, 78, 90)",
          "800": "rgb(76, 76, 76)",
          "900": "rgb(62, 62, 62)"
        },
        jade: {
          "50": "rgb(252, 255, 242)",
          "100": "rgb(248, 255, 230)",
          "200": "rgb(238, 255, 191)",
          "300": "rgb(228, 255, 153)",
          "400": "rgb(207, 255, 77)",
          "500": "rgb(187, 255, 0)",
          "600": "rgb(168, 230, 0)",
          "700": "rgb(140, 191, 0)",
          "800": "rgb(112, 153, 0)",
          "900": "rgb(92, 125, 0)"
        },
        jasper: {
          "50": "rgb(255, 253, 242)",
          "100": "rgb(255, 250, 230)",
          "200": "rgb(255, 243, 191)",
          "300": "rgb(255, 236, 153)",
          "400": "rgb(255, 222, 77)",
          "500": "rgb(255, 208, 0)",
          "600": "rgb(230, 187, 0)",
          "700": "rgb(191, 156, 0)",
          "800": "rgb(153, 125, 0)",
          "900": "rgb(125, 102, 0)"
        },
        kunzite: {
          "50": "rgb(250, 248, 255)",
          "100": "rgb(246, 240, 255)",
          "200": "rgb(232, 218, 255)",
          "300": "rgb(219, 196, 255)",
          "400": "rgb(191, 152, 255)",
          "500": "rgb(164, 108, 255)",
          "600": "rgb(148, 97, 230)",
          "700": "rgb(123, 81, 191)",
          "800": "rgb(98, 65, 153)",
          "900": "rgb(80, 53, 125)"
        },
        moonstone: {
          "50": "rgb(255, 254, 253)",
          "100": "rgb(254, 253, 251)",
          "200": "rgb(253, 249, 244)",
          "300": "rgb(251, 245, 237)",
          "400": "rgb(249, 238, 224)",
          "500": "rgb(246, 231, 210)",
          "600": "rgb(221, 208, 189)",
          "700": "rgb(185, 173, 158)",
          "800": "rgb(148, 139, 126)",
          "900": "rgb(121, 113, 103)"
        },
        peridot: {
          "50": "rgb(246, 255, 242)",
          "100": "rgb(238, 255, 230)",
          "200": "rgb(212, 255, 191)",
          "300": "rgb(185, 255, 153)",
          "400": "rgb(133, 255, 77)",
          "500": "rgb(81, 255, 0)",
          "600": "rgb(73, 230, 0)",
          "700": "rgb(61, 191, 0)",
          "800": "rgb(49, 153, 0)",
          "900": "rgb(40, 125, 0)"
        },
        ruby: {
          "50": "rgb(255, 242, 248)",
          "100": "rgb(255, 230, 240)",
          "200": "rgb(255, 191, 218)",
          "300": "rgb(255, 153, 195)",
          "400": "rgb(255, 77, 151)",
          "500": "rgb(255, 0, 106)",
          "600": "rgb(230, 0, 95)",
          "700": "rgb(191, 0, 80)",
          "800": "rgb(153, 0, 64)",
          "900": "rgb(125, 0, 52)"
        },
        russian: {
          "50": "rgb(243, 243, 244)",
          "100": "rgb(231, 231, 233)",
          "200": "rgb(194, 195, 201)",
          "300": "rgb(158, 159, 169)",
          "400": "rgb(85, 87, 104)",
          "500": "rgb(12, 15, 39)",
          "600": "rgb(11, 14, 35)",
          "700": "rgb(9, 11, 29)",
          "800": "rgb(7, 9, 23)",
          "900": "rgb(6, 7, 19)"
        },
        scarlet: {
          "50": "rgb(255, 242, 244)",
          "100": "rgb(255, 230, 233)",
          "200": "rgb(255, 191, 200)",
          "300": "rgb(255, 153, 167)",
          "400": "rgb(255, 77, 101)",
          "500": "rgb(255, 0, 35)",
          "600": "rgb(230, 0, 32)",
          "700": "rgb(191, 0, 26)",
          "800": "rgb(153, 0, 21)",
          "900": "rgb(125, 0, 17)"
        },
        stratos: {
          "50": "rgb(243, 243, 245)",
          "100": "rgb(231, 231, 236)",
          "200": "rgb(196, 194, 207)",
          "300": "rgb(160, 157, 178)",
          "400": "rgb(89, 84, 120)",
          "500": "rgb(18, 10, 62)",
          "600": "rgb(16, 9, 56)",
          "700": "rgb(14, 8, 47)",
          "800": "rgb(11, 6, 37)",
          "900": "rgb(9, 5, 30)"
        },
        sunstone: {
          "50": "rgb(255, 251, 244)",
          "100": "rgb(255, 246, 233)",
          "200": "rgb(255, 233, 201)",
          "300": "rgb(255, 220, 168)",
          "400": "rgb(255, 194, 102)",
          "500": "rgb(255, 168, 37)",
          "600": "rgb(230, 151, 33)",
          "700": "rgb(191, 126, 28)",
          "800": "rgb(153, 101, 22)",
          "900": "rgb(125, 82, 18)"
        },
        sylver: {
          "50": "rgb(254, 254, 254)",
          "100": "rgb(252, 253, 254)",
          "200": "rgb(248, 249, 251)",
          "300": "rgb(243, 246, 249)",
          "400": "rgb(235, 239, 245)",
          "500": "rgb(226, 232, 240)",
          "600": "rgb(203, 209, 216)",
          "700": "rgb(170, 174, 180)",
          "800": "rgb(136, 139, 144)",
          "900": "rgb(111, 114, 118)"
        },
      },
    },
  },
  plugins: [],
}