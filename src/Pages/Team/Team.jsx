import React from "react"
import TeamCard from "../../Components/TeamCard/TeamCard"
import "./Team.css"
import teamsData from "./teamsData"
import eventsLeadData from "./updated_eventLeads"
import ComingSoonCard from "../../Components/ComingSoonCard/ComingSoonCard"

export default function Team() {
  return (
    <div className="teamBody relative mx-auto max-w-page_lg md:px-8 px-4 pt-4 overflow-x-hidden overflow-y-hidden">
      <div className="teamWrapper">
        <div className="teamsContentWrapper">
          <div className="teamHeaderWrapper">
            <div className="teamHeader">
              <h1 className="font-hero text-center font-semibold text-4xl">
                Meet the Team
              </h1>
            </div>
          </div>
          {teamsData.map((team, index) => (
            <div key={index} className="teamContainer">
              <h2 className="font-hero">{team.name}</h2>
              <div className="teamCardWrapper">
                {team.members.map((member, index) => (
                  <TeamCard data={member} key={index} />
                ))}
              </div>
            </div>
          ))}
          <div className="teamContainer">
            <h2 className="font-hero">EVENTS TEAM</h2>
          </div>
          {eventsLeadData.map((team, index) => (
            <div className="teamContainer" key={index}>
              <h3 className="font-hero">{team.name}</h3>
              <div className="teamCardWrapper">
                {team.members.map((member, index) => (
                  <TeamCard data={member} key={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
