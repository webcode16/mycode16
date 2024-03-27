import typewriter from '../js/body'
import robo from '../videos/robo2.gif'
export default function Banner() {
  return (
    <>
      <div className='container main-banner btn'>
        <div className='banner-content'>
          <h1>Welcome to <span>CODE 16</span></h1>
          <p>learn <span className="animatedText"></span></p>
          <p className='subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum porro, animi cupiditate accusamus aspernatur placeat ut cum nulla, voluptas eum labore neque adipisci suscipit quaerat numquam alias nesciunt consequuntur iusto?</p>
          <button><a href="#">Get Started</a></button>
          <button><a href="#">Intro</a></button>
        </div>
        <div className='robo'>
          <img src={robo} alt="loading" />
        </div>
      </div>
    </>
  )
}
