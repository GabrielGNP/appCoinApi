import { StyleSheet, Text, View } from 'react-native';
export default function Card({title, vol, opDay}) {

    return (
        <View style={styles.card}>
            <Text style={styles.Logo}>$</Text>
            <View style={{width:"100%", alignItems:"flex-end"}}>
                {title != null ? (
                    <Text style={styles.title}>{title}</Text>
                ) : (
                    <Text style={styles.title}>Desconocido</Text>
                )}
            </View>
            <View style={styles.rowInfo}>
                <View style={styles.infoContainer}>
                    <Text style={[styles.varTitle]}>Volumen 1h:</Text>
                    {vol != null ? (
                        <Text style={[styles.contentVar, styles.baseText]}> ${vol}</Text>
                    ) : (
                        <Text style={[styles.contentVar, styles.baseText]}> -</Text>
                    )}
                </View>
                <View style={styles.infoContainer}>
                    <Text style={[styles.varTitle]}>Operación del día: </Text>
                    {opDay != null ? (
                        <Text style={[styles.contentVar, styles.baseText]}> ${opDay}</Text>
                    ) : (
                        <Text style={[styles.contentVar, styles.baseText]}> -</Text>
                    )}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: "95%",
        borderWidth: 3,
        padding: 5,
        borderRadius: 10,
        borderColor: "#664EFF",
        margin: 5,
        marginBottom: 30,
        backgroundColor: "#332687",
        shadowColor: "#664EFF",
        shadowRadius: 5,
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 1,
        elevation: 16,
    },
    Logo:{
        height: 40,
        width: 40,
        position: "absolute",
        top: 5,
        left: 5,
        borderRadius: 300,
        backgroundColor:"#664EFF",
        textAlign: "center",
        justifyContent: "center",
        fontSize: 30,
        fontWeight: "bold",
        color: "wheat",
        fontStyle: "italic"
    },
    title:{
        textAlign: "auto",
        fontSize: 20,
        color:"white",
        backgroundColor: "#4636ad",
        padding: 5,
        width: "50%",
        borderRadius: 10,
        right: "0%",    
    },
    rowInfo:{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      marginTop: 10,
      marginBottom: 10,
      alignItems: "flex-start"
    },
    infoContainer:{
      alignItems: "center",
      display:"flex",
      flexDirection:"row"
    },
    baseText:{
      height:"100%",
      color:"white"
    },
    varTitle:{
        backgroundColor:"#4636ad",
        padding: 2,
        paddingLeft:5,
        paddingRight:5,
        borderRadius:5,
        marginBottom:5,
        color:"white",
    }
});
  
