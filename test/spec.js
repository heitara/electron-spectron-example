const Application = require('spectron').Application
const assert = require('assert')
const electronPath = require('electron') // Require Electron from the binaries included in node_modules.
const path = require('path')
var robot = require("robotjs");

describe('Application launch', function () {
  this.timeout(10000)

  beforeEach(function () {
    this.app = new Application({
      // Your electron path can be any binary
      // i.e for OSX an example path could be '/Applications/MyApp.app/Contents/MacOS/MyApp'
      // But for the sake of the example we fetch it from our node_modules.
      path: electronPath,

      // Assuming you have the following directory structure

      //  |__ my project
      //     |__ ...
      //     |__ main.js
      //     |__ package.json
      //     |__ index.html
      //     |__ ...
      //     |__ test
      //        |__ spec.js  <- You are here! ~ Well you should be.

      // The following line tells spectron to look and use the main.js file
      // and the package.json located 1 level above.
      args: [path.join(__dirname, '..')]
    })
    return this.app.start()
  })

  afterEach(function () {
    if (this.app && this.app.isRunning()) {
    //   return this.app.stop()
    }
  })

//   it('shows an initial window', function () {
//     return this.app.client.getWindowCount().then(function (count) {
//       assert.equal(count, 1)
//       // Please note that getWindowCount() will return 2 if `dev tools` are opened.
//       // assert.equal(count, 2)
//     })
//   })

//   it('click red button', async function () {
//     const ELEMENT_SELECTOR = '#red'
//     const LOGGER_ELEMENT_SELECTOR = '#logger'
    
//     await this.app.client.waitUntilWindowLoaded()
//     let element = await this.app.client.$(ELEMENT_SELECTOR)
//     element.click({button: 0})
    
//     let logger = await this.app.client.$(LOGGER_ELEMENT_SELECTOR)
//     let text = await logger.getText()

//     assert.strictEqual(text, "L:Red button was clicked.")
//   })

//   it('double click red button', async function () {
//     const ELEMENT_SELECTOR = '#red'
//     const LOGGER_ELEMENT_SELECTOR = '#logger'
    
//     await this.app.client.waitUntilWindowLoaded()
//     let element = await this.app.client.$(ELEMENT_SELECTOR)
//     element.doubleClick({button: 0})
    
//     let logger = await this.app.client.$(LOGGER_ELEMENT_SELECTOR)
//     let text = await logger.getText()

//     assert.strictEqual(text, "L:Red button was dblclicked.")
//   })

  it('right click red button', async function () {
    const ELEMENT_SELECTOR = '#red'
    const LOGGER_ELEMENT_SELECTOR = '#logger'
    
    await this.app.client.waitUntilWindowLoaded()
    let element = await this.app.client.$(ELEMENT_SELECTOR)
    await element.click({button: 2})

    // this.app.client.keys(["e", "Enter"])
    //uses permissions 
    robot.keyTap("e")
    robot.keyTap("enter")

    let logger = await this.app.client.$(LOGGER_ELEMENT_SELECTOR)
    let text = await logger.getText()

    assert.strictEqual(text, "L:Red button was dblclicked.")
  })
})