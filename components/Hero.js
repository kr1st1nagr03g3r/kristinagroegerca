function Hero({ children }) {
    return (
        <div className="heroOuter">
            <div className="heroInner">
                {children}
            </div>
        </div>
    );
}

export default Hero;