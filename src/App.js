import React, { Component } from 'react';
import logo from './logo.svg';
import { LocaleProvider, DatePicker, message} from 'antd';
import './App.css';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import moment from 'moment';
import "antd/dist/antd.css";
import "./index.css";

moment.locale('zh-cn');
class App extends Component {
  state = {
    date: null,
  };

  handleChange = (date) => {
    message.info(`您选择的日期是: ${date.format('YYYY-MM-DD')}`);
    this.setState({ date });
  }

  render() {
    const { date } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            Edit <code>src/App.js</code> and save to reload.
            Edit <code>src/App.js</code> and save to reload.
            Edit <code>src/App.js</code> and save to reload.
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <LocaleProvider locale={zhCN}>
        <div style={{ width: 400, margin: '100px auto' }}>
          <DatePicker onChange={this.handleChange} />
          <div style={{ marginTop: 20 }}>
            当前日期：{date ? date.format('YYYY-MM-DD') : '未选择'}
          </div>
        </div>
      </LocaleProvider>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
