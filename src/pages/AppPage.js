import React from 'react';
import wellplay from '../assets/img/wellplay.png';

function AppPage () {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-center font-bold text-2xl">Félicitation, vous êtes connectés !</h1>
            <img className="w-1/3 h-auto" src={wellplay} alt="Félicitation" />
        </div>
    )
}

export default AppPage;