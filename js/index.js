
var Device = {
    desktop: document.documentElement.clientWidth > document.documentElement.clientHeight,
    mobile:  document.documentElement.clientWidth <= document.documentElement.clientHeight,
    edge: navigator.userAgent.indexOf('Edge') >= 0
}



var CSS = CSS || {};

if(Device.desktop) {

CSS.autoDiv = {
    position: 'relative',
    width: 'inherit',
    height: '62vw',
    fontSize: '32px'
};

}
else {

CSS.autoDiv = {
    position: 'relative',
    width: 'inherit',
    height: '100vh',
    fontSize: '0'
};

}



/*<Item title='', subTitle='', description='', href=''/>*/
UI.Index = {};

UI.Index.CoverCanvas = React.createClass({
    render: function() {
        return (
            <UI.Canvas id={'cover'} width={ document.documentElement.clientWidth * 2 } height={ document.documentElement.clientHeight * 2 } style={{ position: 'relative', width: document.documentElement.clientWidth, height: document.documentElement.clientHeight }}>
            </UI.Canvas>
        );
    }
});


UI.Index.Item = React.createClass({

    handleMouseOver: function() {
        React.findDOMNode(this).children[0].style.background = '#2196F3';
        React.findDOMNode(this).children[0].style.color = 'white';
    },
    handleMouseOut: function() {
        React.findDOMNode(this).children[0].style.background = 'white';
        React.findDOMNode(this).children[0].style.color = 'black';
    },
    render: function() {
        var dom = (
            <UI.Surface id='section' style={{ position: 'absolute', width: '100%', height: '100%', left: '0', top: '0', overflow: 'hidden', color: 'black' }}>
                <UI.Surface style={{ position: 'absolute', width: '80%', height: '30%', left: '10%', top: '10%', overflow: 'hidden', overflowX: 'auto' }}>
                    <UI.Label id='title' style={{ position: 'relative', display: 'inline-block', fontSize: Device.desktop? '5rem' : '1.5rem' }} text={ this.props.title }/>
                    <UI.Label style={{ position: 'relative', display: 'inline-block', fontSize: Device.desktop? '3rem' : '1rem' }} text={ this.props.subTitle ? ': ' + this.props.subTitle : '' }/>
                </UI.Surface>
                <UI.Label style={{ position: 'absolute', width: '80%', height: Device.desktop? '40%' : '50%', left: '10%', bottom: '10%', overflowY: 'auto', fontSize: Device.desktop? '2rem' : '1rem', wordWrap: 'break-word', wordBreak: 'normal' }} text={ this.props.description }/>
            </UI.Surface>
        );

        if(this.props.href)
            return (
                <UI.Link id='link' href={ this.props.href } style={{ position: 'absolute', width: '100%', height: '100%', left: '0', top: '0' }} onTouchStart={ this.handleMouseOver } onTouchCancel={ this.handleMouseOut } onTouchEnd={ this.handleMouseOut } onMouseOver={ this.handleMouseOver } onMouseOut={ this.handleMouseOut }>
                    { dom }
                </UI.Link>
            );
        else
            return dom;
    }
});











React.render(
    <UI.ListView id='main'>
        <UI.Index.CoverCanvas/>
    
        <UI.AutoDiv style={ CSS.autoDiv } image={ 'img/index/autojs.jpg' }>
            <UI.Index.Item title={ 'AutoJS' } subTitle={ 'a smarter way to adjust GUI.' } href={ 'https://github.com/wenyuzhao/AutoJS' } description={
                'AutoJS is a JavaScript library which uses mechine learning techniques to record and analyze webpage clicking/touching events to adjust position, size and color of each DOM node to improve user experience.'
            }/>
        </UI.AutoDiv>
        <UI.AutoDiv style={ CSS.autoDiv } image={ 'img/index/num.jpg' }>
            <UI.Index.Item title={ 'NumTL' } subTitle={ 'c++ numerical analysis library' } href={ 'https://github.com/wenyuzhao/num' } description={
                'Num Template Library(num) is an numerical analysis library written in c++11. ' +
                'Num contains data structures and algorithms in the field of Linear Algebra, Abstract Algebra and Graph Theory. ' +
                'Basic tools of data visualization are also provided.'
            }/>
        </UI.AutoDiv>
        <UI.AutoDiv style={ CSS.autoDiv } image={ 'img/index/blog.jpg' }>
            <UI.Index.Item title={ 'My Blog' } subTitle={ '' } href={ 'http://wenyuzhao.me/blog.html' } description={
                'In this blog you can see how lazy I am. :)'
            }/>
        </UI.AutoDiv>

        <UI.AutoDiv style={ CSS.autoDiv } image={ 'img/index/end.jpg' }>
            <UI.Index.Item title={ 'Contact me' } subTitle={ '' } href={ 'mailto:this.wenyuzhao@gmail.com' } description={
                'Email: this.wenyuzhao@gmail.com'
            }/>
        </UI.AutoDiv>
    </UI.ListView>,

    document.querySelector('body')
);




