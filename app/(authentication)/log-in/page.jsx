"use client";

import { useAuth } from "@/context/AuthContext";
import { Button, Input, Link } from "@nextui-org/react";
import { useState } from "react";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { login } = useAuth();

	const handleSubmit = (e) => {
		e.preventDefault();

		login(email, password);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col items-center justify-center w-full gap-4"
		>
			<h2 className="text-center">Welcome to the shop! 🛒</h2>
			<p className="text-center">Login to your account to continue shopping</p>
			<Input
				required
				defaultValue={email}
				onChange={(e) => setEmail(e.target.value)}
				color="default"
				type="email"
				label="Enter your email"
			/>
			<Input
				required
				defaultValue={password}
				onChange={(e) => setPassword(e.target.value)}
				color="default"
				type="password"
				label="Enter your password"
			/>
			<div className="flex justify-between gap-4 w-full">
				<p className="flex items-center">
					No account?&nbsp;<Link href="/sign-up">Sign up</Link>
				</p>
				<Button type="submit" color="primary" className="w-2/5">
					Login
				</Button>
			</div>
		</form>
	);
};

export default LoginPage;
