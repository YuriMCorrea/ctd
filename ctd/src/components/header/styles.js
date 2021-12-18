import  EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
    menu: {
        margin:'1rem',
        maxWidth: '100%',
        flexDirection:'row',
        justifyContent:'center',
        position:'absolute',
        top:'2.3rem',
        right:'4.8rem'
    },
    menuTotal: {
      margin:'2rem',
      width: '100%',
      flexDirection:'column',
      
  },

    btnListar: {
        width:'6rem',
        height:'2.3rem',
        color:'#fff',
        backgroundColor:'#207b6e',
        textAlign:'center',
        padding:'0.5rem',
        marginRight:'0.5rem',
        borderColor:'#000',
        borderWidth:'0.1rem',
        borderRadius:'0.5rem',
        marginBottom:'0.2rem' ,
    },

    btnCadastrar: {
        width:'6rem',
        height:'2.3rem',
        color:'#fff',
        backgroundColor:'#207b6e',
        textAlign:'center',
        padding:'0.5rem',
        marginRight:'0.5rem',
        borderColor:'#000',
        borderWidth:'0.1rem',
        borderRadius:'0.5rem',
        marginBottom:'0.2rem' ,
        
    },

    logo: {
      width:40,
      height:40,
      marginTop:'2rem',
      marginLeft:'1rem',
      marginBottom:'1rem',
    },
    text: {
      fontWeight:'bold',
      fontSize:'1.3rem',
      paddingTop:'1rem',
      maxWidth:'100%',
    },
    // -----------------------------   HEADER LISTAR --------------

    cHeader: {
        height: '8rem',
        maxWidth: '100%',
        backgroundColor:'gold',
        flexDirection:'row',
        borderBottomWidth: 1,
      },

// -----------------------------   BODY LISTAR --------------
      cBody: {
        height: '85%',
        width: '100%',
      },

      cBodyTxt: {
        textAlign: 'center',
        fontSize:'3rem',
        padding: '12rem',
      },

});