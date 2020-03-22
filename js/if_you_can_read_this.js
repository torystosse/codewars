function to_nato(words) {
  // turn nato alphabet into object
  let nato = {
    a: 'Alfa',
    b: 'Bravo',
    c: 'Charlie',
    d: 'Delta',
    e: 'Echo',
    f: 'Foxtrot',
    g: 'Golf',
    h: 'Hotel',
    i: 'India',
    j: 'Juliett',
    k: 'Kilo',
    l: 'Lima',
    m: 'Mike',
    n: 'November',
    o: 'Oscar',
    p: 'Papa',
    q: 'Quebec',
    r: 'Romeo',
    s: 'Sierra',
    t: 'Tango',
    u: 'Uniform',
    v: 'Victor',
    w: 'Whiskey',
    x: 'Xray',
    y: 'Yankee',
    z: 'Zulu'
  }

  let newArr = []
  // split str into arr & make lowercase, remove spaces, iterate through arr
  const arr = words.toLowerCase().replace(/\s+/g, '').split('').map(
    e => {
      // replace letter with matching one from object
      v = nato[e]
      // pushes v (nato word) to new array, or else pushes punctuation
      newArr.push(v !== undefined ? v : e)
    }
  )

  return newArr.join(' ')
}
