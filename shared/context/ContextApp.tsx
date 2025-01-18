import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { LoadingComponent } from "@/components/Loading";

interface AppContextType {
  handleConnectFacebook: () => void;
  pathName: string;
  setPathName: any;
  listFile: any[];
  setListFile: any;
}
const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

interface listFileNew {
  fileName: string;
  dateModified: string;
  category: string;
  size: string;
  collectionName: string;
  key: number;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [pathName, setPathName] = useState<string>("");
  const [listFile, setListFile] = useState<listFileNew[]>([]);

  const { user } = useSelector((state: RootState) => state.auth);
  const isLoadingGlobal = useSelector(
    (state: RootState) => state.loading.global
  );

  let authWindow: Window | null = null;

  const handleConnectFacebook = useCallback(() => {
    const fbAuthURL = `https://www.facebook.com/v20.0/dialog/oauth?client_id=1054545482977612&redirect_uri=https://social-media-bot.mekongai.com/api/v1/facebook/connect&client_secret=7b985a0d06456e7fb38205681d21d991&scope=pages_show_list,pages_messaging,public_profile,pages_manage_metadata&response_type=code&state=${user?.userId}`;
    authWindow = window.open(fbAuthURL, "fbAuthWindow", "width=600,height=700");
    if (!authWindow) {
      console.log("Popup bị chặn! Vui lòng cho phép popup để tiếp tục.");
    }
  }, [user]);

  return (
    <AppContext.Provider
      value={{
        handleConnectFacebook,
        pathName,
        setPathName,
        listFile,
        setListFile,
      }}
    >
      {isLoadingGlobal ? (
        <div className="w-[100%] h-[100vh]">
          <LoadingComponent />
        </div>
      ) : (
        children
      )}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a GlobalProvider");
  }
  return context;
};
