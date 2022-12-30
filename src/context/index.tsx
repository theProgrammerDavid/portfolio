import React from "react";
import { Theme, iContext } from "../models";



export const ThemeContext = React.createContext<iContext | null>(null);

const ThemeProvider = ({ children }: { children: any }) => {
    // const [themeMode, setThemeMode] = React.useState<Theme>('DARK');
    // return (
    //     <ThemeContext.Provider value={{ currentTheme: themeMode, changeTheme: setThemeMode }}>
    //         {children}
    //     </ThemeContext.Provider>
    // );
};
export default ThemeProvider;