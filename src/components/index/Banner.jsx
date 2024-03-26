import typewriter from '../js/body'
import vd3 from '../videos/vd3.mp4'
export default function Banner() {
  return (
    <>
       <div className='container main-banner'>
       <video src={vd3} autoPlay muted loop/>
        <div className='banner-content'>
            <h1>Welcome to <span>code16</span></h1>
            <p>learn <span className="animatedText"></span></p>
            <p className='subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum porro, animi cupiditate accusamus aspernatur placeat ut cum nulla, voluptas eum labore neque adipisci suscipit quaerat numquam alias nesciunt consequuntur iusto?</p>
        </div>
       </div>
    </>
  )
}
