import React from 'react';
import { StatsProps } from '../../util/interfaces';
import { secondsToTime } from '../../util/functions';

const Stats = ({timeCounter, gamesCounter, gamesWon, solution, setStats}: StatsProps) => {

    return(
        <div className=" bg-extraLightGrey dark:bg-darkBg dark:text-white w-auto h-auto border-2 border-[#000000] p-10 rounded-2xl">
        <h1 className=" font-bold text-3xl m-7 text-center">Estadísticas</h1>
        <div className='flex flex-row w-96 text-center justify-between items-center px-10'>
            <div className='flex flex-col'>
                <span className='font-bold text-2xl'>{gamesCounter}</span>
                <span>Jugadas</span>

            </div>
            <div className='flex flex-col'>
                <span className='font-bold text-2xl'>{gamesWon}</span>
                <span>Victorias</span>
            </div>
        </div> 
        <div className='flex flex-col justify-center text-center mt-6'>
            {
                timeCounter > 0 && <span className='my-6 text-sm'>La palabra era: <span className='font-bold'>{solution}</span></span>
            }
            <span className='text-sm'>SIGUIENTE PALABRA</span>
            <span className='mt-2 mb-6 font-bold'>{timeCounter ? secondsToTime(timeCounter) : '0:00'}</span>
            <button className="w-48 p-1 bg-green text-2xl font-medium text-white self-center rounded" onClick={() => setStats((stats:any) => !stats )}>
                Aceptar
            </button>
        </div>
      </div>
    )
}

export default Stats;