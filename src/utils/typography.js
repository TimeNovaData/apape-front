const $type = {
  Display: {
    // {
    //   //     "$type": "typography",
    //   //     "$value": {
    //   //       "fontFamily": "Inter",
    //   //       "fontSize": "64px",
    //   //       "fontWeight": 400,
    //   //       "letterSpacing": "-2%",
    //   //       "lineHeight": "80px",
    //   //       "textTransform": "none",
    //   //       "textDecoration": "none"
    //   //     }
    //   //   }
    1: {
      $type: 'typography',
      $value: {
        fontFamily: 'Inter',
        fontSize: '64px',
        fontWeight: 400,
        letterSpacing: '-2%',
        lineHeight: '80px',
        textTransform: 'none',
        textDecoration: 'none',
      },
    },
  },
  Title: {
    //   "Title": {
    //     "T1 - 48": {
    //       "$type": "typography",
    //       "$value": {
    //         "fontFamily": "Inter",
    //         "fontSize": "48px",
    //         "fontWeight": 400,
    //         "letterSpacing": "-2%",
    //         "lineHeight": "60px",
    //         "textTransform": "none",
    //         "textDecoration": "none"
    //       }
    //     },
    1: {
      $type: 'typography',
      $value: {
        fontFamily: 'Inter',
        fontSize: '48px',
        fontWeight: 400,
        letterSpacing: '-2%',
        lineHeight: '60px',
        textTransform: 'none',
        textDecoration: 'none',
      },
    },
    //     "T2 - 32": {
    //       "$type": "typography",
    //       "$value": {
    //         "fontFamily": "Inter",
    //         "fontSize": "32px",
    //         "fontWeight": 400,
    //         "letterSpacing": "-2%",
    //         "lineHeight": "44px",
    //         "textTransform": "none",
    //         "textDecoration": "none"
    //       }
    //     },
    2: {
      $type: 'typography',
      $value: {
        fontFamily: 'Inter',
        fontSize: '32px',
        fontWeight: 400,
        letterSpacing: '-2%',
        lineHeight: '44px',
        textTransform: 'none',
        textDecoration: 'none',
      },
    },
    //     "T3 - 24": {
    //       "$type": "typography",
    //       "$value": {
    //         "fontFamily": "Inter",
    //         "fontSize": "24px",
    //         "fontWeight": 400,
    //         "letterSpacing": "-2%",
    //         "lineHeight": "32px",
    //         "textTransform": "none",
    //         "textDecoration": "none"
    //       }
    //     }
    //   },
    3: {
      $type: 'typography',
      $value: {
        fontFamily: 'Inter',
        fontSize: '24px',
        fontWeight: 400,
        letterSpacing: '-2%',
        lineHeight: '32px',
        textTransform: 'none',
        textDecoration: 'none',
      },
    },
  },
  Headline: {
    1: {
      $type: 'typography',
      $value: {
        fontFamily: 'Inter',
        fontSize: '18px',
        fontWeight: 500,
        letterSpacing: '-2%',
        lineHeight: '26px',
        textTransform: 'none',
        textDecoration: 'none',
      },
    },
    2: {
      $type: 'typography',
      $value: {
        fontFamily: 'Inter',
        fontSize: '16px',
        fontWeight: 500,
        letterSpacing: '-2%',
        lineHeight: '24px',
        textTransform: 'none',
        textDecoration: 'none',
      },
    },
    3: {
      $type: 'typography',
      $value: {
        fontFamily: 'Inter',
        fontSize: '14px',
        fontWeight: 500,
        letterSpacing: '-2%',
        lineHeight: '22px',
        textTransform: 'none',
        textDecoration: 'none',
      },
    },
    4: {
      $type: 'typography',
      $value: {
        fontFamily: 'Sora',
        fontSize: '14px',
        fontWeight: 600,
        letterSpacing: '-2%',
        lineHeight: '22px',
        textTransform: 'none',
        textDecoration: 'none',
      },
    },
    5: {
      $type: 'typography',
      $value: {
        fontFamily: 'Inter',
        fontSize: '12px',
        fontWeight: 500,
        letterSpacing: '-2%',
        lineHeight: '19px',
        textTransform: 'none',
        textDecoration: 'none',
      },
    },
  },
  Paragraph: {
    1: {
      $type: 'typography',
      $value: {
        fontFamily: 'Inter',
        fontSize: '16px',
        fontWeight: 400,
        letterSpacing: '-2%',
        lineHeight: '24px',
        textTransform: 'none',
        textDecoration: 'none',
      },
    },
    2: {
      $type: 'typography',
      $value: {
        fontFamily: 'Inter',
        fontSize: '14px',
        fontWeight: 400,
        letterSpacing: '-2%',
        lineHeight: '22px',
        textTransform: 'none',
        textDecoration: 'none',
      },
    },
    3: {
      $type: 'typography',
      $value: {
        fontFamily: 'Inter',
        fontSize: '12px',
        fontWeight: 400,
        letterSpacing: '-2%',
        lineHeight: '20px',
        textTransform: 'none',
        textDecoration: 'none',
      },
    },
    4: {
      $type: 'typography',
      $value: {
        fontFamily: 'Inter',
        fontSize: '10px',
        fontWeight: 400,
        letterSpacing: '-2%',
        lineHeight: '18px',
        textTransform: 'none',
        textDecoration: 'none',
      },
    },
  },
  Caps: {
    1: {
      $type: 'typography',
      $value: {
        fontFamily: 'Inter',
        fontSize: '14px',
        fontWeight: 700,
        letterSpacing: '4%',
        lineHeight: '20px',
        textTransform: 'uppercase',
        textDecoration: 'none',
      },
    },

    2: {
      $type: 'typography',
      $value: {
        fontFamily: 'Inter',
        fontSize: '12px',
        fontWeight: 700,
        letterSpacing: '4%',
        lineHeight: '16px',
        textTransform: 'uppercase',
        textDecoration: 'none',
      },
    },

    3: {
      $type: 'typography',
      $value: {
        fontFamily: 'Inter',
        fontSize: '10px',
        fontWeight: 700,
        letterSpacing: '4%',
        lineHeight: '16px',
        textTransform: 'uppercase',
        textDecoration: 'none',
      },
    },
  },
}

