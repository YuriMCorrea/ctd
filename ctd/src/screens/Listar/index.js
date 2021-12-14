import React from 'react';
import { styles } from '../../global/styles';
import { View, Text } from 'react-native';

function Listar(){
    
    return(
        <>
            <View style={styles.cHeader}>
                <Text style={styles.cHeaderTxt}>HEADER</Text>
              </View>

              <View style={styles.cBody}>
                <Text style={styles.cBodyTxt}>BODY</Text>
              </View>
        </>
    );
};

export default Listar;