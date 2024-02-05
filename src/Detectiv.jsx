import { useState } from "react";


function Detectiv(){
    const [psih, setPsih] = useState('психопат');
    let sherlock = 'Шерлок';

    function hundlerClick(){
        setPsih('высокоактивный социопат')
    }

    return(
        <div>
            <div>
                {sherlock}-{psih}
            </div>
            <div>
                <button onClick={hundlerClick}>
                    узнать правду
                </button>
            </div>
        </div>
    )
}

export default Detectiv;