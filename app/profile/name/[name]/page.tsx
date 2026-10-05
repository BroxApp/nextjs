const users = [
    {
        name: "john",
        email: "john.doe@example.com",
        bio: "Software developer and tech enthusiast.",
    },
    {
        name: "jane",
        email: "jane.smith@example.com",
        bio: "Design enthusiast and creative thinker.",
    },
    {
        name: "alice",
        email: "alice.johnson@example.com",
        bio: "Data scientist and analytics professional.",
    },
];

export default async function ProfilePage({
    params,
}: {
    params: Promise<{ name: string }>;
}) {
    const { name } = await params;

    const user = users.find(
        (user) => user.name.toLowerCase() === name.toLowerCase()
    );

    if (!user) {
        return <h1>User not found</h1>;
    }

    return (
        <div>
            <h1>My Profile</h1>

            <h2>{user.name}</h2>

            <p>Email: {user.email}</p>

            <p>Bio: {user.bio}</p>
        </div>
    );
}