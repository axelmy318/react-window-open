import React, { useState, useEffect, useRef } from "react";
import { copyStyles } from "./copy-styles";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';


const NewWindow = props => {
    const [container, setContainer] = useState(null)
    const [shouldUpdate, setShouldUpdate] = useState(0)
    const newWindow = useRef(window)

    const copyUnloadedStyles = () => {
        copyStyles(document, newWindow.current.document);
    }

    useEffect(() => {
        const div = document.createElement('div')
        setContainer(div)
    }, [])

    useEffect(() => {
        if(container && newWindow.current) {
            newWindow.current = window.open("", "", `width=${props.width},height=${props.height},left=${props.left},right=${props.right},top=${props.top},bottom=${props.bottom}`)
            newWindow.current.document.body.appendChild(container)
            newWindow.current.addEventListener("beforeunload", () => {
                props.onClose();
            });

            const curWindow = newWindow.current
            return () => curWindow.close()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [container])

    return container && createPortal(<><title>{props.title}</title>{props.children}</>, container)
};

NewWindow.propTypes = {
    onClose: PropTypes.func,
    top: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    title: PropTypes.string
}

NewWindow.defaultProps = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 1920,
    height: 1080,
    title: 'New window',
    onClose: function () {}
}

export default NewWindow