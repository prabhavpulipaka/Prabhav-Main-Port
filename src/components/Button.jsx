import PropTypes from 'prop-types';



const ButtonPrimary = ({
    href="https://drive.google.com/file/d/14zkKiVqsXS-FgG6Hya5Yq78anRZRnTRX/view?usp=sharing",
    target = '_self',
    label,
    icon,
    classes

}) => {
    if (href) {
        return(
            <a href={href}
               target={target}
               className={"btn btn-primary " + classes}>

                {label}
                {icon ? 
                <span className="materials-symbols-rounded" aria-hidden="true">
                </span>
                : undefined
            }
            </a>
        )
    }
    else{
        return(
            <button className={"btn btn-primary " + classes}>
                {label}
                {icon ? 
                <span className="materials-symbols-rounded" aria-hidden="true">
                </span>
                : undefined
            }


            </button>
        )
    }
}

ButtonPrimary.PropTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}


const ButtonOutline = ({
    href,
    target = '_self',
    label,
    icon,
    classes

}) => {
    if (href) {
        return(
            <a href={href}
               target={target}
               className={"btn btn-outline " + classes}>

                {label}
                {icon ? 
                <span className="materials-symbols-rounded" aria-hidden="true">
                </span>
                : undefined
            }
            </a>
        )
    }
    else{
        return(
            <button className={"btn btn-outline " + classes}>
                {label}
                {icon ? 
                <span className="materials-symbols-rounded" aria-hidden="true">
                </span>
                : undefined
            }


            </button>
        )
    }
}

ButtonOutline.PropTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}

export {
    ButtonPrimary,
    ButtonOutline
}