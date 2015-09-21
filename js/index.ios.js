'use strict';

var React = require('react-native');
var $__0=
  
  
  
  
  
  React,AppRegistry=$__0.AppRegistry,StyleSheet=$__0.StyleSheet,TabBarIOS=$__0.TabBarIOS,Text=$__0.Text,View=$__0.View;



var SampleApp = React.createClass({
  statics: {
    title: '<TabBarIOS>',
    description: 'Tab-based navigation.',
  },

  displayName: 'TabBarExample',

  getInitialState: function() {
    return {
      selectedTab: 'redTab',
      notifCount: 0,
      presses: 0,
    };
  },

  _renderContent: function(color, pageText, num) {
    return (
      React.createElement(View, {style: [styles.tabContent, {backgroundColor: color}]}, 
        React.createElement(Text, {style: styles.tabText}, pageText), 
        React.createElement(Text, {style: styles.tabText}, num, " re-renders of the ", pageText)
      )
    );
  },

  render: function() {
    return (
      React.createElement(TabBarIOS, {
        tintColor: "white", 
        barTintColor: "darkslateblue"}, 
        React.createElement(TabBarIOS.Item, {
          title: "Blue Tab",
          systemIcon: "history", 
          selected: this.state.selectedTab === 'blueTab', 
          onPress: function()  {
            this.setState({
              selectedTab: 'blueTab',
            });
          }.bind(this)}, 
          this._renderContent('#414A8C', 'Blue Tab')
        ), 
        React.createElement(TabBarIOS.Item, {
          systemIcon: "history", 
          badge: this.state.notifCount > 0 ? this.state.notifCount : undefined, 
          selected: this.state.selectedTab === 'redTab', 
          onPress: function()  {
            this.setState({
              selectedTab: 'redTab',
              notifCount: this.state.notifCount + 1,
            });
          }.bind(this)}, 
          this._renderContent('#783E33', 'Red Tab', this.state.notifCount)
        ), 
        React.createElement(TabBarIOS.Item, {
          systemIcon: "more", 
          selected: this.state.selectedTab === 'greenTab', 
          onPress: function()  {
            this.setState({
              selectedTab: 'greenTab',
              presses: this.state.presses + 1
            });
          }.bind(this)}, 
          this._renderContent('#21551C', 'Green Tab', this.state.presses)
        )
      )
    );
  },

});

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});


AppRegistry.registerComponent('SampleApp', function()  {return SampleApp;});
