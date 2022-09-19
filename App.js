import Router from "./app/routes/Router";
import AuthState from "./app/services/AuthState";

export default function App() {
	return (
		<AuthState>
			<Router />
		</AuthState>
	);
}
