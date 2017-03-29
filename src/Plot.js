const Plot = () => {
  return {
    keywords: {
      cheese: 'pork'
    },
    contains: [
      {
        className: 'inverse',
        begin: /!\w/,
        end: /\s/
      },
      {
        className: 'character',
        begin: /@\w/,
        end: /\s/
      },
      {
        className: 'setting',
        begin: /\|\w/,
        end: /\|/
      },
    ]
  }
}

export default Plot
