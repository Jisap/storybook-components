import './mylabel.css';

export interface MyLabelProps {
    /**
     * Este es el mensaje a mostrar en la etiqueta 
     */
    label: string;
    /**
     * Este es el tamaño de la etiqueta
     */
    size: 'normal'|'h1'|'h2'|'h3';
    /** 
    * Cambia a mayúsculas el contenido del label
    */
    allCaps?: boolean;
    /**
    * Cambia el color del label
    */
    color?: 'primary'|'secondary'|'tertiary';
    /**
    * Color especial seleccionado 
    */
    fontColor?: string;
    /**
    * Color de fondo seleccionado 
    */
    backgroundColor?: string;
}

export const MyLabel = ( {
    label = 'No Label',
    size = 'normal',
    allCaps = false,
    color = 'primary',
    fontColor,
    backgroundColor='transparent'
} :MyLabelProps) => {
  return (
    <span 
      className={ `label ${ size } text-${color}`}
      style={{ color: fontColor, backgroundColor }}  
    >
        { allCaps ? label.toUpperCase() : label }
    </span>
  )
}

export default MyLabel;
