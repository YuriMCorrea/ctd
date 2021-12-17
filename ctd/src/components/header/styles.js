import  EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
    menu: {
        margin:'1rem',
        maxWidth: '100%',
        flexDirection:'row',
        justifyContent:'flex-end',
        position:'absolute',
        top:'2.3rem',
        right:'4.8rem'
    },
    menuTotal: {
      margin:'1rem',
      width: '100%',
      flexDirection:'column',
      
  },

    btnListar: {
        width:'7.5rem',
        height:'2.3rem',
        color:'#fff',
        backgroundColor:'#207b6e',
        textAlign:'center',
        padding:'0.5rem',
        marginRight:'0.5rem',
        borderColor:'#000',
        borderWidth:'0.1rem',
        borderRadius:'0.5rem',
        marginBottom:'1rem' ,
    },

    btnCadastrar: {
        width:'7.5rem',
        height:'2.3rem',
        color:'#fff',
        backgroundColor:'#207b6e',
        textAlign:'center',
        padding:'0.5rem',
        marginRight:'0.5rem',
        borderColor:'#000',
        borderWidth:'0.1rem',
        borderRadius:'0.5rem',
        marginBottom:'1rem' ,
        
    },

    logo: {
      width:60,
      height:60,
      marginTop:'2rem',
      marginLeft:'1rem',
      marginBottom:'1rem',
    },
    text: {
      fontWeight:'bold',
      fontSize:'120%',
      paddingTop:'0.1rem',
      paddingLeft:'1rem',
    },
    // -----------------------------   HEADER LISTAR --------------

    cHeader: {
        height: '15%',
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