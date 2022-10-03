import Router from "./app/routes/Router";
import AuthState from "./app/services/AuthState";
import EnrollmentState from "./app/services/EnrollmentState";

export default function App() {
	return (
		<AuthState>
			<EnrollmentState>
				<Router />
			</EnrollmentState>
		</AuthState>
	);
}
