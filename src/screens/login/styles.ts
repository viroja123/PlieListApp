import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  topSection: {
    height: '40%',
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 42,
    fontWeight: '300',
    marginBottom: 20,
    color: '#fff'
  },
  imagePlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    flex: 1,
    paddingHorizontal: 20,
  },
  label: {
    marginTop: 10,
    marginBottom: 5,
    color: '#555',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    elevation: 2,
  },
  passwordBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 8,
    elevation: 2,
  },
  forgot: {
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  forgotText: {
    color: '#888',
    fontSize: 12
  },
  button: {
    backgroundColor: '#21D393',
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 0,
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  signup: {
    textAlign: 'right',
    marginTop: 10,
    fontSize: 12
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 12,
    color: '#888',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  socialBox: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    elevation: 2,
  },
  guest: {
    textAlign: 'right',
    color: '#999',
    marginTop: 6,
    fontSize: 12,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  }
});