function toRem($value, isPercentage = false) {
  const baseFontSize = 16
  let value
  if (isPercentage) {
    value = (String($value).replace('%', '') / 100) * baseFontSize
  } else {
    value = String($value).replace('px', '')
  }
  return value / baseFontSize + 'rem'
}

function toPercent(px, base) {
  const baseValue = String(base).replace('px', '')
  return ((String(px).replace('px', '') / baseValue) * 100).toFixed() + '%'
}

function generateTypography(val) {
  const arr = Object.entries(val).map(([key, value]) => {
    const title = String(key).toLowerCase()

    const variacoes = Object.entries(value)
      .filter(([$key, $value]) => !$key.includes('*'))
      .map(([$key, { $value }]) => {
        const lineHeight = $value.lineHeight.includes('%')
          ? $value.lineHeight
          : toPercent($value.lineHeight, $value.fontSize)

        const isNegative = String($value.letterSpacing).includes('-')
        const _letterSpacing = $value.letterSpacing.replace('-', '')
        const letterSpacing = isNegative
          ? `-0.0${_letterSpacing}`
          : `0.0${_letterSpacing}`

        const result = {
          [`.text-${title}-${$key}`]: {
            fontSize: toRem($value.fontSize),
            letterSpacing,
            lineHeight,
            textTransform: $value.textTransform,
            fontWeight: $value.fontWeight,
            fontFamily: $value.fontFamily + ', sans serif',
          },
        }

        return { ...result }
      })

    return variacoes
  })

  return arr.flat().reduce((acc, item) => {
    return { ...acc, ...item }
  }, {})
}

const result = generateTypography($type)

console.log(result)

export default result
