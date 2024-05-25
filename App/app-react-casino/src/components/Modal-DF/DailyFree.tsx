import './DailyFree.css';

export const DailyFree = ({onClose}: {onClose: Function}) => {
  return (
    <div className='dailyFree-container' onClick={e => {
      if((e.target as HTMLElement).className === "dailyFree-container") {
      onClose()}
      }}>
      <div className='dailyFree-container'>
        <div className='dailyFree border-[color:var(--violeta)]' onClick={e => e.stopPropagation()}>
          <div className='content2 triangulo'></div>
          <div className=''>
            <p>REMAIN</p>
            <p>09:12 hs</p>
            <button className='bg-[color:var(--amarillo)] claim-button px-2 py-[0.2px]'>CLAIM</button>
          </div>
        </div>
      </div>
    </div>
  )
}