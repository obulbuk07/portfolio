import PixelBlast from "./PixelBlast";

function Background() {
    return (
        <div className="fixed inset-0 -z-10 w-screen h-screen bg-black pointer-events-none">
            <PixelBlast
                variant="circle"
                pixelSize={6}
                color="#7e7e7e"
                patternScale={2.5}
                patternDensity={1.3}
                enableRipples
                rippleSpeed={0.3}
                rippleThickness={0.17}
                rippleIntensityScale={1.3}
                speed={0.7}
                transparent
                edgeFade={0.5}
            />
        </div>
    );
}
export default Background;