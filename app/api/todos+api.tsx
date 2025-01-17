const API_URL = process.env.EXPO_PUBLIC_API_URL;

export async function GET(request: Request) {
	const token = request.headers.get("Authorization");
	console.log("API token", token);
	const response = await fetch(`${API_URL}/todos`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const data = await response.json();

	if (!response.ok) {
		return Response.json({ error: data.message }, { status: response.status });
	}

	return Response.json(data);
}
