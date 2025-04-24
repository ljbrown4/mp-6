"use client"

import { signOut } from "next-auth/react";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";

export default function SignOut() {
    const SignOut = async () => {
        try {
            await signOut({ redirect: false })
            window.location.href = "/";
        } catch (error) {
            console.error("Sign-out failed:", error)
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Button
                onClick={SignOut}
                variant="contained"
                color="primary"
                sx={{
                    padding: "10px 20px",
                    borderRadius: "8px",
                    textTransform: "none",
                    width: "90%",
                }}
            >
                Sign out
            </Button>
        </ThemeProvider>
    )
}
