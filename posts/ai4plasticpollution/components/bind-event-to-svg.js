import React from 'react';

var timeout = null;

class BindEventToSvg extends React.PureComponent {

    callback(props) {
        document.querySelectorAll("#mlUses svg text").forEach(item => {
            item.addEventListener('click', e => {
                var targetElement = e.currentTarget;
                if (targetElement.innerHTML.toLowerCase().includes('packaging')) {
                    document.getElementById('mlUsesDesc').innerHTML = 'You clicked efficient packaging.';
                }
                if (targetElement.innerHTML.toLowerCase().includes('tracking')) {
                    document.getElementById('mlUsesDesc').innerHTML = 'You clicked tracking plastics.';
                }
                if (targetElement.innerHTML.toLowerCase().includes('separating')) {
                    document.getElementById('mlUsesDesc').innerHTML = 'You clicked separating plastics.';
                }
                if (targetElement.innerHTML.toLowerCase().includes('decomposition')) {
                    document.getElementById('mlUsesDesc').innerHTML = 'You clicked plastic decomposition.';
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