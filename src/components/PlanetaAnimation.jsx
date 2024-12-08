import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";


const PlanetAnimation = () => {
    const { RiveComponent } = useRive({
        src: 'public/animations/planet_anim.riv', // Ruta del archivo .riv
        artboard: 'Artboard 8',                // Nombre exacto del artboard (con espacio incluido)
        // stateMachines: 'ButtonStateMachine',   // Nombre del State Machine si tiene
        autoplay: true,                        // Iniciar automáticamente la animación
    });


    return (
        <RiveComponent />
    )
}

export default PlanetAnimation