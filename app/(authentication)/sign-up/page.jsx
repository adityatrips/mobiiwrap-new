"use client";

import { useState } from "react";
import { Button, Input, Link } from "@nextui-org/react";
import { useAuth } from "@/context/AuthContext";

const SignupPage = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { signup } = useAuth();

	const handleSubmit = (e) => {
		e.preventDefault();

		signup(`${firstName} ${lastName}`, email, password);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col items-center justify-center w-full gap-4"
		>
			<h2 className="text-center">Welcome to the shop! 🛒</h2>
			<p className="text-center">
				Signup with an account to unlock a special shopping experience
			</p>
			<div className="flex w-full gap-4">
				<Input
					required
					defaultValue={firstName}
					onChange={(e) => setFirstName(e.target.value)}
					color="default"
					type="text"
					label="First name"
				/>
				<Input
					required
					defaultValue={lastName}
					onChange={(e) => setLastName(e.target.value)}
					color="default"
					type="text"
					label="Second name"
				/>
			</div>
			<Input
				required
				defaultValue={email}
				onChange={(e) => setEmail(e.target.value)}
				color="default"
				type="email"
				label="Email"
			/>
			<Input
				required
				defaultValue={password}
				onChange={(e) => setPassword(e.target.value)}
				color="default"
				type="password"
				label="Password"
			/>
			<div className="flex justify-between gap-4 w-full">
				<Button type="submit" color="primary" className="w-2/5">
					Register
				</Button>
				<p className="flex items-center">
					Already have an account?&nbsp;<Link href="/sign-up">Sign up</Link>
				</p>
			</div>
		</form>
	);
};

export default SignupPage;
