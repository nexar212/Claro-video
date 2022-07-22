

const initialState = {
    stringFiltrado: '',
    seleccionado: 0,
    vista: 'listado',
    pelicula: {
        id: 0,
        nombre: '',
        imagenHorizontal: '',
        imagenVertical: '',
        imagenDetalle: '',
        detalles: {
            anio: '',
            duracion: '',
            subtitulada: true,
            doblada: true,
            descripcion: ''
        },
        actores: [],
        escritores: [],
        genero: []
    },
    arrPeliculas: []
}

export const reducer = (state = initialState, action) => {
    
    if(action.type === 'CAMBIAR_VALOR_STRING_FILTRADO'){
        return  {...state, stringFiltrado: action.payload}
    }

    switch (action.type) {
        case 'SET_ARRAY_PELICULAS':
            return {...state, arrPeliculas: action.payload}
            break;

        case 'CAMBIAR_VALOR_STRING_FILTRADO' : 
            return {...state, stringFiltrado: action.payload}
            break;

        case 'IR_A_DETALLE':
            return {
                ...state,
                vista: 'detalle',
                seleccionado: action.payload
            }
            break;
        
        case 'SET_PELICULA_SELECCIONADA': 
            return {
                ...state,
                pelicula: action.payload,
            }
            break;
        case 'REGRESAR_LISTADO':
            return {
                ...initialState,
            }
    
        default:
            break;
    }

    return  state
}