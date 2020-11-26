import React from 'react'
import Button from '../packages/Button/index'
import SexRadio from '../packages/SexRadio/index'

// import { Button, SexRadio } from '../lib/main.js'

// import Button from '../lib/Button/Button.js'

// 按需加载
// import { Button } from 'iGoM-ui'

class App extends React.Component {
  render() {
    return (
      <div>
        <Button />
        <SexRadio />
      </div>
    )
  }
}

export default App