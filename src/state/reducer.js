export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	// token: 'BQDaf18VUxOubMurQpPYJJj6FBZX-d5UuVCHQGIu3-UGPJx_N9bSBtLMtFOt1ddtAqkHWsKFq811OQB0AKU15CppVYLXFaf_ak3MTf4e8sqBDG8s2j3Gj0uz7HorXEjkYmpzg0j9c2nQJzpWMIGZ-nHeSrEp8_SYf3rR54zgSor4CGQXSvZpsT72i8q4OnxYwmOR4u60xGV6MPQ'
}

const reducer = (state, action) => {
	console.log(action)

	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user
			}

			case 'SET_TOKEN':
				return {
					...state,
					token: action.token
				}
				case "SET_PLAYLISTS":
					return {
						...state,
						playlists: action.playlists
					}
					case 'SET_DISCOVER_WEEKLY':
						return {
							...state,
							discover_weekly: action.discover_weekly,
						}
						default:
							return state
	}
}

export default reducer