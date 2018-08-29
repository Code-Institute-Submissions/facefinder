import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3'>
                {'This Is FaceFinder, Give It A Go.__STEP1: Go To google images, search for faces,__STEP2: click on a face , then right click & choose Copy image Address,__STEP3: go back to Face Finder & copy & paste in to the search form & vola,__ Powered By The Machine learnig Clarafi API'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
                    <button
                        className='w-30 grow f4 link ph3 pv2 dib white bg-light'
                        onClick={onButtonSubmit}
                    >Detect</button>
                </div>
            </div>
        </div>
    );
};

export default ImageLinkForm;