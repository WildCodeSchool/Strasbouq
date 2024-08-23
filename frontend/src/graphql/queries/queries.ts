import { gql } from "@apollo/client";

export const GET_ALL_CITIES = gql`
	query GetAllCities {
		getAllCities {
			name
			description
			id
			lat
			lon
			pois {
				id
				name
				address
				description
			}
		}
	}
`;

export const GET_ALL_POIS = gql`
	query GetAllPois {
		getAllPois {
			id
			description
			address
			name
			latitude
			longitude
			postalCode
			city {
				id
				name
			}
			category {
				id
				name
			}
			images
		}
	}
`;

export const GET_ALL_CATEGORIES = gql`
	query getAllCategories {
		getAllCategories {
			name
			id
		}
	}
`;

export const GET_CITY_BY_NAME = gql`
	query getCityByName($name: String!) {
		getCityByName(name: $name) {
			name
			description
			pois {
				id
				name
				address
				description
				latitude
				longitude
				images
				category {
					id
					name
				}
			}
			lon
			lat
		}
	}
`;

export const GET_POI_BY_ID = gql`
	query getPoiById($id: Float!) {
		getPoiById(id: $id) {
			description
			address
			name
			latitude
			longitude
			postalCode
			city {
				id
				name
			}
			category {
				id
				name
			}
			images
		}
	}
`;

export const LOGIN = gql`
	query Login($userData: UserLoginInput!) {
		login(userData: $userData)
	}
`;

export const CHECK_INFO = gql`
	query CheckSession {
		checkSession {
			email
			isLoggedIn
			role
		}
	}
`;

export const GET_USER = gql`
	query GetUserById($getUserByIdId: Float!) {
		getUserById(id: $getUserByIdId) {
			id
			lastName
			firstName
			email
			role
			city {
				name
			}
		}
	}
`;

export const GET_CITY_BY_ID = gql`
	query GetCityById($getCityByIdId: Float!) {
		getCityById(id: $getCityByIdId) {
			id
			name
			description
			lat
			lon
			pois {
				id
				name
				category {
					id
					name
				}
				address
				description
				latitude
				longitude
				postalCode
				ratings {
					id
					rating
					text
				}
			}
		}
	}
`;

export const CHECK_EMAIL_UNIQUE = gql`
	query IsEmailUnique($email: String!) {
		isEmailUnique(email: $email)
	}
`;

export const CHECK_CITY_UNIQUE = gql`
	query IsCityNameUnique($name: String!) {
		isCityNameUnique(name: $name)
	}
`;

export const GET_USER_BY_EMAIL = gql`
	query GetUserByEmail($email: String!) {
		getUserByEmail(email: $email) {
			id
			firstName
			lastName
			email
			role
			city {
				id
				name
			}
		}
	}
`;
