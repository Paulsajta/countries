import './loader.css'

import React from 'react';
import {Transition} from "react-transition-group";

function Loader({status}) {

    return (
        <>
        <div className='loader1-wrap'>

            <Transition
                in={status}
                timeout={300}
                mountOnEnter
                unmountOnExit
            >
                {state => <div className={`loader1 ${state}`}></div>}

            </Transition>
            <span>{status ? 'loading...' : ''}</span>
        </div>
        </>
    );
}

export default Loader;