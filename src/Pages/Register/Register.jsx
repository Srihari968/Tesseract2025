import ComingSoonCard from "../../Components/ComingSoonCard/ComingSoonCard";

function Register() {
    return (
    <div className="relative mx-auto max-w-page_lg md:px-8 px-4 pt-32 overflow-x-hidden overflow-y-hidden">
        <div className="font-hero text-center font-semibold text-4xl">Registrations</div>
        <div className="mt-8">
            {/* {EventsData.map((data, index) => {
              return (
                <EventCard data={data} flipLayout={index % 2 === 1} key={index} />
              )
            })} */}
            <ComingSoonCard></ComingSoonCard>
        </div>
    </div>
    )
}

export default Register;    