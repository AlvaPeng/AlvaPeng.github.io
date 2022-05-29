import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


  class FeatureMidi extends React.Component {
    render() {
        return(
            <div className="feature">
              <div className="feature_title">
                {this.props.title}
              </div>
              <div className="feature_notion">
                {this.props.notion}
              </div>
            </div>
        );
    }
  }

  class FeatureTips extends React.Component {
    render() {
        return(
            <div className="feature">
              <div className="feature_title">
                {this.props.title}
              </div>
              <div className="feature_notion">
                {this.props.notion}
              </div>
            </div>
        );
    }
  }

  class FeatureCharacters extends React.Component {
    render() {
        return(
            <div className="feature">
              <div className="feature_title">
                {this.props.title}
              </div>
              <div className="feature_notion">
                {this.props.notion}
              </div>
            </div>
        );
    }
  }

  class FeatureCourse extends React.Component {
    render() {
        return(
            <div className="feature">
              <div className="feature_title">
                {this.props.title}
              </div>
              <div className="feature_notion">
                {this.props.notion}
              </div>
            </div>
        );
    }
  }

  class Main extends React.Component {
    render() {
      return (
        <div className="main">
            <div className="banner">
                <img src={require('./assets/bon_music_logo.png')} />
            </div>
            
            <div className="join_button">
                    <img src={require('./assets/button_join_hover.png')}
                    onMouseOver={()=>{
                        this.src = require('./assets/button_join.png')
                    }}
                    />
            </div>

            <div className="intro">
              <div className="intro_row">
                <FeatureMidi
                    title={'make music on your phone'}
                    notion={'easier than ever'}
                />
                <img className="card" src={require('./assets/card_1.png')} />
              </div>
                
              <div className="intro_row">
              <img className="card" src={require('./assets/card_2.png')} />
                <FeatureTips
                    title={'ultra beginner friendly'}
                    notion={'ezpz'}
                />
              </div>

              <div className="intro_row">
                <FeatureCharacters
                    title={'recruit your own animal band'}
                    notion={'find your favourite characters'}
                />
                <img className="card" src={require('./assets/card_3.png')} />
              </div>
              
              <div className="intro_row">
                <img className="card" src={require('./assets/card_4.png')} />
                <FeatureCourse
                    title={'learn music theory with interactive lessons'}
                    notion={'best lessons ever'}
                />
              </div>
            </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Main />);
  