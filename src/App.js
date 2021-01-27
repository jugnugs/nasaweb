import React, { Component } from 'react';
import MainSection from './components/Globe';
import GroupedButton from './components/GroupedButton';
import Footer from './components/Footer';
import NavigtaionContext, { getNewDate } from './contexts/navigation';

import { MuiThemeProvider } from '@material-ui/core/styles';
import Timeline from './components/Timeline';
import { theme } from './theme';

import Responsive from 'react-responsive-decorator';

import './App.css';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showGlobe: true,
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  toggleDisplay = () => {
    this.setState({
      showGlobe: !this.state.showGlobe,
    });
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <NavigtaionContext.Provider
          value={{ source: 'ALL', date: getNewDate() }}
        >
          <div className="App">
            <div className="globe-container">
              <div className="col-lg-12 col-sm-12 main-section">
                <MainSection showGlobe={this.state.showGlobe} />
              </div>
              <div className="timeline-container">
                <Timeline
                  showGlobe={this.state.showGlobe}
                />
              </div>
              <div className="m-6">
                <div className="guide-1">
                  <GroupedButton
                    showGlobe={this.state.showGlobe}
                    toggleDisplay={this.toggleDisplay}
                  />
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </NavigtaionContext.Provider>
      </MuiThemeProvider>
    );
  }
}

export default React.memo(Responsive(App));
