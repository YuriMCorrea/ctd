import EStyleSheet from 'react-native-extended-stylesheet';


const styles = EStyleSheet.create({
    container: {
        backgroundColor: 'lightgrey',
        width: "20rem",
        marginTop: "5%",
        borderRadius:"1rem",
        borderWidth:2,
    },
    containerTema: {
        marginTop: "10%",
        marginBottom: "10%",
    },
    nomeTema: {
        fontSize: '1.5rem',
        color: "#FFF",
        textAlign: 'center',
        color: 'black',
        fontWeight: "bold",
    },
    form: {
        alignItems: "center",
        marginBottom: "10%",
    },
    nomeItem: {
        fontSize: '1rem', 
        color: "black",
        marginBottom: "2%",
        marginTop: "2%",
    },
    textInput: {
        backgroundColor: '#FFF',
        width: "80%",
        height: "2.5rem",
        borderRightWidth: 2,
        
    },
    textInput2: {
        backgroundColor: 'lightgrey',
        width: "80%",
        height: "2.5rem",
        borderRightWidth: 2,
    },
    textInputLink: {
        backgroundColor: '#FFF',
        width: "80%",
        height: "2.5rem",
        borderRightWidth: 2,
        borderBottomWidth: 2,
        borderBottomRightRadius:"rem",
    },
    containerBotao: {
        alignItems: "center",
        marginTop: "2%",    
    },
    botao: {
        width: "70%",
        height: "3rem",
        backgroundColor: "#ffd329",
        borderBottomWidth: 3,
        alignItems: "center",
        marginBottom: "10%",
        borderRadius: "0.7rem",
    },
    textoBotao: {
        textAlign: "center",
        marginTop:"0.8rem",
        fontWeight: "bold",
        fontSize: '1rem', 
    },





});

export default styles;