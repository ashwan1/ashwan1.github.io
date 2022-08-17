import React from 'react';

var timeout = null;

class BindEventToSvg extends React.PureComponent {

    callback(props) {
        document.querySelectorAll("#mlUses svg text").forEach(item => {
            item.addEventListener('click', e => {
                var targetElement = e.currentTarget;
                if (targetElement.innerHTML.toLowerCase().includes('ml for')) {
                    return;
                }
                document.querySelectorAll("#mlUses svg text").forEach(t => {t.style.fill = "black"});
                targetElement.style.fill = 'gray';
                if (targetElement.innerHTML.toLowerCase().includes('packaging')) {
                    document.getElementById('mlUsesDesc').innerHTML = document.getElementById('packaging').innerHTML;
                }
                if (targetElement.innerHTML.toLowerCase().includes('tracking')) {
                    document.getElementById('mlUsesDesc').innerHTML = document.getElementById('tracking').innerHTML;
                }
                if (targetElement.innerHTML.toLowerCase().includes('separating')) {
                    document.getElementById('mlUsesDesc').innerHTML = document.getElementById('separating').innerHTML;
                }
                if (targetElement.innerHTML.toLowerCase().includes('decomposition')) {
                    document.getElementById('mlUsesDesc').innerHTML = document.getElementById('decomposition').innerHTML;
                }
            })
        });
    }

    componentDidMount() {
        timeout = setTimeout(this.callback, 2000, this.props);
    }

    componentWillUnmount() {
        clearTimeout(timeout);
    }

    render() {
        return (null);
    }
}

export default BindEventToSvg;