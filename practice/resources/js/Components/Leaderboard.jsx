export default function Leaderboard({ divisionID, leagueName, divisionName }) {
    const divisions = [
        {
            id: 1,
            teamNames: [
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
            teamNames: [
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
            teamNames: [
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
            teamNames: [
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
            teamNames: [
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

    const teamsArray = []; //Blank team array for display on UI
    const currentDivision = divisions.find(
        //Get Current League from local division data using divisionID
        (division) => division.id === divisionID
    );

    //Generate Team data and structure for display
    currentDivision.teamNames.forEach((team) => {
        teamsArray.push({
            teamName: team,
            image: "/images/logo.png",
            Matches: Math.floor(Math.random() * 20),
            Wins: Math.floor(Math.random() * 20),
            Loses: Math.floor(Math.random() * 20),
            Total: Math.floor(Math.random() * 20),
            PTS: Math.floor(Math.random() * 20),
            NRR: (Math.random() * (Math.random() < 0.5 ? -1 : 1)).toFixed(3),
        });
    });

    return (
        <div className="flex flex-col items-start w-1/2 space-y-4">
            <h2>{leagueName}</h2>
            <div className="flex flex-row w-full items-baseline gap-x-4">
                <h2 className="whitespace-nowrap">{divisionName}</h2>
                <div className="flex bg-black w-full h-0.5" />
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
                    {teamsArray.map((team, index) => (
                        <div
                            key={index}
                            className="flex items-center bg-gray-300 rounded-full"
                        >
                            <div className="w-1/2 flex items-center h-20">
                                <img
                                    src={team.image}
                                    className="scale-[30%] rounded-full left-px"
                                />
                                <div>{team.teamName}</div>
                            </div>
                            <div className="w-1/2 flex justify-between pr-3">
                                <div>{team.Matches}</div>
                                <div>{team.Wins}</div>
                                <div>{team.Loses}</div>
                                <div>{team.Total}</div>
                                <div>{team.PTS}</div>
                                <div>{team.NRR}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
