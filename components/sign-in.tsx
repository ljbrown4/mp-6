"use client"

import { signIn } from "next-auth/react";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";

export default function SignIn() {
    const SignIn = async () => {
        try {
            await signIn("google")
        } catch (error) {
            console.error("Sign-in failed:", error)
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Button
                onClick={SignIn}
                variant="contained"
                color="primary"
                size="large"
                sx={{
                    padding: "10px 20px",
                    borderRadius: "8px",
                    textTransform: "none", //didn't like the all caps
                }}
            >
                Sign in with Google
            </Button>
        </ThemeProvider>
    )
}
