import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
    container: {
        backgroundColor: 'gray',
        marginTop: 10,
        maxWidth: '100%',
        borderWidth: 3,
        borderRadius: 30,
        height: 530,
        borderColor: 'white',
    },

    safeArea: {
        alignItems: 'center'
    },

    imagensView: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginRight:"1rem",
    },

    descImagem: {
        flexDirection: 'row',
    },  
    
    imagens: {
        height: '1rem',
        width: '1rem',
        margin: '0.5rem',
        paddingRight: '1rem',
        marginRight:"10rem",
    },
    
    imagens2: {

        height: '1rem',
        width: '1rem',
        margin: '0.5rem',
        paddingRight: '1rem',

    },
    
    idDescricao: {
        maxWidth: '80%'
    },

    letraId: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20
    },  
    
    id: {
        backgroundColor: 'lightgray',
        margin: 10,
        borderWidth: 4,
        borderRadius: 100,
        borderColor: 'white',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    },
    
    nome: {
        backgroundColor: 'lightgray',
        marginLeft: 10,
        width: 295,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    
    categoria: {
        backgroundColor: 'white',
        marginLeft: 10,
        height: 40,
        width: 295,
        justifyContent: 'center',
        alignItems: 'center',
    },

    descricao: {
        backgroundColor: 'white',
        marginLeft: 10,
        marginRight: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        height: 70,
        width: 295,
        bottom: 0,
        flexDirection: 'column',
    },

    // qtdDtValor:{
    //     maxWidth: '10%',
    //     marginLeft: 10,
    //     flexDirection: 'row'
    // },
    
    quantidade: {
        backgroundColor: 'lightgray',
        marginLeft: 10,
        width: 295,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        // maxWidth: '40%'
    },
    
    data: {
        backgroundColor: 'white',
        marginLeft: 10,
        width: 295,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        // maxWidth: '50%'
    },
    
    valor: {
        backgroundColor: 'lightgray',
        width: 295,
        marginLeft: 10,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        // maxWidth: '40%'
    },
    
    fotoLink: {
        width: 295,
        height: 200,
        borderRadius: 10,
        marginTop: 20,
        marginLeft: 10,
        marginBottom: 10
    },

    viewImagem: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },

    idImg: {
        flexDirection: 'row'
    },
    
    letras: {
        color: '#000' 
    },

    letrasNome: {
        fontSize: 20,
        color: '#000'
    }
})