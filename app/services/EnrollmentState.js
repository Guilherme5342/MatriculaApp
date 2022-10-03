import * as Crypto from "expo-crypto";
import React, { createContext, useEffect, useState } from "react";

export const EnrollmentContext = createContext();

export default AuthState = ({ children }) => {
	const [enrollmentActive, setEnrollmentActive] = useState(true);

	const enroll = async (subjects) => {};

	const removeSubject = () => {};

	const enrollmentContextVariables = {
		enrollmentActive,
		enroll,
		removeSubject,
	};

	return (
		<EnrollmentContext.Provider value={enrollmentContextVariables}>
			{children}
		</EnrollmentContext.Provider>
	);
};
