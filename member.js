function skillsMember() {
    return {
        name: "skills",
        description: "Skills",
        options: [
            {
                name: "add",
                description: "Add a skill to your profile",
                type: 1,
                options: [
                    {
                        name: "name",
                        description: "The name of the skill you want to add",
                        type: 3,
                        required: true
                    },
                    {
                        name: "level",
                        description: "The level of the skill you want to add (0-100)",
                        type: 4,
                        required: true
                    }
                ]
            },
            {
                name: "remove",
                description: "Remove a skill from your profile",
                type: 1,
                options: [
                    {
                        name: "name",
                        description: "The name of the skill you want to remove",
                        type: 3,
                        required: true
                    }
                ]
            },
            {
                name: "list",
                description: "List all your skills",
                type: 1
            }
        ]
    };
}