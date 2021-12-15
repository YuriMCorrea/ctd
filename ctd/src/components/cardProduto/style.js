import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
    container: {
        backgroundColor: 'gray',
        flexDirection: 'row',
        marginTop: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },

    imagens: {
        width: 40,
        height: 40
    },

    idNomeCategoria: {
        flexDirection: 'row',
        width: '70%'
    },

    id: {
        backgroundColor: '#ff5757',
        margin: 10,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },

    nome: {
        backgroundColor: '#ff914d',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    categoria: {
        backgroundColor: '#5ce1e6',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    descricao: {
        backgroundColor: '#fdd837',
        margin: 10,
        height: 70,
        maxWidth: '100%'
    },

    quantidade: {
        backgroundColor: '#c9e265',
        margin: 10,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },

    data: {
        backgroundColor: '#cb6ce6',
        margin: 10,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },

    valor: {
        backgroundColor: '#7ed957',
        margin: 10,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    imegemApi: {
        maxWidth: '100%',
        maxHeight: '100%'
    }
})