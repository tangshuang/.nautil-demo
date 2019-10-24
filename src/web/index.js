import { mount } from 'nautil/dom'
import { Component } from 'nautil'

import App from '../app/App.jsx'

import './index.less'

// class App extends Component {
//   state = {
//     type: false,
//   }
//   onInit() {
//     console.log('App.onInit')
//   }
//   onMounted() {
//     console.log('App.onMounted')
//   }
//   onUpdate() {
//     console.log('App.onUpdate')
//   }
//   onUpdated() {
//     console.log('App.onUpdated')
//   }
//   render() {
//     console.log(this._reactInternalFiber)
//     const fibertree = (
//       <A type={this.state.type}>
//         <B />
//         <button onClick={() => this.setState({ type: !this.state.type })}>change</button>
//       </A>
//     )
//     console.log(fibertree)
//     return fibertree
//   }
// }

// class A extends Component {
//   onInit() {
//     console.log('A.onInit')
//   }
//   onMounted() {
//     console.log('A.onMounted')
//   }
//   onUpdate() {
//     console.log('A.onUpdate')
//   }
//   onUpdated() {
//     console.log('A.onUpdated')
//   }
//   render() {
//     return this.props.type ? <C>{this.children}</C> : <D>{this.children}</D>
//   }
// }

// class B extends Component {
//   onInit() {
//     console.log('B.onInit')
//   }
//   onMounted() {
//     console.log('B.onMounted')
//   }
//   onUpdate() {
//     console.log('B.onUpdate')
//   }
//   onUpdated() {
//     console.log('B.onUpdated')
//   }
//   render() {
//     return 'B'
//   }
// }

// class C extends Component {
//   onInit() {
//     console.log('C.onInit')
//   }
//   onMounted() {
//     console.log('C.onMounted')
//   }
//   onUpdate() {
//     console.log('C.onUpdate')
//   }
//   onUpdated() {
//     console.log('C.onUpdated')
//   }
//   render() {
//     return this.children
//   }
// }

// class D extends Component {
//   onInit() {
//     console.log('D.onInit')
//   }
//   onMounted() {
//     console.log('D.onMounted')
//   }
//   onUpdate() {
//     console.log('D.onUpdate')
//   }
//   onUpdated() {
//     console.log('D.onUpdated')
//   }
//   render() {
//     return this.children
//   }
// }

mount('#app', App)
