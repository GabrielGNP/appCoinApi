import { StyleSheet, Text, View } from 'react-native';

export default function Card({title, vol, opDay}) {

    return (
        <View style={styles.card}>
            {title != null ? (
                <Text style={styles.title}>{title}</Text>
            ) : (
                <Text style={styles.title}>Desconocido</Text>
            )}
            <View style={styles.rowInfo}>
                <View style={styles.infoContainer}>
                    <Text style={[styles.vol, styles.baseText]}>Volumen 1h</Text>
                    {vol != null ? (
                        <Text style={[styles.volR, styles.baseText]}>${vol}</Text>
                    ) : (
                        <Text style={[styles.volR, styles.baseText]}>-</Text>
                    )}
                </View>
                <View style={styles.infoContainer}>
                    <Text style={[styles.OpDay, styles.baseText]}>Operación del día</Text>
                    {opDay != null ? (
                        <Text style={[styles.OpDayR, styles.baseText]}>${opDay}</Text>
                    ) : (
                        <Text style={[styles.OpDayR, styles.baseText]}>-</Text>
                    )}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
      width: "80%",
      borderWidth: 3,
      padding: "5px",
      borderRadius: 10,
      borderColor: "#ffbe00",
      margin: 5,
      marginTop: 50,
    },
    title:{
      width: "75%",
      textAlign: "center",
      fontSize: 20,
      color:"white",
     
      left: "12.5%",
      borderWidth: 3,
      borderTopStartRadius: 15,
      borderTopEndRadius: 15,
      borderColor: "#ffbe00",
    },
    rowInfo:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: 10,
      marginBottom: 10
    },
    infoContainer:{
      alignItems: "center"
    },
    baseText:{
      color:"white"
    },
});
  
