import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    width: 250,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  containerAvailable: {
    width: "100%",
    backgroundColor: "#fff",
    alignContent: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    padding: 10,
    marginTop: 16,
  },
  logoContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
  logo: { width: "100%", height: "100%" },
  companyName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginTop: 12 / 1.5,
  },
});
