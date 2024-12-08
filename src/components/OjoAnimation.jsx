
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";


const OjoAnimation = () => {
    const { RiveComponent } = useRive({
        src: '/animations/ojo_anim.riv', // Ruta del archivo .riv
        artboard: 'Artboard 6',                // Nombre exacto del artboard (con espacio incluido)
        // stateMachines: 'ButtonStateMachine',   // Nombre del State Machine si tiene
        autoplay: true,                        // Iniciar automáticamente la animación
    });
    return (
        <RiveComponent

        />

    )
}

export default OjoAnimation