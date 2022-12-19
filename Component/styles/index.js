import { StyleSheet } from "react-native";
import LinearGradient from 'react-native-linear-gradient'
import { horizontalScale,moderateScale, verticalScale  } from "../navigation/data/metrics";

const styles = StyleSheet.create({
    btnStyle: {
      backgroundColor: 'green',
      height: 50,
      marginHorizontal: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      elevation: 20,
      shadowColor: 'green',
    },
    titleText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'black',
    },
    Text: {
      fontSize: 14,
      marginTop: 20,
      marginLeft: 10,
      fontWeight: 'bold',
      color: 'black',
    },
    input: {
      height: 40,
      margin: 12,
      marginTop: 20,
      borderWidth: 1,
      padding: 10,
      color: 'black',
    },
    //Blood Page CSS
    req:{
      backgroundColor: '#6a6acc',
      height: 50,
      marginHorizontal: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      elevation: 20,
      shadowColor: 'blue',
      marginTop: verticalScale(80),
    },
    donate:{
      
      backgroundColor: `#6a6acc`,
      height: 50,
      marginHorizontal: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      elevation: 20,
      // shadowColor: 'blue',
      marginTop: verticalScale(30),
    },
    //donorPage
    donorForm:{
      height: verticalScale(40),
      width: horizontalScale(250),
      alignItems: 'center',
      marginRight:horizontalScale(10),
      marginLeft:horizontalScale(60),
      marginTop:verticalScale(30) 
      
    },
    submit:{
       marginTop:verticalScale(60),
       backgroundColor: '#6a6acc',
      height: verticalScale(50),
      marginHorizontal: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      elevation: 20,
      shadowColor: '#6a6acc',
    },
    errormsg: {
      color: 'black',
      fontSize: 14,
      backgroundColor: '#6a6acc',
      padding: 5,
      borderRadius: 10,
      textAlign: 'center',
      marginHorizontal: 60
    }

  });
export default styles;