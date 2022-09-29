import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { GlobalStyles } from "@mui/material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, globalStyles, lightTheme } from "./theme";

const MUIThemeProvider = ({
    children,
}) => {
    const { resolvedTheme } = useTheme();
    const [currentTheme, setCurrentTheme] = useState(lightTheme);

    useEffect(() => {
        resolvedTheme === "light"
            ? setCurrentTheme(lightTheme)
            : setCurrentTheme(darkTheme);
    }, [resolvedTheme]);

    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            <GlobalStyles styles={globalStyles} />
            {children}
        </ThemeProvider>
    );
};

export default MUIThemeProvider;
