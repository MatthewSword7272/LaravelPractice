export default function Leaderboard({ divisionID, league }) {
    const teams = [
        {
            id: 1,
            teamName: [
                "East Coburg",
                "West Richmond",
                "North Melbourne",
                "South Sydney",
                "Central Lions",
                "Coastal Sharks",
                "Mountain Eagles",
                "River Raiders",
                "Valley Vikings",
            ],
        },
        {
            id: 2,
            teamName: [
                "East Coburg",
                "West Richmond",
                "North Melbourne",
                "South Sydney",
                "Central Lions",
                "Coastal Sharks",
                "Mountain Eagles",
                "River Raiders",
                "Valley Vikings",
            ],
        },
        {
            id: 3,
            teamName: [
                "East Coburg",
                "West Richmond",
                "North Melbourne",
                "South Sydney",
                "Central Lions",
                "Coastal Sharks",
                "Mountain Eagles",
                "River Raiders",
                "Valley Vikings",
            ],
        },
        {
            id: 4,
            teamName: [
                "East Coburg",
                "West Richmond",
                "North Melbourne",
                "South Sydney",
                "Central Lions",
                "Coastal Sharks",
                "Mountain Eagles",
                "River Raiders",
                "Valley Vikings",
            ],
        },
        {
            id: 5,
            teamName: [
                "East Coburg",
                "West Richmond",
                "North Melbourne",
                "South Sydney",
                "Central Lions",
                "Coastal Sharks",
                "Mountain Eagles",
                "River Raiders",
                "Valley Vikings",
            ],
        },
    ];

    const teamsArray = [];

    teams.forEach((team) => {
        teamsArray.push({
            id: team.id,
            teamNames: team.teamName,
            image: "/images/logo.png",
            Matches: Math.floor(Math.random() * 20),
            Wins: Math.floor(Math.random() * 20),
            Loses: Math.floor(Math.random() * 20),
            Total: Math.floor(Math.random() * 20),
            PTS: Math.floor(Math.random() * 20),
            NRR: (Math.random() * (Math.random() < 0.5 ? -1 : 1)).toFixed(3),
        });

        teamsArray.sort((a, b) => b.Wins - a.Wins);
    });

    console.log(teamsArray.find((team) => team.id === divisionID).teamNames);

    console.log(league.leagueName);
    console.log(
        league.divisions.find((division) => division.id === divisionID)
            .divisionName
    );

    return (
        <div className="flex flex-col items-start w-1/2 space-y-4">
            <h2>{league.leagueName}</h2>
            <div className="flex flex-row w-full items-baseline gap-x-4">
                <h2 className="whitespace-nowrap">
                    {league.divisions.find(
                        (division) => division.id === division
                    )}
                </h2>
                <div className="flex bg-black w-full h-0.5"></div>
            </div>
            <div className="w-full">
                <div className="flex text-black font-extrabold px-4">
                    <div className="w-1/2">
                        <div>Teams</div>
                    </div>
                    <div className="w-1/2 flex justify-between text-center">
                        <div className="w-[15px]">M</div>
                        <div className="w-[15px]">W</div>
                        <div className="w-[13px]">L</div>
                        <div className="w-[15px]">T</div>
                        <div className="w-[30px]">PTS</div>
                        <div className="w-[30px]">NRR</div>
                    </div>
                </div>
                <div className="space-y-5">
                    {teamsArray.map((teamName, index) => (
                        <div
                            key={index}
                            className="flex items-center bg-gray-300 rounded-full"
                        >
                            <div className="w-1/2 flex items-center h-20">
                                <img
                                    src={teamName.image}
                                    className="scale-[30%] rounded-full left-px"
                                />
                                <div>{teamName.name}</div>
                            </div>
                            <div className="w-1/2 flex justify-between pr-3">
                                <div>{teamName.Matches}</div>
                                <div>{teamName.Wins}</div>
                                <div>{teamName.Loses}</div>
                                <div>{teamName.Total}</div>
                                <div>{teamName.PTS}</div>
                                <div>{teamName.NRR}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
