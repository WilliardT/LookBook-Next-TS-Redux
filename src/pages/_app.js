import '../app/globals.css'
import {Provider} from "react-redux";
import {store} from "../redux/store";

//import {ToastContainer} from "react-toastify";
//import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>

    );
}

export default MyApp;