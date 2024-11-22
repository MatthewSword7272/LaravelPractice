import Footer from "@/Components/Footer";
import Leaderboard from "@/Components/Leaderboard";
import AppLayout from "@/Layouts/AppLayout";
import { Head, Link } from "@inertiajs/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Welcome({}) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    const leagues = [
        {
            id: 1,
            leagueName: "North Metro Cricket Association",
            divisions: [{ id: 1, divisionName: "North Metro CA - Senior" }],
        },
        {
            id: 2,
            leagueName: "North West Metropolitan Cricket Association",
            divisions: [
                { id: 2, divisionName: "NWMCA JUNIORS" },
                { id: 3, divisionName: "NWMCA SENIORS" },
                { id: 4, divisionName: "SAHARA REAL ESTATE T20 TOURNAMENT" },
            ],
        },
        {
            id: 3,
            leagueName: "Victorian Turf Cricket Association",
            divisions: [{ id: 5, divisionName: "VTCA Competition" }],
        },
    ];

    return (
        <AppLayout>
            <Head title="Welcome" />

            <div className="flex flex-col">
                <div className="w-full lg:w-[45%] space-y-8 z-10 my-10">
                    <h1 className="text-blue-900 text-xl lg:text-4xl font-bold leading-tight">
                        Introduce Your Product Quickly & Effectively
                    </h1>
                    <div className="text-lg space-y-4">
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean
                            massa. Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus.
                        </p>
                        <p>
                            Donec quam felis, ultricies nec, pellentesque eu,
                            pretium quis, sem. Nulla consequat massa quis enim.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-blue-900 text-white px-8 py-3 rounded hover:bg-blue-800 transition-colors">
                            Buy Kit
                        </button>
                        <button className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded hover:bg-blue-900 hover:text-white transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full text-center">
                <Slider {...settings}>
                    {leagues.map((league) =>
                        league.divisions.map((division) => (
                            <div>
                                <Leaderboard
                                    leagueName={league.leagueName}
                                    divisionName={division.divisionName}
                                    divisionID={division.id}
                                />
                            </div>
                        ))
                    )}
                    {/* <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div> */}
                </Slider>
            </div>
        </AppLayout>
    );
}
