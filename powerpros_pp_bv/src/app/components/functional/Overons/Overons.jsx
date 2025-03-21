import React, { useEffect, useState } from "react";
import "./Overons.css";

import { fetchOverons } from "../../../../data/api";
const Overons = () => {
  const [overonsData, setOveronsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchOverons();
        setOveronsData(data);
      } catch (error) {
        console.error("Error fetching over-ons data:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="overons">
        <div className="overons">
          {overonsData &&
            overonsData.map((member) => (
              <div key={member.id} className="">
                <div className="overons__info">
                  <p className="overons__description">{member.description}</p>
                  {member.imgCover && (
                    <img
                      src={`http://localhost:1337${member.imgCover.url}`}
                      alt="Teamlid afbeelding"
                      width={180}
                      height={180}
                      className=""
                    />
                  )}
                </div>
              </div>
            ))}

            <div className="overons__werk">
                <img src="/public/foto's/belgium.png" alt="" />
            </div>
          <div className="overons__reviews">
            <div className="overons__klant">
            <p>Wat zegt ons klant</p>
            </div>
            
            <ul>
              {overonsData &&
                overonsData.map((member) => (
                  <li key={member.id}>
                    {member.imgCoverons && (
                      <img
                        src={`http://localhost:1337${member.imgCoverons.url}`}
                        alt="imgCoverons afbeelding"
                        width={50}
                        height={50}
                        className="overons__img"
                      />
                    )}
                    {member.naam}
                    <strong>Stad: {member.stad}</strong>
                    <p>{member.reviews}</p>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Overons;
