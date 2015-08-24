
var UI = UI || {};



UI.Surface = React.createClass({
    getInitialState: function() {
        var state = { style: this.props.style || {} };
        state.style.position  = this.props.style.position  || "absolute";
        state.style.width     = this.props.style.width     || "100%";
        state.style.height    = this.props.style.height    || "100%";
        state.style.maxWidth  = this.props.style.maxWidth  || "100%";
        state.style.maxHeight = this.props.style.maxHeight || "100%";
        state.style.overflow  = state.style.overflow       || "hidden";
        state.style.left      = this.props.style.left      || "0px";
        state.style.top       = this.props.style.top       || "0px";
        state.style.fontSize  = this.props.style.fontSize  || "0px";
        return state;
    },
    render: function() {
        return (
            <div { ...this.props } style={this.state.style}>{ this.props.children }</div>
        );
    }
});



UI.ListView = React.createClass({
    getInitialState: function() {
        var state = { style: this.props.style || {} };
        state.style.width     = state.style.width     || 'inherit';
        state.style.overflowX = state.style.overflowX || "hidden";
        state.style.fontSize  = state.style.fontSize  || "0";
        return state;
    },
    render: function() {
        return (
            <div style={ this.state.style }>
                { this.props.children }
            </div>
        );
    }
});



UI.Label = React.createClass({
    render: function() {
        return (
            <p { ...this.props }>{ this.props.text }</p>
        );
    }
});

UI.Text = React.createClass({
    render: function() {
        return (
            <pre { ...this.props }>{ this.props.children }</pre>
        );
    }
});

UI.TextEdit = React.createClass({
    getInitialState: function() {
        return { value: this.props.value };
    },
    handleChange: function(event) {
        this.setState({ value: event.target.value });
    },
    render: function() {
        return (
            <textarea { ...this.props } value={ this.state.value } onChange={ this.handleChange } />
        );
    }
});

UI.Image = React.createClass({
    render: function() {
        return (
            <img { ...this.props } />
        );
    }
});

UI.Button = React.createClass({
    getInitialState: function() {
        var state = { style: this.props.style || {} };
        state.style.borderRadius = '0.7em';
        state.style.width        = this.props.text.length + 'em';
        state.style.fontSize     = '1em';
        state.style.height       = '1em';
        state.style.paddingTop   = '0.2em';
        state.style.paddingBottom = '0.2em';
        state.style.paddingLeft  = '0.5em';
        state.style.paddingRight = '0.5em';
        state.style.textAlign    = 'center';
        return state;
    },
    render: function() {
        return (
            <div { ...this.props } style={ this.state.style }>
                { this.props.text }
            </div>
        );
    }
});

UI.Link = React.createClass({
    render: function() {
        return (
            <a { ...this.props }>{ this.props.children }</a>
        );
    }
});


UI.Canvas = React.createClass({
    render: function() {
        return (
            <canvas { ...this.props }>{ this.props.children }</canvas>
        );
    }
});
