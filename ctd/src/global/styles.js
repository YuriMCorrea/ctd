import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({

// -----------------------------   CONTAINER LISTAR --------------
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightyellow'
      },
    
// -----------------------------   HEADER LISTAR --------------

      cHeader: {
        height: '15%',
        width: '100%',
        backgroundColor:'yellow',
      },

      cHeaderTxt: {
        textAlign: 'center',
        fontSize:'3rem',
        padding: '2rem',
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