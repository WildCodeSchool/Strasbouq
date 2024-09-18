import { SearchForm } from "@components";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";
import { mainTheme } from "@theme";
import { ReactTyped } from "react-typed";
import Head from "next/head";

const Home = () => {
	return (
		<>
			<Head>
				<title>Accueil | CityGuide</title>
				<meta name="title" content="Accueil | CityGuide" />
				<meta name="description" content="Explorez, partagez et découvrez" />
				<meta name="author" content="CityGuide Team" />
				<meta
					name="keywords"
					content="CityGuide, explorez, partagez, découvrez, ville, point d'intérêt, POI, tourisme, visitez"
				/>
			</Head>
			<Stack
				direction="row"
				display="flex"
				alignItems="center"
				justifyContent="center"
				flex="1"
				width="100%"
			>
				<Box
					display="flex"
					flexDirection="column"
					alignItems="flex-start"
					justifyContent={{
						xs: "space-between",
						sm: "space-between",
						md: "space-around",
						lg: "space-around",
					}}
					width="50%"
					paddingLeft={{ xs: 4, sm: 6, md: 8, lg: 10 }}
					gap={{ xs: 10, sm: 8, md: 6, lg: 6 }}
				>
					<Typography
						fontSize={{
							xs: mainTheme.typography.h2.fontSize,
							sm: mainTheme.typography.h2.fontSize,
							md: mainTheme.typography.h1.fontSize,
							lg: mainTheme.typography.h1.fontSize,
						}}
						sx={{
							color: mainTheme.palette.primary.main,
							fontWeight: "bold",
						}}
					>
						EXPLOREZ
					</Typography>
					<Typography
						fontSize={{
							xs: mainTheme.typography.h2.fontSize,
							sm: mainTheme.typography.h2.fontSize,
							md: mainTheme.typography.h1.fontSize,
							lg: mainTheme.typography.h1.fontSize,
						}}
						sx={{
							color: mainTheme.palette.primary.main,
							fontWeight: "bold",
						}}
					>
						<ReactTyped
							strings={["PARIS", "LYON", "NICE", "REIMS", "LILLE", "ANNECY"]}
							typeSpeed={80}
							backSpeed={90}
							loop
						/>
					</Typography>
					<Typography
						fontSize={{
							xs: mainTheme.typography.h3.fontSize,
							sm: mainTheme.typography.h3.fontSize,
							md: mainTheme.typography.h2.fontSize,
							lg: mainTheme.typography.h2.fontSize,
						}}
						sx={{
							color: mainTheme.palette.primary.main,
							fontWeight: "bold",
						}}
					>
						COMME UN LOCAL
					</Typography>
					<Box
						width={{
							xs: "120%",
							sm: "100%",
							md: "90%",
							lg: "80%",
						}}
					>
						<SearchForm />
					</Box>
				</Box>
				<Box
					display="flex"
					alignItems="center"
					height="100%"
					overflow="hidden"
					width="50%"
				>
					<img
						style={{
							width: "150%",
							height: "auto",
							objectFit: "cover",
							transform: "translateX(+5%)",
						}}
						src="/images/homepage.png"
						alt="View from nature"
					/>
				</Box>
			</Stack>
		</>
	);
};
export default Home;