WINDOW_RESIZED = false;
window.addEventListener('resize', function() {
    WINDOW_RESIZED = true;
});

try {

Math.hypot = Math.hypot || function(a, b) {
    return Math.sqrt(a * a + b * b);
};

(function draw() {
    
    var canvas = document.getElementById('cover');
    var rect = { w: document.documentElement.clientWidth * 2, h: document.documentElement.clientHeight * 2 };
    var context = canvas.getContext('2d');

    var painter = {
        clear: function() {
            context.fillStyle="#2196f3";
            context.fillRect(0, 0, rect.w, rect.h);
        },
        circle: function(x, y, r) {
            context.fillStyle="#ffffff";
            context.beginPath();
            context.arc(x, y, r, 0, Math.PI*2, true);
            context.closePath();
            context.fill();
        },
        text: function(x, y, str) {
            context.fillStyle = "#2196f3";
            if(Device.edge) context.font = (rect.h / 5) + "px Arial";
            else if(Device.desktop) context.font = "20rem Century Gothic";
            else context.font = "10rem sans-serif";
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillText(str, x, y);
        },
        arrow: function(x, y, h) {
            context.fillStyle = "#2196f3";

            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(x - 1.732 * h, y - h);
            context.lineTo(x + 1.732 * h, y - h);
            context.closePath();

            context.fill();
        }
    };
    
    var circle = {
        x: rect.w * Math.random(),
        y: rect.h * Math.random(),
        r: 0,
        r_max: 0
    };

    circle.r_max = Math.max(
        Math.hypot(circle.x, circle.y),
        Math.hypot(rect.w - circle.x, circle.y),
        Math.hypot(circle.x, rect.h - circle.y),
        Math.hypot(rect.w - circle.x, rect.h - circle.y)
    );

    var lastTime = 0;


    (function paint(time) {

        var delta = time - lastTime;
        lastTime = time;


        if(WINDOW_RESIZED) {
            canvas.width = document.documentElement.clientWidth * 2;
            canvas.height = document.documentElement.clientHeight * 2;
            canvas.style.width = document.documentElement.clientWidth + 'px';
            canvas.style.height = document.documentElement.clientHeight + 'px';
    
    
            rect = { w: document.documentElement.clientWidth * 2, h: document.documentElement.clientHeight * 2 };
    
            
            circle = {
                x: rect.w * Math.random(),
                y: rect.h * Math.random(),
                r: 0,
                r_max: 0
            };
            WINDOW_RESIZED = false;
        }

        // clear
        painter.clear();

        // draw circle
        if(circle.r <= circle.r_max && circle.r_max != 0) painter.circle(circle.x, circle.y, circle.r += (delta * circle.r_max / 3000));
        else {
            circle = { x: rect.w * Math.random(), y: rect.h * Math.random(), r: 0 };
            circle.r_max = Math.max(
                Math.hypot(circle.x, circle.y),
                Math.hypot(rect.w - circle.x, circle.y),
                Math.hypot(circle.x, rect.h - circle.y),
                Math.hypot(rect.w - circle.x, rect.h - circle.y)
            );
        }


        // draw text
        painter.text(rect.w / 2, rect.h /2, "William");

        // draw arrow
        //if(Device.desktop)
            painter.arrow(rect.w / 2, rect.h * 9 / 10, rect.h / 20)

        requestAnimationFrame(paint);
    })();
})();


} catch(e) { console.log(e); }
