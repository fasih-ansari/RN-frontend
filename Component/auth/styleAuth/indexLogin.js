import { StyleSheet } from "react-native";
const styleAuth = StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",
        display:"flex"
    },
    imageBG:{
        position: "absolute",
        zIndex: -1,
        height:"100%",
        width:"100%",
    },
    container1:{
        marginTop: "125%"
    },
    s1:{
        display: "flex",
        // justifyContent:"center",
        // alignItems:"center",
        padding:60,
        height:"50%"
    },
    head:{
        fontWeight: "900",
        fontSize: 40,
        color: "white",
        fontFamily: "serif",
        textAlign: "center",
    },
    container2:{
        height: "100%",
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    s2:{
        display:"flex",
        width:"100%",
        height:"50%",
        backgroundColor:"white",
        backgroundColor:"#e6ecf0",
        borderTopLeftRadius: 80,
        // borderTopRightRadius: 40,
        borderBottomRightRadius: 80
    },
    btnStyle: {
        backgroundColor: '#6a6acc',
        height: 50,
        marginHorizontal: 90,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 20,
        marginTop: 20
      },
    h1:{
        fontWeight: "900",
        fontSize: 32,
        color: "black",
        fontFamily: "cursive",
        textAlign: "center"
    },
    h2:{
        fontWeight: "200",
        fontSize: 16,
        color: "black",
        fontFamily: "serif",
        textAlign: "center"
    },
    Lform:{
        display: "flex"
    },
    label:{
        fontWeight: "200",
        fontSize: 16,
        color: "black",
        fontFamily: "serif",
        marginLeft: 25,
        marginTop: 5,
        marginBottom:5
    },
    input:{
        backgroundColor:"#d5dce0",
        borderRadius:10,
        padding: 10,
        marginHorizontal: 20
    },
    fp:{
        display: "flex",
        alignItems:"flex-end",
        marginHorizontal: 20
    },
    link:{
        fontSize: 12,
        color: "black",
        fontFamily: "serif",
        marginTop: 5,
    },
    h3:{
        fontWeight: "200",
        fontSize: 10,
        color: "grey",
        fontFamily: "serif",
        textAlign: "center",
        marginTop: 10,
    },
});
export default styleAuth;