import heroImg from './assets/hero.svg'
const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-center">
                <div className="hero-title">
                    <h1>Contentful CMS</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo rerum a sunt distinctio soluta ipsum dicta, fugiat assumenda odio doloremque incidunt voluptates molestiae expedita ratione, ex molestias, architecto sit nihil cum ipsa aspernatur. Vero nisi accusantium suscipit cum ratione ex, molestiae qui, reiciendis dicta ullam alias, obcaecati aperiam facere repellendus.
                    </p>
                </div>
                <div className="img-container">
                    <img src={heroImg} alt='woman and the browser' className='img' />
                </div>
            </div>
        </section>
    )
}
export default Hero;