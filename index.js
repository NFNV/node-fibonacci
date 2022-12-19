const express = require("express")
const app = express()

function getFibonacciSeries(numElements) {
  const series = [0, 1]

  for (let i = 2; i < numElements; i++) {
    series.push(series[i - 1] + series[i - 2])
  }

  return series
}

app.get("/fibonacci", (req, res) => {
  const numElements = req.query.num || 20

  let series

  if (isNaN(numElements)) {
    res.status(400).send({ error: "A number is needed." })
  } else {
    series = getFibonacciSeries(numElements)
    res.send({ series })
  }
})

const port = 3002
app.listen(port, () => {
  console.log(`Fibonacci service listening on port ${port}`)
})
