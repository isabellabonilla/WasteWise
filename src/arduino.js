// const WebSocket = require('ws')
// const { SerialPort } = require('serialport')
// const { ReadlineParser } = require('@serialport/parser-readline')

// const port = new SerialPort({ path: '/dev/cu.usbmodem144101', baudRate: 9600 })
// const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }))

// const wss = new WebSocket.Server({ port: 8080 })

// wss.on('connection', (ws) => {
//   console.log('Client connected')
//   parser.on('data', (data) => {
//     const [moisture, temperature, tooHot, tooCold, tooWet, tooDry] = data.split(',').map(Number)
//     ws.send(
//       JSON.stringify({
//         moisture,
//         temperature,
//         tooHot: Boolean(tooHot),
//         tooCold: Boolean(tooCold),
//         tooWet: Boolean(tooWet),
//         tooDry: Boolean(tooDry),
//       }),
//     )
//   })
// })
// console.log('Arduino reader started on port 8080')

const WebSocket = require('ws')
const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')

const port = new SerialPort({ path: '/dev/cu.usbmodem144101', baudRate: 9600 })
const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }))

const wss = new WebSocket.Server({ port: 8080 })

wss.on('connection', (ws) => {
  console.log('Client connected')
  parser.on('data', (data) => {
    const [moisture, temperature, tooHot, tooCold, tooWet, tooDry] = data.split(',').map(Number)
    ws.send(
      JSON.stringify({
        moisture,
        temperature,
        tooHot: Boolean(tooHot),
        tooCold: Boolean(tooCold),
        tooWet: Boolean(tooWet),
        tooDry: Boolean(tooDry),
      }),
    )
  })
})

console.log('Arduino reader started on port 8080')
