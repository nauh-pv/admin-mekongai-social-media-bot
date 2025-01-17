import "antd/dist/reset.css";
import "../styles/globals.scss";
import "@/styles/index.css";
import { AppProvider } from "@/shared/context/ContextApp";
import { Provider } from "react-redux";
import store, { persistor } from "@/shared/redux/store";
import AuthInitializer from "@/components/AuthInitializer";
import LayoutWrapper from "@/shared/layout-components/LayoutWrapper";
import { PersistGate } from "redux-persist/integration/react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";

function MyApp({ Component, pageProps }: any) {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppProvider>
            <LayoutWrapper layout={Component.layout}>
              <AuthInitializer />
              <Component {...pageProps} />
            </LayoutWrapper>
          </AppProvider>
        </PersistGate>
      </Provider>
    </I18nextProvider>
  );
}

export default MyApp;
