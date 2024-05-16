import React from "react";
import Link from "next/link";
import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/router";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { mainTheme } from "@theme";
import { useAuth } from "context/UserContext";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

export const Header = () => {
	const { onLogout, isAuthenticated, user } = useAuth();
	const router = useRouter();

	return (
		<AppBar position="static">
			<Toolbar
				sx={{
					display: "flex",
					justifyContent: "space-between",
					boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
				}}
			>
				<Link href="/" passHref>
					<Typography color="inherit" sx={{ letterSpacing: "0.04em" }}>
						CITY GUIDE
					</Typography>
				</Link>
				<div>
					<img
						src="/images/logo.png"
						alt="Logo CityGuide"
						style={{ height: 60, marginRight: 1 }}
					/>
				</div>
				{isAuthenticated ? (
					<Stack flexDirection="row" gap={4}>
						{user?.role === "ADMIN" || user?.role === "CITYADMIN" ? (
							<AdminPanelSettingsIcon
								onClick={() => {
									router.push("/admin");
								}}
								sx={{
									fontSize: mainTheme.typography.h3,
									cursor: "pointer",
								}}
							/>
						) : (
							<></>
						)}
						<AccountCircleIcon
							onClick={() => router.push("/profil")}
							sx={{
								fontSize: mainTheme.typography.h3,
								cursor: "pointer",
							}}
						/>
						<LogoutIcon
							onClick={onLogout}
							sx={{
								fontSize: mainTheme.typography.h3,
								cursor: "pointer",
							}}
						/>
					</Stack>
				) : (
					<Link href="/login" passHref>
						<Typography color="inherit">CONNEXION</Typography>
					</Link>
				)}
			</Toolbar>
		</AppBar>
	);
};
