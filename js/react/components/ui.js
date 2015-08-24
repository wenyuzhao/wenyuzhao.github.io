
var UI = UI || {};







UI.AutoDiv = React.createClass({
    mixins: [ScrollListenerMixin],
    getInitialState: function() {
        var state = {
            style:        this.props.style        || {},
            imageStyle:   this.props.imageStyle   || {}
        };
        state.style.position = state.style.position || 'relative';
        state.style.width    = state.style.width    || 'inherit';
        state.style.overflow = state.style.overflow || 'hidden';

        state.imageStyle.position = state.imageStyle.position || 'absolute';
        state.imageStyle.width    = state.imageStyle.width    || '100%';
        state.imageStyle.height   = state.imageStyle.height   || 'auto';
        state.imageStyle.top      = state.imageStyle.top      || '0';
        state.imageStyle.left     = state.imageStyle.left     || '0';

        return state;
    },
    onPageScroll: function() {
        var thisNode = React.findDOMNode(this);
        var img = thisNode.children[1].children[0];

        var top = (function getTotalOffsetTop(node) {
            var __top = node.offsetTop || 0;
            if(node.parentNode) return getTotalOffsetTop(node.parentNode) + __top;
            else return __top;
        })(thisNode.children[1]) - this.state.scrollTop;

        var screenHeight = document.documentElement.clientHeight;
        var divHeight = thisNode.children[1].offsetHeight;
        var imgHeight = img.offsetHeight;

        if(top >= - divHeight / 2 && top <= screenHeight) {
            var css = this.state.imageStyle;
            css.top = (divHeight - imgHeight) / (screenHeight + divHeight) * (screenHeight - top);
            this.setState({ imageStyle: css });
        }
    },
    render: function() {
        filter = this.props.imgFilter || 'blur(0px)';
        return (
            <UI.Surface { ...this.props } style={ this.state.style }>
                <UI.Surface style={{ position: 'absolute', width: '100%', height: '50%', left: '0', top: '0', overflow: 'hidden', fontSize: this.props.style.fontSize ? this.props.style.fontSize : '1rem' }}>
                    { this.props.children }
                </UI.Surface>
                <UI.Surface style={{ position: 'absolute', width: '100%', height: '50%', left: '0', top: '50%', overflow: 'hidden', filter: filter, WebkitFilter: filter, msFilter: filter }}>
                    <UI.Image src={ this.props.image } style={ this.state.imageStyle }/>
                </UI.Surface>
            </UI.Surface>
        );
    }
});
