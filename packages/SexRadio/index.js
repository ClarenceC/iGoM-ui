import React from 'react'
import styles from './index.less'

class SexRadio extends React.Component {
  render() {
    return (
      <div className={styles['sexRadio']}>
        <input type="radio" id="male" name="gender" value="male"/>
        <label htmlFor="male">Male</label>
        <input type="radio" id="female" name="gender" value="female"/>
        <label htmlFor="female">Female</label>
      </div>
    )
  }
}

export default SexRadio